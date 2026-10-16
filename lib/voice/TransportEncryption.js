"use strict";

const Crypto = require("crypto");

/**
 * Voice transport encryption ("rtpsize" AEAD modes) used between the client and Discord's voice servers.
 *
 * Packet layout (both directions):
 * `RTP header (unencrypted, used as AAD) | ciphertext | 16 byte auth tag | 4 byte big-endian nonce counter`
 *
 * The unencrypted header is 12 bytes, plus 4 bytes per CSRC, plus the 4 byte extension preamble when the X bit is set.
 * The extension body (if any) is encrypted along with the payload and must be stripped after decryption.
 * @private
 */

const TAG_LENGTH = 16;
const NONCE_LENGTH = 4;

const AES256_GCM_RTPSIZE = "aead_aes256_gcm_rtpsize";
const XCHACHA20_POLY1305_RTPSIZE = "aead_xchacha20_poly1305_rtpsize";

const nodeCiphers = Crypto.getCiphers();
const nodeHasAESGCM = nodeCiphers.includes("aes-256-gcm");
const nodeHasChaChaPoly = nodeCiphers.includes("chacha20-poly1305");

let SodiumNative = null;
let LibSodium = null;
let libSodiumReady = false;

try {
  SodiumNative = require("sodium-native");
  if (typeof SodiumNative.crypto_aead_xchacha20poly1305_ietf_encrypt !== "function") {
    SodiumNative = null;
  }
} catch {
  SodiumNative = null;
}

if (!SodiumNative) {
  try {
    LibSodium = require("libsodium-wrappers");
    Promise.resolve(LibSodium.ready).then(() => {
      if (typeof LibSodium.crypto_aead_xchacha20poly1305_ietf_encrypt === "function") {
        libSodiumReady = true;
      }
    }, () => {});
  } catch {
    LibSodium = null;
  }
}

// HChaCha20 (draft-irtf-cfrg-xchacha), used to derive an XChaCha20 subkey so Node's built-in ChaCha20-Poly1305 can be used without libsodium
function rotl(v, c) {
  return (v << c) | (v >>> (32 - c));
}

function hchacha20(key, nonce16) {
  const s = new Uint32Array(16);
  s[0] = 0x61707865;
  s[1] = 0x3320646E;
  s[2] = 0x79622D32;
  s[3] = 0x6B206574;
  for (let i = 0; i < 8; i++) {
    s[4 + i] = key.readUInt32LE(i * 4);
  }
  for (let i = 0; i < 4; i++) {
    s[12 + i] = nonce16.readUInt32LE(i * 4);
  }
  const qr = (a, b, c, d) => {
    s[a] += s[b];
    s[d] = rotl(s[d] ^ s[a], 16);
    s[c] += s[d];
    s[b] = rotl(s[b] ^ s[c], 12);
    s[a] += s[b];
    s[d] = rotl(s[d] ^ s[a], 8);
    s[c] += s[d];
    s[b] = rotl(s[b] ^ s[c], 7);
  };
  for (let i = 0; i < 10; i++) {
    qr(0, 4, 8, 12);
    qr(1, 5, 9, 13);
    qr(2, 6, 10, 14);
    qr(3, 7, 11, 15);
    qr(0, 5, 10, 15);
    qr(1, 6, 11, 12);
    qr(2, 7, 8, 13);
    qr(3, 4, 9, 14);
  }
  const out = Buffer.allocUnsafe(32);
  for (let i = 0; i < 4; i++) {
    out.writeUInt32LE(s[i], i * 4);
    out.writeUInt32LE(s[12 + i], 16 + i * 4);
  }
  return out;
}

function nodeAEADEncrypt(algorithm, key, iv, aad, plaintext) {
  const cipher = Crypto.createCipheriv(algorithm, key, iv, { authTagLength: TAG_LENGTH });
  cipher.setAAD(aad, { plaintextLength: plaintext.length });
  return Buffer.concat([cipher.update(plaintext), cipher.final(), cipher.getAuthTag()]);
}

function nodeAEADDecrypt(algorithm, key, iv, aad, ciphertext, tag) {
  try {
    const decipher = Crypto.createDecipheriv(algorithm, key, iv, { authTagLength: TAG_LENGTH });
    decipher.setAAD(aad, { plaintextLength: ciphertext.length });
    decipher.setAuthTag(tag);
    return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  } catch {
    return null;
  }
}

function xchachaBackend() {
  if (SodiumNative) {
    return "sodium-native";
  }
  if (LibSodium && libSodiumReady) {
    return "libsodium-wrappers";
  }
  if (nodeHasChaChaPoly) {
    return "node";
  }
  return null;
}

const NONCE_SIZES = {
  [AES256_GCM_RTPSIZE]: 12,
  [XCHACHA20_POLY1305_RTPSIZE]: 24,
};

