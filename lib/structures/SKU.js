"use strict";

const Base = require("./Base");

/**
 * Represents a SKU
 * @prop {String} applicationID The ID of the application
 * @prop {Number} flags The flags of the SKU
 * @prop {String} name The name of the SKU
 * @prop {String} slug The slug of the SKU
 * @prop {Number} type The type of the SKU
 */
class SKU extends Base {
  constructor(data) {
    super(data.id);
    this.update(data);
  }

  update(data) {
    if (data.application_id !== undefined) {
      this.applicationID = data.application_id;
    }
    if (data.flags !== undefined) {
      this.flags = data.flags;
    }
    if (data.name !== undefined) {
      this.name = data.name;
    }
    if (data.slug !== undefined) {
      this.slug = data.slug;
    }
    if (data.type !== undefined) {
      this.type = data.type;
    }
  }

  toJSON(props = []) {
    return super.toJSON([
      "applicationID",
      "flags",
      "name",
      "slug",
      "type",
      ...props,
    ]);
  }
}

module.exports = SKU;
