"use strict";

const Base = require("./Base");

/**
 * Represents a subscription
 * @prop {Number?} canceledAt Timestamp of when the subscription was canceled
 * @prop {String?} country The ISO3166-1 alpha-2 country code of the payment source used to purchase the subscription (only present when queried with a private OAuth scope)
 * @prop {Number} currentPeriodEnd Timestamp of the end of the current subscription period
 * @prop {Number} currentPeriodStart Timestamp of the start of the current subscription period
 * @prop {Array<String>} entitlementIDs The IDs of the entitlements granted by the subscription
 * @prop {Array<String>?} renewalSKUIDs The IDs of the SKUs that will be subscribed to at renewal
 * @prop {Array<String>} skuIDs The IDs of the SKUs subscribed to
 * @prop {Number} status The status of the subscription
 * @prop {String} userID The ID of the subscribed user
 */
class Subscription extends Base {
  constructor(data) {
    super(data.id);
    this.update(data);
  }

  update(data) {
    if (data.canceled_at !== undefined) {
      this.canceledAt = data.canceled_at === null ? null : Date.parse(data.canceled_at);
    }
    if (data.country !== undefined) {
      this.country = data.country;
    }
    if (data.current_period_end !== undefined) {
      this.currentPeriodEnd = Date.parse(data.current_period_end);
    }
    if (data.current_period_start !== undefined) {
      this.currentPeriodStart = Date.parse(data.current_period_start);
    }
    if (data.entitlement_ids !== undefined) {
      this.entitlementIDs = data.entitlement_ids;
    }
    if (data.renewal_sku_ids !== undefined) {
      this.renewalSKUIDs = data.renewal_sku_ids;
    }
    if (data.sku_ids !== undefined) {
      this.skuIDs = data.sku_ids;
    }
    if (data.status !== undefined) {
      this.status = data.status;
    }
    if (data.user_id !== undefined) {
      this.userID = data.user_id;
    }
  }

  toJSON(props = []) {
    return super.toJSON([
      "canceledAt",
      "country",
      "currentPeriodEnd",
      "currentPeriodStart",
      "entitlementIDs",
      "renewalSKUIDs",
      "skuIDs",
      "status",
      "userID",
      ...props,
    ]);
  }
}

module.exports = Subscription;
