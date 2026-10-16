"use strict";

const Base = require("./Base");

/**
 * Represents a stage instance
 * @prop {StageChannel} channel The associated stage channel
 * @prop {Boolean} discoverableDisabled [DEPRECATED] Whether or not stage discovery is disabled. Deprecated by Discord
 * @prop {Guild} guild The guild of the associated stage channel
 * @prop {String?} guildScheduledEventID The ID of the scheduled event associated with the stage instance
 * @prop {String} id The ID of the stage instance
 * @prop {Number} privacyLevel The privacy level of the stage instance. 1 is public ([DEPRECATED]), 2 is guild only
 * @prop {String} topic The stage instance topic
 */
class StageInstance extends Base {
  constructor(data, client) {
    super(data.id);
    this._client = client;
    this.channel = client.getChannel(data.channel_id) || { id: data.channel_id };
    this.guild = client.guilds.get(data.guild_id) || { id: data.guild_id };
    this.update(data);
  }

  update(data) {
    if (data.discoverable_disabled !== undefined) {
      this.discoverableDisabled = data.discoverable_disabled;
    }
    if (data.guild_scheduled_event_id !== undefined) {
      this.guildScheduledEventID = data.guild_scheduled_event_id;
    }
    if (data.privacy_level !== undefined) {
      this.privacyLevel = data.privacy_level;
    }
    if (data.topic !== undefined) {
      this.topic = data.topic;
    }
  }

  /**
   * Delete this stage instance
   * @arg {String} [reason] The reason to be displayed in audit logs
   * @returns {Promise}
   */
  delete(reason) {
    return this._client.deleteStageInstance.call(this._client, this.channel.id, reason);
  }

  /**
   * Update this stage instance
   * @arg {Object} options The properties to edit
   * @arg {Number} [options.privacyLevel] The privacy level of the stage instance. 1 is public ([DEPRECATED]), 2 is guild only
   * @arg {String} [options.topic] The stage instance topic
   * @arg {String} [reason] The reason to be displayed in audit logs
   * @returns {Promise<StageInstance>}
   */
  edit(options, reason) {
    return this._client.editStageInstance.call(this._client, this.channel.id, options, reason);
  }
}

module.exports = StageInstance;
