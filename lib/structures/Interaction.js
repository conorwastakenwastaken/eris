"use strict";

const Base = require("./Base");
const Entitlement = require("./Entitlement");
const Permission = require("./Permission");
const { InteractionTypes } = require("../Constants");

/**
 * Represents an interaction. You also probably want to look at PingInteraction, CommandInteraction, ComponentInteraction, AutocompleteInteraction, ModalSubmitInteraction, and UnknownInteraction.
 * @prop {Boolean} acknowledged Whether or not the interaction has been acknowledged
 * @prop {Permission?} appPermissions The permissions the app or bot has within the channel the interaction was sent from
 * @prop {String} applicationID The ID of the interaction's application
 * @prop {Number} attachmentSizeLimit The maximum attachment size in bytes
 * @prop {Object} authorizingIntegrationOwners The IDs of the owners of the installations authorizing the interaction
 * @prop {Number?} context The context in which the interaction was created
 * @prop {Number} createdAt Timestamp of the interaction's creation
 * @prop {Array<Entitlement>} entitlements The entitlements granted to the invoking user or guild
 * @prop {String?} guildLocale The preferred locale of the guild
 * @prop {String} id The ID of the interaction
 * @prop {String?} locale The locale of the user who triggered the interaction
 * @prop {String} token The interaction token (Interaction tokens are valid for 15 minutes after initial response and can be used to send followup messages but you must send an initial response within 3 seconds of receiving the event. If the 3 second deadline is exceeded, the token will be invalidated.)
 * @prop {Number} type 1 is a Ping, 2 is an Application Command, 3 is a Message Component, 4 is a Modal Submit
 * @prop {Number} version The interaction version
 */
class Interaction extends Base {
  constructor(data, client) {
    super(data.id);
    this._client = client;
    if (data.app_permissions !== undefined) {
      this.appPermissions = new Permission(data.app_permissions);
    }

    if (data.locale !== undefined) {
      this.locale = data.locale;
    }

    if (data.guild_locale !== undefined) {
      this.guildLocale = data.guild_locale;
    }

    if (data.context !== undefined) {
      this.context = data.context;
    }

    if (data.authorizing_integration_owners !== undefined) {
      this.authorizingIntegrationOwners = data.authorizing_integration_owners;
    }

    if (data.attachment_size_limit !== undefined) {
      this.attachmentSizeLimit = data.attachment_size_limit;
    }

    if (data.entitlements !== undefined) {
      this.entitlements = data.entitlements.map((entitlement) => new Entitlement(entitlement));
    }

    this.applicationID = data.application_id;
    this.token = data.token;
    this.type = data.type;
    this.version = data.version;
    this.acknowledged = false;
  }

  update() {
    this.acknowledged = true;
  }

  static from(data, client) {
    switch (data.type) {
      case InteractionTypes.PING: {
        return new PingInteraction(data, client);
      }
      case InteractionTypes.APPLICATION_COMMAND: {
        return new CommandInteraction(data, client);
      }
      case InteractionTypes.MESSAGE_COMPONENT: {
        return new ComponentInteraction(data, client);
      }
      case InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE: {
        return new AutocompleteInteraction(data, client);
      }
      case InteractionTypes.MODAL_SUBMIT: {
        return new ModalSubmitInteraction(data, client);
      }
    }

    client.emit("warn", new Error(`Unknown interaction type: ${data.type}\n${JSON.stringify(data)}`));
    return new UnknownInteraction(data, client);
  }
}

module.exports = Interaction;

// Circular import
const PingInteraction = require("./PingInteraction");
const CommandInteraction = require("./CommandInteraction");
const ComponentInteraction = require("./ComponentInteraction");
const AutocompleteInteraction = require("./AutocompleteInteraction");
const ModalSubmitInteraction = require("./ModalSubmitInteraction.js");
const UnknownInteraction = require("./UnknownInteraction");
