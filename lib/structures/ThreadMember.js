"use strict";

const Base = require("./Base");
const Member = require("./Member");

/**
 * Represents a thread member
 * @prop {Number} flags The user-thread settings of this member
 * @prop {Member?} guildMember The guild member that this thread member belongs to
 * @prop {String} id The ID of the thread member
 * @prop {Number} joinTimestamp Timestamp of when the member joined the thread
 * @prop {String} threadID The ID of the thread this member is a part of
 */
class ThreadMember extends Base {
  constructor(data, client, guildID) {
    super(data.user_id);
    this._client = client;
    this.threadID = data.thread_id || data.id; // Thanks Discord
    this.joinTimestamp = Date.parse(data.join_timestamp);

    if (data.member !== undefined) {
      const guild = this._client.guilds.get(guildID || this._client.threadGuildMap[this.threadID]);
      if (data.user_id) {
        data.member.id = data.user_id;
      }
      if (guild && guild.shard) {
        this.guildMember = guild.members.update(data.member, guild);
      } else {
        const member = Object.assign({}, data.member);
        member.user = member.user || client.users.get(member.id) || { id: member.id };
        this.guildMember = new Member(member, null, client);
      }
      if (data.presence) {
        this.guildMember.update(data.presence);
      }
    }

    this.update(data);
  }

  update(data) {
    if (data.flags !== undefined) {
      this.flags = data.flags;
    }
  }

  /**
   * Remove the member from the thread
   * @returns {Promise}
   */
  leave() {
    return this._client.leaveThread.call(this._client, this.threadID, this.id);
  }

  toJSON(props = []) {
    return super.toJSON([
      "flags",
      "guildMember",
      "joinTimestamp",
      "threadID",
      ...props,
    ]);
  }
}

module.exports = ThreadMember;
