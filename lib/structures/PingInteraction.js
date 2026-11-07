"use strict";

const Interaction = require("./Interaction");
const { InteractionResponseTypes } = require("../Constants");

/**
 * Represents a ping interaction. See Interaction for more properties
 * @extends Interaction
 */
class PingInteraction extends Interaction {
  constructor(info, client) {
    super(info, client);
  }

  /**
   * Acknowledge the ping interaction with a pong response
   * Note: You can **not** send more than one initial response per interaction
   * @returns {Promise}
   */
  async acknowledge() {
    return this.pong();
  }

  /**
   * Acknowledge the ping interaction with a pong response
   * Note: You can **not** send more than one initial response per interaction
   * @returns {Promise}
   */
  async pong() {
    if (this.acknowledged === true) {
      throw new Error("You have already acknowledged this interaction.");
    }
    return this._client.createInteractionResponse.call(this._client, this.id, this.token, {
      type: InteractionResponseTypes.PONG,
    }).then(() => this.update());
  }
}

module.exports = PingInteraction;
