"use strict";

const Base = require("./Base");

/**
 * Represents an entitlement
 * @prop {String} applicationID The ID of the application
 * @prop {Boolean?} consumed Whether the entitlement has been consumed
 * @prop {Boolean} deleted Whether the entitlement was deleted
 * @prop {Number?} endsAt Timestamp of when the entitlement expires
 * @prop {String?} guildID The ID of the guild granted access
 * @prop {String} skuID The ID of the SKU
 * @prop {Number?} startsAt Timestamp of when the entitlement becomes valid
 * @prop {Number} type The type of the entitlement
 * @prop {String?} userID The ID of the user granted access
 */
class Entitlement extends Base {
  constructor(data, client) {
    super(data.id);
    if (client) {
      this._client = client;
    }
    this.update(data);
  }

  update(data) {
    if (data.application_id !== undefined) {
      this.applicationID = data.application_id;
    }
    if (data.consumed !== undefined) {
      this.consumed = data.consumed;
    }
    if (data.deleted !== undefined) {
      this.deleted = data.deleted;
    }
    if (data.ends_at !== undefined) {
      this.endsAt = data.ends_at === null ? null : Date.parse(data.ends_at);
    }
    if (data.guild_id !== undefined) {
      this.guildID = data.guild_id;
    }
    if (data.sku_id !== undefined) {
      this.skuID = data.sku_id;
    }
    if (data.starts_at !== undefined) {
      this.startsAt = data.starts_at === null ? null : Date.parse(data.starts_at);
    }
    if (data.type !== undefined) {
      this.type = data.type;
    }
    if (data.user_id !== undefined) {
      this.userID = data.user_id;
    }
  }

  /**
   * Mark this one-time purchase consumable entitlement as consumed
   * @returns {Promise}
   */
  consume() {
    return this._client.consumeEntitlement.call(this._client, this.id);
  }

  /**
   * Delete this test entitlement
   * @returns {Promise}
   */
  delete() {
    return this._client.deleteTestEntitlement.call(this._client, this.id);
  }

  toJSON(props = []) {
    return super.toJSON([
      "applicationID",
      "consumed",
      "deleted",
      "endsAt",
      "guildID",
      "skuID",
      "startsAt",
      "type",
      "userID",
      ...props,
    ]);
  }
}

module.exports = Entitlement;