const ciphers = {
  [AES256_GCM_RTPSIZE]: {
    available() {
      return nodeHasAESGCM;
    },
    encrypt(key, nonce, aad, plaintext) {
      return nodeAEADEncrypt("aes-256-gcm", key, nonce, aad, plaintext);
    },
    decrypt(key, nonce, aad, ciphertext, tag) {
      return nodeAEADDecrypt("aes-256-gcm", key, nonce, aad, ciphertext, tag);
    },
  },
  [XCHACHA20_POLY1305_RTPSIZE]: {
    available() {
      return xchachaBackend() !== null;
    },
    encrypt(key, nonce, aad, plaintext) {
      const backend = xchachaBackend();
      if (backend === "sodium-native") {
        const out = Buffer.allocUnsafe(plaintext.length + SodiumNative.crypto_aead_xchacha20poly1305_ietf_ABYTES);
        SodiumNative.crypto_aead_xchacha20poly1305_ietf_encrypt(out, plaintext, aad, null, nonce, key);
        return out;
      }
      if (backend === "libsodium-wrappers") {
        return Buffer.from(LibSodium.crypto_aead_xchacha20poly1305_ietf_encrypt(plaintext, aad, null, nonce, key));
      }
      const subkey = hchacha20(key, nonce.subarray(0, 16));
      const iv = Buffer.alloc(12);
      nonce.copy(iv, 4, 16, 24);
      return nodeAEADEncrypt("chacha20-poly1305", subkey, iv, aad, plaintext);
    },
    decrypt(key, nonce, aad, ciphertext, tag) {
      const backend = xchachaBackend();
      if (backend === "sodium-native") {
        const out = Buffer.allocUnsafe(ciphertext.length);
        try {
          SodiumNative.crypto_aead_xchacha20poly1305_ietf_decrypt(out, null, Buffer.concat([ciphertext, tag]), aad, nonce, key);
        } catch {
          return null;
        }
        return out;
      }
      if (backend === "libsodium-wrappers") {
        try {
          return Buffer.from(LibSodium.crypto_aead_xchacha20poly1305_ietf_decrypt(null, Buffer.concat([ciphertext, tag]), aad, nonce, key));
        } catch {
          return null;
        }
      }
      const subkey = hchacha20(key, nonce.subarray(0, 16));
      const iv = Buffer.alloc(12);
      nonce.copy(iv, 4, 16, 24);
      return nodeAEADDecrypt("chacha20-poly1305", subkey, iv, aad, ciphertext, tag);
    },
  },
};

/**
 * Supported encryption modes in order of preference
 * @type {Array<String>}
 */
const PREFERRED_MODES = [AES256_GCM_RTPSIZE, XCHACHA20_POLY1305_RTPSIZE];

/**
 * Get the encryption modes usable in this environment, in order of preference
 * @returns {Array<String>}
 */
function getSupportedModes() {
  return PREFERRED_MODES.filter((mode) => ciphers[mode].available());
}

/**
 * Pick the best encryption mode out of those offered by the voice server
 * @arg {Array<String>} offered The modes from the voice Ready payload
 * @returns {String?} The selected mode, or null if none is supported
 */
function selectMode(offered) {
  if (!Array.isArray(offered)) {
    return null;
  }
  return getSupportedModes().find((mode) => offered.includes(mode)) || null;
}

/**
 * Get the length of the unencrypted part of an RTP packet in rtpsize modes
 * (fixed header, CSRCs and the extension preamble if present)
 * @arg {Buffer} packet The RTP packet
 * @returns {Number}
 */
function getUnencryptedHeaderLength(packet) {
  const cc = packet[0] & 0x0F;
  const hasExtension = !!(packet[0] & 0x10);
  return 12 + cc * 4 + (hasExtension ? 4 : 0);
}

class TransportCipher {
  constructor(mode, secret) {
    if (!ciphers[mode]) {
      throw new Error(`Unsupported voice encryption mode: ${mode}`);
    }
    if (!ciphers[mode].available()) {
      throw new Error(`Voice encryption mode ${mode} is not available in this environment`);
    }
    this.mode = mode;
    this.secret = Buffer.from(secret);
    this.cipher = ciphers[mode];
    this.sendNonce = Buffer.alloc(NONCE_SIZES[this.mode]);
    this.nonce = 0;
  }

  /**
   * Decrypt an incoming RTP packet and strip the header extension body if present
   * @arg {Buffer} packet The full RTP packet
   * @returns {Buffer?} The decrypted payload, or null if decryption failed or the packet is malformed
   */
  decrypt(packet) {
    if (packet.length < 12) {
      return null;
    }
    const headerLength = getUnencryptedHeaderLength(packet);
    if (packet.length < headerLength + TAG_LENGTH + NONCE_LENGTH) {
      return null;
    }
    const nonce = Buffer.alloc(NONCE_SIZES[this.mode]);
    packet.copy(nonce, 0, packet.length - NONCE_LENGTH);
    const aad = packet.subarray(0, headerLength);
    const ciphertext = packet.subarray(headerLength, packet.length - NONCE_LENGTH - TAG_LENGTH);
    const tag = packet.subarray(packet.length - NONCE_LENGTH - TAG_LENGTH, packet.length - NONCE_LENGTH);
    let data = this.cipher.decrypt(this.secret, nonce, aad, ciphertext, tag);
    if (!data) {
      return null;
    }
    if (packet[0] & 0x10) {
      // RFC 3550 5.3.1: the preamble is unencrypted, the extension body (length in 32-bit words) is at the start of the decrypted data
      const extensionLength = packet.readUInt16BE(headerLength - 2) * 4;
      if (extensionLength > data.length) {
        return null;
      }
      data = data.subarray(extensionLength);
    }
    return data;
  }

  /**
   * Encrypt an outgoing packet
   * @arg {Buffer} header The RTP header (sent unencrypted and used as additional data)
   * @arg {Buffer} payload The payload (e.g. an Opus frame)
   * @returns {Buffer} The full packet
   */
  encrypt(header, payload) {
    this.nonce = (this.nonce + 1) >>> 0;
    this.sendNonce.writeUInt32BE(this.nonce, 0);
    const encrypted = this.cipher.encrypt(this.secret, this.sendNonce, header, payload);
    return Buffer.concat([header, encrypted, this.sendNonce.subarray(0, NONCE_LENGTH)]);
  }
}

module.exports = {
  AES256_GCM_RTPSIZE,
  XCHACHA20_POLY1305_RTPSIZE,
  PREFERRED_MODES,
  TransportCipher,
  getSupportedModes,
  getUnencryptedHeaderLength,
  hchacha20,
  selectMode,
};
