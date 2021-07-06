"use strict";

const Base = require("./Base");
const Message = require("./Message");
const Member = require("./Member");
const Constants = require("../Constants");
const Endpoints = require("../rest/Endpoints");

/**
* Represents an interaction
* @prop {String} applicationId The id of the interaction's application
* @prop {String?} channelId The interaction token
* @prop {Object} data The data attached to the interaction
* @prop {Number?} data.componentType The type of Message Component (Message Component only)
* @prop {String?} data.id The ID of the Interaction Data Button id (Message Component), or Command Id (Slash Command)
* @prop {String?} data.name The command name (Slash Command only)
* @prop {Array<Object>?} data.options The run Slash Command options (Slash Command only)
* @prop {String?} data.options.name The name of the Slash Command option (Slash Command only)
* @prop {String?} data.options.value The value of the run Slash Command (Slash Command only)
* @prop {String?} guildId The id of the guild in which the interaction was created
* @prop {String} id The interaction id
* @prop {Member?} member the member who triggered the interaction
* @prop {Message?} message The message the interaction came from (Message Component only)
* @prop {String} token The interaction token (Interaction tokens are valid for 15 minutes and can be used to send followup messages but you must send an initial response within 3 seconds of receiving the event. If the 3 second deadline is exceeded, the token will be invalidated.)
* @prop {Number} type 1 is a Ping, 2 is a Slash Command, 3 is a Message Component
* @prop {Number} version The interaction version
*/
class Interaction extends Base {
    constructor(data, client) {
        super(data.id);
        this._client = client;
        this.applicationId = data.application_id;

        if(data.channel_id !== undefined) {
            this.channelId = data.channel_id;
        }
        if(data.data !== undefined) {
            this.data = {};

            if(data.data.component_type !== undefined) {
                this.data.componentType = data.data.component_type;
            }
            if(data.data.name !== undefined) {
                this.data.name = data.data.name;
            }
            if(data.data.options !== undefined) {
                this.data.options = data.data.options;
            }
        }
        if(data.guild_id !== undefined) {
            this.guildId = data.guild_id;
        }
        if(data.member !== undefined) {
            this.member = new Member(data.member);
        }
        if(data.message !== undefined) {
            this.message = new Message(data.message, this._client);
        }
        if(data.token !== undefined) {
            this.token = data.token;
        }

        this.type = data.type;
        this.version = data.version;
    }

    /**
    * Acknowledges the interaction without replying. (Message Component only)
    * @returns {Promise}
    */
    acknowledge() {
        return this._client.requestHandler.request("POST", Endpoints.INTERACTION_RESPOND(this.id, this.token), true, {
            type: Constants.InteractionResponseType.DEFERRED_UPDATE_MESSAGE
        });
    }

    /**
    * Respond to the interaction
    * @arg {String | Object} content A string or object. If an object is passed:
    * @arg {Object} [content.allowedMentions] A list of mentions to allow (overrides default)
    * @arg {Boolean} [content.allowedMentions.everyone] Whether or not to allow @everyone/@here.
    * @arg {Boolean | Array<String>} [content.allowedMentions.roles] Whether or not to allow all role mentions, or an array of specific role mentions to allow.
    * @arg {Boolean | Array<String>} [content.allowedMentions.users] Whether or not to allow all user mentions, or an array of specific user mentions to allow.
    * @arg {String} content.content A content string
    * @arg {Object} [content.embed] An embed object. See [the official Discord API documentation entry](https://discord.com/developers/docs/resources/channel#embed-object) for object structure
    * @arg {Object | Array<Object>} [content.file] A file object (or an Array of them)
    * @arg {Buffer} content.file.file A buffer containing file data
    * @arg {String} content.file.name What to name the file
    * @arg {Boolean} [content.tts] Set the message TTS flag
    * @arg {Boolean} [content.flags] 64 for Ephemeral
    * @returns {Promise}
    */
    async createFollowup(content) {
        if(content !== undefined) {
            if(typeof content !== "object" || content === null) {
                content = {
                    content: "" + content
                };
            } else if(content.content !== undefined && typeof content.content !== "string") {
                content.content = "" + content.content;
            } else if(content.content === undefined && !content.embed && content.flags === undefined) {
                return Promise.reject(new Error("No content, embed or flags"));
            }
            if(content.content !== undefined || content.embed || content.allowedMentions) {
                content.allowed_mentions = this._client._formatAllowedMentions(content.allowedMentions);
            }
        }
        return this._client.requestHandler.request("POST", Endpoints.WEBHOOK_TOKEN(this.applicationId, this.token), true, content, content.file);//.then((response) => new Message(response, this)); Errored out?
    }

