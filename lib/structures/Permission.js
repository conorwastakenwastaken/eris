"use strict";

const Base = require("./Base");
const { Permissions } = require("../Constants");

const permissionBits = new Map();
const maxCachedBits = 1024;

function toPermissionBits(value) {
  if (typeof value !== "string" || value.length > 32) {
    return value === 0 ? 0n : BigInt(value);
  }
  let bits = permissionBits.get(value);
  if (bits === undefined) {
    bits = BigInt(value);
    if (permissionBits.size < maxCachedBits) {
      permissionBits.set(value, bits);
    }
  }
  return bits;
}

/**
 * Represents a calculated permissions number
 * @prop {BigInt} allow The allowed permissions number
 * @prop {BigInt} deny The denied permissions number
 * @prop {Object} json A JSON representation of the permissions number.
 * If a permission key isn't there, it is not set by this permission.
 * If a permission key is false, it is denied by the permission.
 * If a permission key is true, it is allowed by the permission.
 * i.e.:
 * {
 *   "readMessages": true,
 *   "sendMessages": true,
 *   "manageMessages": false
 * }
 * In the above example, readMessages and sendMessages are allowed permissions, and manageMessages is denied. Everything else is not explicitly set.
 * [A full list of permission nodes can be found on the docs reference page](/Eris/docs/reference)
 */
class Permission extends Base {
  constructor(allow, deny = 0) {
    super();
    if (typeof allow === "object") {
      this.update(allow);
    } else {
      this.allow = toPermissionBits(allow);
      this.deny = toPermissionBits(deny);
    }
  }

  update(data) {
    this.allow = toPermissionBits(data.allow);
    this.deny = toPermissionBits(data.deny || 0);
  }

  get json() {
    if (!this._json) {
      this._json = {};
      for (const perm of Object.keys(Permissions)) {
        if (!perm.startsWith("all")) {
          if (this.allow & Permissions[perm]) {
            this._json[perm] = true;
          } else if (this.deny & Permissions[perm]) {
            this._json[perm] = false;
          }
        }
      }
    }
    return this._json;
  }

  /**
   * Check if this permission allows a specific permission
   * @arg {String | BigInt} permission The name of the permission, or bit of permissions. [A full list of permission nodes can be found on the docs reference page](/Eris/docs/reference). Pass a BigInt if you want to check multiple permissions.
   * @returns {Boolean} Whether the permission allows the specified permission
   */
  has(permission) {
    if (typeof permission === "bigint") {
      return (this.allow & permission) === permission;
    }
    return !!(this.allow & Permissions[permission]);
  }

  toString() {
    return `[${this.constructor.name} +${this.allow} -${this.deny}]`;
  }

  toJSON(props = []) {
    return super.toJSON([
      "allow",
      "deny",
      ...props,
    ]);
  }
}

module.exports = Permission;