    /**
    * Respond to the interaction !use createFollowup if you have already responded with a different method
    * @arg {String | Object} content A string or object. If an object is passed:
    * @arg {Object} [content.allowedMentions] A list of mentions to allow (overrides default)
    * @arg {Boolean} [content.allowedMentions.everyone] Whether or not to allow @everyone/@here.
    * @arg {Boolean | Array<String>} [content.allowedMentions.roles] Whether or not to allow all role mentions, or an array of specific role mentions to allow.
    * @arg {Boolean | Array<String>} [content.allowedMentions.users] Whether or not to allow all user mentions, or an array of specific user mentions to allow.
    * @arg {String} content.content A content string
    * @arg {Object} [content.embed] An embed object. See [the official Discord API documentation entry](https://discord.com/developers/docs/resources/channel#embed-object) for object structure
    * @arg {Boolean} [content.tts] Set the message TTS flag
    * @arg {Boolean} [content.flags] 64 for Ephemeral
    * @returns {Promise}
    */
    async createMessage(content) {
        if(content !== undefined) {
            if(typeof content !== "object" || content === null) {
                content = {
                    content: "" + content
                };
            } else if(content.content !== undefined && typeof content.content !== "string") {
                content.content = "" + content.content;
            } else if(content.content === undefined && !content.embed && content.flags === undefined) {
                return Promise.reject(new Error("No content, embed or flags"));
            }
            if(content.content !== undefined || content.embed || content.allowedMentions) {
                content.allowed_mentions = this._client._formatAllowedMentions(content.allowedMentions);
            }
        }
        return this._client.requestHandler.request("POST", Endpoints.INTERACTION_RESPOND(this.id, this.token), true, {
            type: Constants.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: content
        });
    }

    /**
    * Defer response to the interaction
    * @arg {Boolean} [flags] 64 for Ephemeral
    * @returns {Promise}
    */
    async defer(flags) {
        return this._client.requestHandler.request("POST", Endpoints.INTERACTION_RESPOND(this.id, this.token), true, {
            type: Constants.InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                flags: flags || 0
            }
        });
    }

    /**
    * Defer message update (Message Component only)
    * @returns {Promise}
    */
    async deferUpdate() {
        return this._client.requestHandler.request("POST", Endpoints.INTERACTION_RESPOND(this.id, this.token), true, {
            type: Constants.InteractionResponseType.DEFERRED_UPDATE_MESSAGE
        });
    }

    /**
    * Delete a message
    * @arg {String} messageId the id of the message to edit, or "@original" for the original response, "@original" will will error with ephemeral messages
    * @returns {Promise}
    */
    async delete(messageId) {
        return this._client.requestHandler.request("DELETE", Endpoints.WEBHOOK_MESSAGE(this.applicationId, this.token, messageId), true);
    }

    /**
    * Edit a message
    * @arg {String} messageId the id of the message to edit, or "@original" for the original response, "@original" will will error with ephemeral messages
    * @arg {String | Object} content What to edit the message with
    * @returns {Promise}
    */
    async edit(messageId, content) {
        if(content !== undefined) {
            if(typeof content !== "object" || content === null) {
                content = {
                    content: "" + content
                };
            } else if(content.content !== undefined && typeof content.content !== "string") {
                content.content = "" + content.content;
            } else if(content.content === undefined && !content.embed && content.flags === undefined) {
                return Promise.reject(new Error("No content, embed or flags"));
            }
            if(content.content !== undefined || content.embed || content.allowedMentions) {
                content.allowed_mentions = this._client._formatAllowedMentions(content.allowedMentions);
            }
        }
        return this._client.requestHandler.request("PATCH", Endpoints.WEBHOOK_MESSAGE(this.applicationId, this.token, messageId), true, content);
    }

    /**
    * Edit the interaction Message !use edit if you have already responded with a different method (Message Component only)
    * @arg {String | Object} content What to edit the message with
    * @returns {Promise}
    */
    async editParent(content) {
        if(content !== undefined) {
            if(typeof content !== "object" || content === null) {
                content = {
                    content: "" + content
                };
            } else if(content.content !== undefined && typeof content.content !== "string") {
                content.content = "" + content.content;
            } else if(content.content === undefined && !content.embed && content.flags === undefined) {
                return Promise.reject(new Error("No content, embed or flags"));
            }
            if(content.content !== undefined || content.embed || content.allowedMentions) {
                content.allowed_mentions = this._client._formatAllowedMentions(content.allowedMentions);
            }
        }
        return this._client.requestHandler.request("POST", Endpoints.INTERACTION_RESPOND(this.id, this.token), true, {
            type: Constants.InteractionResponseType.UPDATE_MESSAGE,
            data: content
        });
    }

}

module.exports = Interaction;
