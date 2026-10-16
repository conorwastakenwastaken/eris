"use strict";

module.exports.GATEWAY_VERSION = 10;
module.exports.REST_VERSION = 10;

module.exports.ActivityFlags = {
  INSTANCE:                    1 << 0,
  JOIN:                        1 << 1,
  SPECTATE:                    1 << 2,
  JOIN_REQUEST:                1 << 3,
  SYNC:                        1 << 4,
  PLAY:                        1 << 5,
  PARTY_PRIVACY_FRIENDS:       1 << 6,
  PARTY_PRIVACY_VOICE_CHANNEL: 1 << 7,
  EMBEDDED:                    1 << 8,
};

module.exports.ActivityStatusDisplayTypes = {
  NAME:    0,
  STATE:   1,
  DETAILS: 2,
};

module.exports.ActivityTypes = {
  PLAYING:   0,
  /** @deprecated */
  GAME:      0,
  STREAMING: 1,
  LISTENING: 2,
  WATCHING:  3,
  CUSTOM:    4,
  COMPETING: 5,
};

module.exports.ApplicationCommandHandlerTypes = {
  APP_HANDLER:             1,
  DISCORD_LAUNCH_ACTIVITY: 2,
};

module.exports.ApplicationCommandOptionTypes = {
  SUB_COMMAND:       1,
  SUB_COMMAND_GROUP: 2,
  STRING:            3,
  INTEGER:           4,
  BOOLEAN:           5,
  USER:              6,
  CHANNEL:           7,
  ROLE:              8,
  MENTIONABLE:       9,
  NUMBER:            10,
  ATTACHMENT:        11,
};

module.exports.ApplicationCommandPermissionTypes = {
  ROLE:    1,
  USER:    2,
  CHANNEL: 3,
};

module.exports.ApplicationCommandTypes = {
  CHAT_INPUT:          1,
  USER:                2,
  MESSAGE:             3,
  PRIMARY_ENTRY_POINT: 4,
};

module.exports.ApplicationIntegrationTypes = {
  GUILD_INSTALL: 0,
  USER_INSTALL:  1,
};

module.exports.ApplicationEventWebhookStatuses = {
  DISABLED:            1,
  ENABLED:             2,
  DISABLED_BY_DISCORD: 3,
};

module.exports.ApplicationFlags = {
  APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE: 1 << 6,
  GATEWAY_PRESENCE:                              1 << 12,
  GATEWAY_PRESENCE_LIMITED:                      1 << 13,
  GATEWAY_GUILD_MEMBERS:                         1 << 14,
  GATEWAY_GUILD_MEMBERS_LIMITED:                 1 << 15,
  VERIFICATION_PENDING_GUILD_LIMIT:              1 << 16,
  EMBEDDED:                                      1 << 17,
  GATEWAY_MESSAGE_CONTENT:                       1 << 18,
  GATEWAY_MESSAGE_CONTENT_LIMITED:               1 << 19,
  APPLICATION_COMMAND_BADGE:                     1 << 23,
};

module.exports.AttachmentFlags = {
  IS_CLIP:      1 << 0,
  IS_THUMBNAIL: 1 << 1,
  IS_REMIX:     1 << 2,
  IS_SPOILER:   1 << 3,
  IS_ANIMATED:  1 << 5,
};

module.exports.AuditLogActions = {
  GUILD_UPDATE: 1,

  CHANNEL_CREATE:           10,
  CHANNEL_UPDATE:           11,
  CHANNEL_DELETE:           12,
  CHANNEL_OVERWRITE_CREATE: 13,
  CHANNEL_OVERWRITE_UPDATE: 14,
  CHANNEL_OVERWRITE_DELETE: 15,

  MEMBER_KICK:        20,
  MEMBER_PRUNE:       21,
  MEMBER_BAN_ADD:     22,
  MEMBER_BAN_REMOVE:  23,
  MEMBER_UPDATE:      24,
  MEMBER_ROLE_UPDATE: 25,
  MEMBER_MOVE:        26,
  MEMBER_DISCONNECT:  27,
  BOT_ADD:            28,

  ROLE_CREATE: 30,
  ROLE_UPDATE: 31,
  ROLE_DELETE: 32,

  INVITE_CREATE: 40,
  INVITE_UPDATE: 41,
  INVITE_DELETE: 42,

  WEBHOOK_CREATE: 50,
  WEBHOOK_UPDATE: 51,
  WEBHOOK_DELETE: 52,

  EMOJI_CREATE: 60,
  EMOJI_UPDATE: 61,
  EMOJI_DELETE: 62,

  MESSAGE_DELETE:      72,
  MESSAGE_BULK_DELETE: 73,
  MESSAGE_PIN:         74,
  MESSAGE_UNPIN:       75,

  INTEGRATION_CREATE: 80,
  INTEGRATION_UPDATE: 81,
  INTEGRATION_DELETE: 82,

  STAGE_INSTANCE_CREATE: 83,
  STAGE_INSTANCE_UPDATE: 84,
  STAGE_INSTANCE_DELETE: 85,

  STICKER_CREATE: 90,
  STICKER_UPDATE: 91,
  STICKER_DELETE: 92,

  GUILD_SCHEDULED_EVENT_CREATE: 100,
  GUILD_SCHEDULED_EVENT_UPDATE: 101,
  GUILD_SCHEDULED_EVENT_DELETE: 102,

  THREAD_CREATE: 110,
  THREAD_UPDATE: 111,
  THREAD_DELETE: 112,

  APPLICATION_COMMAND_PERMISSION_UPDATE: 121,
  SOUNDBOARD_SOUND_CREATE:               130,
  SOUNDBOARD_SOUND_UPDATE:               131,
  SOUNDBOARD_SOUND_DELETE:               132,

  AUTO_MODERATION_RULE_CREATE:                 140,
  AUTO_MODERATION_RULE_UPDATE:                 141,
  AUTO_MODERATION_RULE_DELETE:                 142,
  AUTO_MODERATION_BLOCK_MESSAGE:               143,
  AUTO_MODERATION_FLAG_TO_CHANNEL:             144,
  AUTO_MODERATION_USER_COMMUNICATION_DISABLED: 145,
  AUTO_MODERATION_QUARANTINE_USER:             146,

  CREATOR_MONETIZATION_REQUEST_CREATED: 150,
  CREATOR_MONETIZATION_TERMS_ACCEPTED:  151,

  ROLE_PROMPT_CREATE: 160,
  ROLE_PROMPT_UPDATE: 161,
  ROLE_PROMPT_DELETE: 162,

  ONBOARDING_PROMPT_CREATE: 163,
  ONBOARDING_PROMPT_UPDATE: 164,
  ONBOARDING_PROMPT_DELETE: 165,
  ONBOARDING_CREATE:        166,
  ONBOARDING_UPDATE:        167,

  GUILD_HOME_FEATURE_ITEM: 171,
  GUILD_HOME_REMOVE_ITEM:  172,
  HOME_SETTINGS_CREATE:    190,
  HOME_SETTINGS_UPDATE:    191,

  VOICE_CHANNEL_STATUS_CREATE: 192,
  VOICE_CHANNEL_STATUS_UPDATE: 192,
  VOICE_CHANNEL_STATUS_DELETE: 193,
};

module.exports.AutoModerationActionTypes = {
  BLOCK_MESSAGE:            1,
  SEND_ALERT_MESSAGE:       2,
  TIMEOUT:                  3,
  BLOCK_MEMBER_INTERACTION: 4,
};

module.exports.AutoModerationEventTypes = {
  MESSAGE_SEND:  1,
  MEMBER_UPDATE: 2,
};

module.exports.AutoModerationKeywordPresetTypes = {
  PROFANITY:      1,
  SEXUAL_CONTENT: 2,
  SLURS:          3,
};

module.exports.AutoModerationTriggerTypes = {
  KEYWORD:        1,
  /** @deprecated */
  HARMFUL_LINK:   2,
  SPAM:           3,
  KEYWORD_PRESET: 4,
  MENTION_SPAM:   5,
  MEMBER_PROFILE: 6,
};

module.exports.BaseThemeTypes = {
  UNSET:    0,
  DARK:     1,
  LIGHT:    2,
  DARKER:   3,
  MIDNIGHT: 4,
};

module.exports.ButtonStyles = {
  PRIMARY:   1,
  SECONDARY: 2,
  SUCCESS:   3,
  DANGER:    4,
  LINK:      5,
  PREMIUM:   6,
};

module.exports.ChannelFlags = {
  PINNED:                      1 << 1,
  REQUIRE_TAG:                 1 << 4,
  HIDE_MEDIA_DOWNLOAD_OPTIONS: 1 << 15,
  CHANNEL_OBFUSCATED:          1 << 17,
  IS_SPOILER_CHANNEL:          1 << 21,
};

module.exports.ChannelTypes = {
  GUILD_TEXT:           0,
  DM:                   1,
  GUILD_VOICE:          2,
  GROUP_DM:             3,
  GUILD_CATEGORY:       4,
  GUILD_NEWS:           5,
  // Unknown 6-9
  GUILD_NEWS_THREAD:    10,
  GUILD_PUBLIC_THREAD:  11,
  GUILD_PRIVATE_THREAD: 12,
  GUILD_STAGE_VOICE:    13,
  /** @deprecated */
  GUILD_STAGE:          13,
  // Unknown 14
  GUILD_FORUM:          15,
  GUILD_MEDIA:          16,
};

module.exports.ComponentTypes = {
  ACTION_ROW:         1,
  BUTTON:             2,
  STRING_SELECT:      3,
  TEXT_INPUT:         4,
  USER_SELECT:        5,
  ROLE_SELECT:        6,
  MENTIONABLE_SELECT: 7,
  CHANNEL_SELECT:     8,
  SECTION:            9,
  TEXT_DISPLAY:       10,
  THUMBNAIL:          11,
  MEDIA_GALLERY:      12,
  FILE:               13,
  SEPARATOR:          14,
  CONTAINER:          17,
  LABEL:              18,
  FILE_UPLOAD:        19,
  RADIO_GROUP:        21,
  CHECKBOX_GROUP:     22,
  CHECKBOX:           23,
};

module.exports.ConnectionVisibilityTypes = {
  NONE:     0,
  EVERYONE: 1,
};

module.exports.DefaultMessageNotificationLevels = {
  ALL_MESSAGES:  0,
  ONLY_MENTIONS: 1,
};

module.exports.EmbedFlags = {
  IS_CONTENT_INVENTORY_ENTRY: 1 << 5,
};

module.exports.EmbedImageFlags = {
  IS_ANIMATED: 1 << 5,
};

module.exports.EntitlementOwnerTypes = {
  GUILD: 1,
  USER:  2,
};

module.exports.EntitlementTypes = {
  PURCHASE:                 1,
  PREMIUM_SUBSCRIPTION:     2,
  DEVELOPER_GIFT:           3,
  TEST_MODE_PURCHASE:       4,
  FREE_PURCHASE:            5,
  USER_GIFT:                6,
  PREMIUM_PURCHASE:         7,
  APPLICATION_SUBSCRIPTION: 8,
};

module.exports.ExplicitContentFilterLevels = {
  DISABLED:              0,
  MEMBERS_WITHOUT_ROLES: 1,
  ALL_MEMBERS:           2,
};

module.exports.ForumLayoutTypes = {
  NOT_SET:      0,
  LIST_VIEW:    1,
  GALLERY_VIEW: 2,
};

module.exports.GatewayCapabilities = {
  CHANNEL_OBFUSCATION: 1 << 15,
};

module.exports.GatewayCloseCodes = {
  UNKNOWN_ERROR:         4000,
  UNKNOWN_OPCODE:        4001,
  DECODE_ERROR:          4002,
  NOT_AUTHENTICATED:     4003,
  AUTHENTICATION_FAILED: 4004,
  ALREADY_AUTHENTICATED: 4005,
  INVALID_SEQ:           4007,
  RATE_LIMITED:          4008,
  SESSION_TIMED_OUT:     4009,
  INVALID_SHARD:         4010,
  SHARDING_REQUIRED:     4011,
  INVALID_API_VERSION:   4012,
  INVALID_INTENTS:       4013,
  DISALLOWED_INTENTS:    4014,
};

module.exports.GatewayOPCodes = {
  DISPATCH:                  0,
  /** @deprecated */
  EVENT:                     0,
  HEARTBEAT:                 1,
  IDENTIFY:                  2,
  PRESENCE_UPDATE:           3,
  /** @deprecated */
  STATUS_UPDATE:             3,
  VOICE_STATE_UPDATE:        4,
  /** @deprecated Undocumented */
  VOICE_SERVER_PING:         5,
  RESUME:                    6,
  RECONNECT:                 7,
  REQUEST_GUILD_MEMBERS:     8,
  /** @deprecated */
  GET_GUILD_MEMBERS:         8,
  INVALID_SESSION:           9,
  HELLO:                     10,
  HEARTBEAT_ACK:             11,
  // Unknown 12-30
  REQUEST_SOUNDBOARD_SOUNDS: 31,
  REQUEST_CHANNEL_INFO:      43,
};

module.exports.GuildFeatures = [
  "ANIMATED_BANNER",
  "ANIMATED_ICON",
  "APPLICATION_COMMAND_PERMISSIONS_V2",
  "AUTO_MODERATION",
  "BANNER",
  "COMMERCE",
  "COMMUNITY",
  "CREATOR_MONETIZABLE_PROVISIONAL",
  "CREATOR_STORE_PAGE",
  "DEVELOPER_SUPPORT_SERVER",
  "DISCOVERABLE",
  "FEATURABLE",
  "GUESTS_ENABLED",
  "GUILD_TAGS",
  "INVITE_SPLASH",
  "INVITES_DISABLED",
  "MEMBER_VERIFICATION_GATE_ENABLED",
  "MONETIZATION_ENABLED",
  "MORE_SOUNDBOARD",
  "MORE_STICKERS",
  "NEWS",
  "PARTNERED",
  "PREVIEW_ENABLED",
  "PRIVATE_THREADS",
  "PRUNE_REQUIRES_ADMIN",
  "RAID_ALERTS_DISABLED",
  "ROLE_ICONS",
  "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
  "ROLE_SUBSCRIPTIONS_ENABLED",
  "SEVEN_DAY_THREAD_ARCHIVE",
  "SOUNDBOARD",
  "THREE_DAY_THREAD_ARCHIVE",
  "TICKETED_EVENTS_ENABLED",
  "VANITY_URL",
  "VERIFIED",
  "VIP_REGIONS",
  "WELCOME_SCREEN_ENABLED",
  "ENHANCED_ROLE_COLORS",
];

module.exports.GuildIntegrationExpireBehavior = {
  REMOVE_ROLE: 0,
  KICK:        1,
};

module.exports.GuildIntegrationTypes = [
  "twitch",
  "youtube",
  "discord",
  "guild_subscription",
];

module.exports.GuildNSFWLevels = {
  DEFAULT:        0,
  EXPLICIT:       1,
  SAFE:           2,
  AGE_RESTRICTED: 3,
};

module.exports.GuildOnboardingModes = {
  ONBOARDING_DEFAULT:  0,
  ONBOARDING_ADVANCED: 1,
};

module.exports.GuildOnboardingPromptTypes = {
  MULTIPLE_CHOICE: 0,
  DROPDOWN:        1,
};

module.exports.GuildScheduledEventEntityTypes = {
  STAGE_INSTANCE: 1,
  VOICE:          2,
  EXTERNAL:       3,
};

module.exports.GuildScheduledEventPrivacyLevel = {
  PUBLIC:     1,
  GUILD_ONLY: 2,
};

module.exports.GuildScheduledEventRecurrenceRuleFrequency = {
  YEARLY:  0,
  MONTHLY: 1,
  WEEKLY:  2,
  DAILY:   3,
};

module.exports.GuildScheduledEventRecurrenceRuleMonth = {
  JANUARY:   1,
  FEBRUARY:  2,
  MARCH:     3,
  APRIL:     4,
  MAY:       5,
  JUNE:      6,
  JULY:      7,
  AUGUST:    8,
  SEPTEMBER: 9,
  OCTOBER:   10,
  NOVEMBER:  11,
  DECEMBER:  12,
};

module.exports.GuildScheduledEventRecurrenceRuleWeekday = {
  MONDAY:    0,
  TUESDAY:   1,
  WEDNESDAY: 2,
  THURSDAY:  3,
  FRIDAY:    4,
  SATURDAY:  5,
  SUNDAY:    6,
};

module.exports.GuildScheduledEventStatus = {
  SCHEDULED: 1,
  ACTIVE:    2,
  COMPLETED: 3,
  CANCELED:  4,
};

module.exports.GuildWidgetStyles = {
  SHIELD:   "shield",
  BANNER_1: "banner1",
  BANNER_2: "banner2",
  BANNER_3: "banner3",
  BANNER_4: "banner4",
};

module.exports.ImageFormats = [
  "jpg",
  "jpeg",
  "png",
  "webp",
  "gif",
];

module.exports.ImageSizeBoundaries = {
  MINIMUM: 16,
  MAXIMUM: 4096,
};

const Intents = {
  guilds:                      1 << 0,
  guildMembers:                1 << 1,
  /** @deprecated Use guildModeration */
  guildBans:                   1 << 2,
  guildModeration:             1 << 2,
  guildExpressions:            1 << 3,
  /** @deprecated */
  guildEmojisAndStickers:      1 << 3,
  /** @deprecated */
  guildEmojis:                 1 << 3,
  guildIntegrations:           1 << 4,
  guildWebhooks:               1 << 5,
  guildInvites:                1 << 6,
  guildVoiceStates:            1 << 7,
  guildPresences:              1 << 8,
  guildMessages:               1 << 9,
  guildMessageReactions:       1 << 10,
  guildMessageTyping:          1 << 11,
  directMessages:              1 << 12,
  directMessageReactions:      1 << 13,
  directMessageTyping:         1 << 14,
  messageContent:              1 << 15,
  guildScheduledEvents:        1 << 16,
  // Unknown 17-19
  autoModerationConfiguration: 1 << 20,
  autoModerationExecution:     1 << 21,
  // Unknown 22-23
  guildMessagePolls:           1 << 24,
  directMessagePolls:          1 << 25,
};

Intents.allNonPrivileged = Intents.guilds
  | Intents.guildBans
  | Intents.guildExpressions
  | Intents.guildIntegrations
  | Intents.guildWebhooks
  | Intents.guildInvites
  | Intents.guildVoiceStates
  | Intents.guildMessages
  | Intents.guildMessageReactions
  | Intents.guildMessageTyping
  | Intents.directMessages
  | Intents.directMessageReactions
  | Intents.directMessageTyping
  | Intents.guildScheduledEvents
  | Intents.autoModerationConfiguration
  | Intents.autoModerationExecution
  | Intents.guildMessagePolls
  | Intents.directMessagePolls;
Intents.allPrivileged = Intents.guildMembers
  | Intents.guildPresences
  | Intents.messageContent;
Intents.all = Intents.allNonPrivileged | Intents.allPrivileged;

module.exports.Intents = Intents;

module.exports.InteractionContextTypes = {
  GUILD:           0,
  BOT_DM:          1,
  PRIVATE_CHANNEL: 2,
};

module.exports.InteractionResponseTypes = {
  PONG:                                    1,
  CHANNEL_MESSAGE_WITH_SOURCE:             4,
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE:    5,
  DEFERRED_UPDATE_MESSAGE:                 6,
  UPDATE_MESSAGE:                          7,
  APPLICATION_COMMAND_AUTOCOMPLETE_RESULT: 8,
  MODAL:                                   9,
  LAUNCH_ACTIVITY:                         12,
};

module.exports.InteractionTypes = {
  PING:                             1,
  APPLICATION_COMMAND:              2,
  MESSAGE_COMPONENT:                3,
  APPLICATION_COMMAND_AUTOCOMPLETE: 4,
  MODAL_SUBMIT:                     5,
};

module.exports.InviteFlags = {
  IS_GUEST_INVITE: 1 << 0,
};

module.exports.InviteTargetTypes = {
  STREAM:               1,
  EMBEDDED_APPLICATION: 2,
};

module.exports.InviteTargetUsersJobStatuses = {
  UNSPECIFIED: 0,
  PROCESSING:  1,
  COMPLETED:   2,
  FAILED:      3,
};

module.exports.InviteTypes = {
  GUILD:    0,
  GROUP_DM: 1,
  FRIEND:   2,
};

module.exports.JSONErrorCodes = {
  GENERAL_ERROR:                                                0,
  UNKNOWN_ACCOUNT:                                              10001,
  UNKNOWN_APPLICATION:                                          10002,
  UNKNOWN_CHANNEL:                                              10003,
  UNKNOWN_GUILD:                                                10004,
  UNKNOWN_INTEGRATION:                                          10005,
  UNKNOWN_INVITE:                                               10006,
  UNKNOWN_MEMBER:                                               10007,
  UNKNOWN_MESSAGE:                                              10008,
  UNKNOWN_PERMISSION_OVERWRITE:                                 10009,
  UNKNOWN_PROVIDER:                                             10010,
  UNKNOWN_ROLE:                                                 10011,
  UNKNOWN_TOKEN:                                                10012,
  UNKNOWN_USER:                                                 10013,
  UNKNOWN_EMOJI:                                                10014,
  UNKNOWN_WEBHOOK:                                              10015,
  UNKNOWN_WEBHOOK_SERVICE:                                      10016,
  UNKNOWN_SESSION:                                              10020,
  UNKNOWN_ASSET:                                                10021,
  UNKNOWN_BAN:                                                  10026,
  UNKNOWN_SKU:                                                  10027,
  UNKNOWN_STORE_LISTING:                                        10028,
  UNKNOWN_ENTITLEMENT:                                          10029,
  UNKNOWN_BUILD:                                                10030,
  UNKNOWN_LOBBY:                                                10031,
  UNKNOWN_BRANCH:                                               10032,
  UNKNOWN_STORE_DIRECTORY_LAYOUT:                               10033,
  UNKNOWN_REDISTRIBUTABLE:                                      10036,
  UNKNOWN_GIFT_CODE:                                            10038,
  UNKNOWN_STREAM:                                               10049,
  UNKNOWN_PREMIUM_SERVER_SUBSCRIBE_COOLDOWN:                    10050,
  UNKNOWN_GUILD_TEMPLATE:                                       10057,
  UNKNOWN_DISCOVERABLE_SERVER_CATEGORY:                         10059,
  UNKNOWN_STICKER:                                              10060,
  UNKNOWN_STICKER_PACK:                                         10061,
  UNKNOWN_INTERACTION:                                          10062,
  UNKNOWN_APPLICATION_COMMAND:                                  10063,
  UNKNOWN_VOICE_STATE:                                          10065,
  UNKNOWN_APPLICATION_COMMAND_PERMISSIONS:                      10066,
  UNKNOWN_STAGE_INSTANCE:                                       10067,
  UNKNOWN_GUILD_MEMBER_VERIFICATION_FORM:                       10068,
  UNKNOWN_GUILD_WELCOME_SCREEN:                                 10069,
  UNKNOWN_GUILD_SCHEDULED_EVENT:                                10070,
  UNKNOWN_GUILD_SCHEDULED_EVENT_USER:                           10071,
  UNKNOWN_TAG:                                                  10087,
  UNKNOWN_SOUND:                                                10097,
  UNKNOWN_INVITE_TARGET_USERS_JOB:                              10124,
  UNKNOWN_INVITE_TARGET_USERS:                                  10129,
  BOTS_CANNOT_USE_THIS_ENDPOINT:                                20001,
  ONLY_BOTS_CAN_USE_THIS_ENDPOINT:                              20002,
  EXPLICIT_CONTENT_CANNOT_BE_SENT_TO_RECIPIENT:                 20009,
  NOT_AUTHORIZED_TO_PERFORM_ACTION_ON_APPLICATION:              20012,
  ACTION_REQUIRES_PREMIUM_SUBSCRIPTION:                         20015,
  SLOWMODE_RATE_LIMITED:                                        20016,
  ONLY_ACCOUNT_OWNER_CAN_PERFORM_ACTION:                        20018,
  ANNOUNCEMENT_EDIT_RATE_LIMITED:                               20022,
  UNDER_MINIMUM_AGE:                                            20024,
  CHANNEL_WRITE_RATE_LIMITED:                                   20028,
  SERVER_WRITE_RATE_LIMITED:                                    20029,
  CONTAINS_DISALLOWED_WORDS:                                    20031,
  GUILD_PREMIUM_SUBSCRIPTION_LEVEL_TOO_LOW:                     20035,
  MAXIMUM_GUILDS:                                               30001,
  MAXIMUM_FRIENDS:                                              30002,
  MAXIMUM_PINS:                                                 30003,
  MAXIMUM_RECIPIENTS:                                           30004,
  MAXIMUM_GUILD_ROLES:                                          30005,
  MAXIMUM_WEBHOOKS:                                             30007,
  MAXIMUM_EMOJIS:                                               30008,
  MAXIMUM_REACTIONS:                                            30010,
  MAXIMUM_GROUP_DMS:                                            30011,
  MAXIMUM_GUILD_CHANNELS:                                       30013,
  MAXIMUM_ATTACHMENTS:                                          30015,
  MAXIMUM_INVITES:                                              30016,
  MAXIMUM_ANIMATED_EMOJIS:                                      30018,
  MAXIMUM_SERVER_MEMBERS:                                       30019,
  MAXIMUM_SERVER_CATEGORIES:                                    30030,
  GUILD_ALREADY_HAS_TEMPLATE:                                   30031,
  MAXIMUM_APPLICATION_COMMANDS:                                 30032,
  MAXIMUM_THREAD_PARTICIPANTS:                                  30033,
  MAXIMUM_DAILY_APPLICATION_COMMAND_CREATES:                    30034,
  MAXIMUM_NON_GUILD_MEMBER_BANS:                                30035,
  MAXIMUM_BAN_FETCHES:                                          30037,
  MAXIMUM_UNCOMPLETED_GUILD_SCHEDULED_EVENTS:                   30038,
  MAXIMUM_STICKERS:                                             30039,
  MAXIMUM_PRUNE_REQUESTS:                                       30040,
  MAXIMUM_GUILD_WIDGET_SETTINGS_UPDATES:                        30042,
  MAXIMUM_SOUNDBOARD_SOUNDS:                                    30045,
  MAXIMUM_OLD_MESSAGE_EDITS:                                    30046,
  MAXIMUM_PINNED_THREADS_IN_FORUM:                              30047,
  MAXIMUM_FORUM_TAGS:                                           30048,
  BITRATE_TOO_HIGH_FOR_CHANNEL_TYPE:                            30052,
  MAXIMUM_PREMIUM_EMOJIS:                                       30056,
  MAXIMUM_GUILD_WEBHOOKS:                                       30058,
  MAXIMUM_CHANNEL_PERMISSION_OVERWRITES:                        30060,
  GUILD_CHANNELS_TOO_LARGE:                                     30061,
  MAXIMUM_GUILD_TARGET_USERS:                                   30084,
  UNAUTHORIZED:                                                 40001,
  ACCOUNT_VERIFICATION_REQUIRED:                                40002,
  OPENING_DIRECT_MESSAGES_TOO_FAST:                             40003,
  SEND_MESSAGES_TEMPORARILY_DISABLED:                           40004,
  REQUEST_ENTITY_TOO_LARGE:                                     40005,
  FEATURE_TEMPORARILY_DISABLED:                                 40006,
  USER_BANNED_FROM_GUILD:                                       40007,
  ONLY_ONE_CHANNEL_PARENT_CAN_BE_MODIFIED:                      40009,
  CONNECTION_REVOKED:                                           40012,
  ONLY_CONSUMABLE_SKUS_CAN_BE_CONSUMED:                         40018,
  ONLY_SANDBOX_ENTITLEMENTS_CAN_BE_DELETED:                     40019,
  TARGET_USER_NOT_CONNECTED_TO_VOICE:                           40032,
  MESSAGE_ALREADY_CROSSPOSTED:                                  40033,
  APPLICATION_COMMAND_NAME_ALREADY_EXISTS:                      40041,
  APPLICATION_INTERACTION_FAILED_TO_SEND:                       40043,
  CANNOT_SEND_MESSAGE_IN_FORUM_CHANNEL:                         40058,
  INTERACTION_ALREADY_ACKNOWLEDGED:                             40060,
  TAG_NAMES_MUST_BE_UNIQUE:                                     40061,
  SERVICE_RESOURCE_RATE_LIMITED:                                40062,
  NO_TAGS_AVAILABLE_FOR_NON_MODERATORS:                         40066,
  TAG_REQUIRED_FOR_FORUM_POST:                                  40067,
  ENTITLEMENT_ALREADY_GRANTED:                                  40074,
  MAXIMUM_INTERACTION_FOLLOWUP_MESSAGES:                        40094,
  INVITE_TARGET_USERS_ALREADY_PROCESSING:                       40114,
  INVITE_TARGET_USERS_FILE_NOT_PROCESSED:                       40115,
  CLOUDFLARE_BLOCKING_REQUEST:                                  40333,
  MISSING_ACCESS:                                               50001,
  INVALID_ACCOUNT_TYPE:                                         50002,
  CANNOT_EXECUTE_ACTION_ON_DM_CHANNEL:                          50003,
  GUILD_WIDGET_DISABLED:                                        50004,
  CANNOT_EDIT_MESSAGE_BY_ANOTHER_USER:                          50005,
  CANNOT_SEND_EMPTY_MESSAGE:                                    50006,
  CANNOT_SEND_MESSAGES_TO_USER:                                 50007,
  CANNOT_SEND_MESSAGES_IN_NON_TEXT_CHANNEL:                     50008,
  CHANNEL_VERIFICATION_LEVEL_TOO_HIGH:                          50009,
  OAUTH2_APPLICATION_DOES_NOT_HAVE_BOT:                         50010,
  OAUTH2_APPLICATION_LIMIT_REACHED:                             50011,
  INVALID_OAUTH2_STATE:                                         50012,
  MISSING_PERMISSIONS:                                          50013,
  INVALID_AUTHENTICATION_TOKEN:                                 50014,
  NOTE_TOO_LONG:                                                50015,
  INVALID_BULK_DELETE_MESSAGE_COUNT:                            50016,
  INVALID_MFA_LEVEL:                                            50017,
  CANNOT_PIN_MESSAGE_IN_DIFFERENT_CHANNEL:                      50019,
  INVALID_OR_TAKEN_INVITE_CODE:                                 50020,
  CANNOT_EXECUTE_ACTION_ON_SYSTEM_MESSAGE:                      50021,
  CANNOT_EXECUTE_ACTION_ON_CHANNEL_TYPE:                        50024,
  INVALID_OAUTH2_ACCESS_TOKEN:                                  50025,
  MISSING_OAUTH2_SCOPE:                                         50026,
  INVALID_WEBHOOK_TOKEN:                                        50027,
  INVALID_ROLE:                                                 50028,
  INVALID_RECIPIENTS:                                           50033,
  MESSAGE_TOO_OLD_TO_BULK_DELETE:                               50034,
  INVALID_FORM_BODY:                                            50035,
  INVITE_ACCEPTED_TO_GUILD_WITHOUT_BOT:                         50036,
  INVALID_ACTIVITY_ACTION:                                      50039,
  INVALID_API_VERSION:                                          50041,
  FILE_UPLOADED_EXCEEDS_MAXIMUM_SIZE:                           50045,
  INVALID_FILE_UPLOADED:                                        50046,
  CANNOT_SELF_REDEEM_GIFT:                                      50054,
  INVALID_GUILD:                                                50055,
  INVALID_SKU:                                                  50057,
  INVALID_REQUEST_ORIGIN:                                       50067,
  INVALID_MESSAGE_TYPE:                                         50068,
  PAYMENT_SOURCE_REQUIRED_TO_REDEEM_GIFT:                       50070,
  CANNOT_MODIFY_SYSTEM_WEBHOOK:                                 50073,
  CANNOT_DELETE_COMMUNITY_REQUIRED_CHANNEL:                     50074,
  CANNOT_EDIT_STICKERS_WITHIN_MESSAGE:                          50080,
  INVALID_STICKER_SENT:                                         50081,
  ARCHIVED_THREAD:                                              50083,
  INVALID_THREAD_NOTIFICATION_SETTINGS:                         50084,
  BEFORE_EARLIER_THAN_THREAD_CREATION_DATE:                     50085,
  COMMUNITY_SERVER_CHANNELS_MUST_BE_TEXT_CHANNELS:              50086,
  EVENT_ENTITY_TYPE_MISMATCH:                                   50091,
  SERVER_NOT_AVAILABLE_IN_LOCATION:                             50095,
  SERVER_NEEDS_MONETIZATION_ENABLED:                            50097,
  SERVER_NEEDS_MORE_BOOSTS:                                     50101,
  INVALID_JSON_REQUEST_BODY:                                    50109,
  INVALID_FILE:                                                 50110,
  INVALID_FILE_TYPE:                                            50123,
  FILE_DURATION_EXCEEDS_MAXIMUM:                                50124,
  OWNER_CANNOT_BE_PENDING_MEMBER:                               50131,
  CANNOT_TRANSFER_OWNERSHIP_TO_BOT:                             50132,
  FAILED_TO_RESIZE_ASSET:                                       50138,
  CANNOT_MIX_SUBSCRIPTION_AND_NON_SUBSCRIPTION_ROLES_FOR_EMOJI: 50144,
  CANNOT_CONVERT_BETWEEN_PREMIUM_AND_NORMAL_EMOJI:              50145,
  UPLOADED_FILE_NOT_FOUND:                                      50146,
  INVALID_EMOJI:                                                50151,
  VOICE_MESSAGES_DO_NOT_SUPPORT_ADDITIONAL_CONTENT:             50159,
  VOICE_MESSAGES_MUST_HAVE_SINGLE_AUDIO_ATTACHMENT:             50160,
  VOICE_MESSAGES_MUST_HAVE_METADATA:                            50161,
  VOICE_MESSAGES_CANNOT_BE_EDITED:                              50162,
  CANNOT_DELETE_GUILD_SUBSCRIPTION_INTEGRATION:                 50163,
  CANNOT_SEND_VOICE_EFFECT_WHEN_MUTED_DEAFENED_OR_SUPPRESSED:   50167,
  CANNOT_SEND_VOICE_MESSAGES_IN_CHANNEL:                        50173,
  USER_ACCOUNT_MUST_BE_VERIFIED:                                50178,
  FILE_DOES_NOT_HAVE_VALID_DURATION:                            50192,
  CANNOT_SEND_MESSAGES_TO_USER_WITHOUT_MUTUAL_GUILDS:           50278,
  NO_PERMISSION_TO_SEND_STICKER:                                50600,
  TWO_FACTOR_REQUIRED:                                          60003,
  NO_USERS_WITH_DISCORD_TAG:                                    80004,
  REACTION_BLOCKED:                                             90001,
  CANNOT_USE_BURST_REACTIONS:                                   90002,
  INDEX_NOT_YET_AVAILABLE:                                      110000,
  APPLICATION_NOT_YET_AVAILABLE:                                110001,
  API_RESOURCE_OVERLOADED:                                      130000,
  STAGE_ALREADY_OPEN:                                           150006,
  CANNOT_REPLY_WITHOUT_READ_MESSAGE_HISTORY:                    160002,
  THREAD_ALREADY_CREATED_FOR_MESSAGE:                           160004,
  THREAD_LOCKED:                                                160005,
  MAXIMUM_ACTIVE_THREADS:                                       160006,
  MAXIMUM_ACTIVE_ANNOUNCEMENT_THREADS:                          160007,
  CANNOT_REFERENCE_WITHOUT_READ_MESSAGE_HISTORY:                160009,
  NSFW_CHANNEL_MESSAGE_REFERENCE_NOT_ALLOWED:                   160010,
  CANNOT_FORWARD_UNREADABLE_MESSAGE:                            160014,
  INVALID_LOTTIE_JSON:                                          170001,
  LOTTIE_CONTAINS_RASTERIZED_IMAGES:                            170002,
  STICKER_MAXIMUM_FRAMERATE_EXCEEDED:                           170003,
  STICKER_MAXIMUM_FRAME_COUNT_EXCEEDED:                         170004,
  LOTTIE_MAXIMUM_DIMENSIONS_EXCEEDED:                           170005,
  STICKER_FRAME_RATE_OUT_OF_RANGE:                              170006,
  STICKER_MAXIMUM_DURATION_EXCEEDED:                            170007,
  CANNOT_UPDATE_FINISHED_EVENT:                                 180000,
  FAILED_TO_CREATE_STAGE_FOR_STAGE_EVENT:                       180002,
  MESSAGE_BLOCKED_BY_AUTOMOD:                                   200000,
  TITLE_BLOCKED_BY_AUTOMOD:                                     200001,
  FORUM_WEBHOOK_REQUIRES_THREAD_NAME_OR_THREAD_ID:              220001,
  FORUM_WEBHOOK_CANNOT_HAVE_BOTH_THREAD_NAME_AND_THREAD_ID:     220002,
  WEBHOOKS_CAN_ONLY_CREATE_THREADS_IN_FORUM_CHANNELS:           220003,
  WEBHOOK_SERVICES_CANNOT_BE_USED_IN_FORUM_CHANNELS:            220004,
  MESSAGE_BLOCKED_BY_HARMFUL_LINKS_FILTER:                      240000,
  JOINING_NEW_SERVERS_LIMITED:                                  340015,
  CANNOT_ENABLE_ONBOARDING_REQUIREMENTS_NOT_MET:                350000,
  CANNOT_UPDATE_ONBOARDING_BELOW_REQUIREMENTS:                  350001,
  FILE_UPLOADS_LIMITED_FOR_GUILD:                               400001,
  FAILED_TO_BAN_USERS:                                          500000,
  POLL_VOTING_BLOCKED:                                          520000,
  POLL_EXPIRED:                                                 520001,
  INVALID_CHANNEL_TYPE_FOR_POLL_CREATION:                       520002,
  CANNOT_EDIT_POLL_MESSAGE:                                     520003,
  CANNOT_USE_EMOJI_INCLUDED_WITH_POLL:                          520004,
  CANNOT_EXPIRE_NON_POLL_MESSAGE:                               520006,
  PROVISIONAL_ACCOUNTS_PERMISSION_NOT_GRANTED:                  530000,
  ID_TOKEN_EXPIRED:                                             530001,
  ID_TOKEN_ISSUER_MISMATCH:                                     530002,
  ID_TOKEN_AUDIENCE_MISMATCH:                                   530003,
  ID_TOKEN_ISSUED_TOO_LONG_AGO:                                 530004,
  FAILED_TO_GENERATE_UNIQUE_USERNAME:                           530006,
  INVALID_CLIENT_SECRET:                                        530007,
};

module.exports.Locales = {
  BULGARIAN:            "bg",
  CZECH:                "cs",
  DANISH:               "da",
  GERMAN:               "de",
  GREEK:                "el",
  ENGLISH_UK:           "en-GB",
  ENGLISH_US:           "en-US",
  SPANISH:              "es-ES",
  SPANISH_LATAM:        "es-419",
  FINNISH:              "fi",
  FRENCH:               "fr",
  HINDI:                "hi",
  CROATIAN:             "hr",
  HUNGARIAN:            "hu",
  INDONESIAN:           "id",
  ITALIAN:              "it",
  JAPANESE:             "ja",
  KOREAN:               "ko",
  LITHUANIAN:           "lt",
  DUTCH:                "nl",
  NORWEGIAN:            "no",
  POLISH:               "pl",
  PORTUGUESE_BRAZILIAN: "pt-BR",
  ROMANIAN_ROMANIA:     "ro",
  RUSSIAN:              "ru",
  SWEDISH:              "sv-SE",
  THAI:                 "th",
  TURKISH:              "tr",
  UKRAINIAN:            "uk",
  VIETNAMESE:           "vi",
  CHINESE_CHINA:        "zh-CN",
  CHINESE_TAIWAN:       "zh-TW",
};

module.exports.MemberFlags = {
  DID_REJOIN:                      1 << 0,
  COMPLETED_ONBOARDING:            1 << 1,
  BYPASSES_VERIFICATION:           1 << 2,
  STARTED_ONBOARDING:              1 << 3,
  IS_GUEST:                        1 << 4,
  STARTED_HOME_ACTIONS:            1 << 5,
  COMPLETED_HOME_ACTIONS:          1 << 6,
  AUTOMOD_QUARANTINED_USERNAME:    1 << 7,
  // Unknown 8
  DM_SETTINGS_UPSELL_ACKNOWLEDGED: 1 << 9,
  AUTOMOD_QUARANTINED_GUILD_TAG:   1 << 10,
};

module.exports.MembershipState = {
  INVITED:  1,
  ACCEPTED: 2,
};

module.exports.MessageActivityTypes = {
  JOIN:         1,
  SPECTATE:     2,
  LISTEN:       3,
  WATCH:        4,
  JOIN_REQUEST: 5,
};

module.exports.MessageFlags = {
  CROSSPOSTED:                            1 << 0,
  IS_CROSSPOST:                           1 << 1,
  SUPPRESS_EMBEDS:                        1 << 2,
  SOURCE_MESSAGE_DELETED:                 1 << 3,
  URGENT:                                 1 << 4,
  HAS_THREAD:                             1 << 5,
  EPHEMERAL:                              1 << 6,
  LOADING:                                1 << 7,
  FAILED_TO_MENTION_SOME_ROLES_IN_THREAD: 1 << 8,
  SUPPRESS_NOTIFICATIONS:                 1 << 12,
  IS_VOICE_MESSAGE:                       1 << 13,
  HAS_SNAPSHOT:                           1 << 14,
  IS_COMPONENTS_V2:                       1 << 15,
};

module.exports.MessageReferenceTypes = {
  DEFAULT: 0,
  FORWARD: 1,
};

module.exports.MessageTypes = {
  DEFAULT:                                      0,
  RECIPIENT_ADD:                                1,
  RECIPIENT_REMOVE:                             2,
  CALL:                                         3,
  CHANNEL_NAME_CHANGE:                          4,
  CHANNEL_ICON_CHANGE:                          5,
  CHANNEL_PINNED_MESSAGE:                       6,
  GUILD_MEMBER_JOIN:                            7,
  USER_PREMIUM_GUILD_SUBSCRIPTION:              8,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1:       9,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2:       10,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3:       11,
  CHANNEL_FOLLOW_ADD:                           12,
  // Unknown 13
  GUILD_DISCOVERY_DISQUALIFIED:                 14,
  GUILD_DISCOVERY_REQUALIFIED:                  15,
  GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING: 16,
  GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING:   17,
  THREAD_CREATED:                               18,
  REPLY:                                        19,
  CHAT_INPUT_COMMAND:                           20,
  THREAD_STARTER_MESSAGE:                       21,
  GUILD_INVITE_REMINDER:                        22,
  CONTEXT_MENU_COMMAND:                         23,
  AUTO_MODERATION_ACTION:                       24,
  ROLE_SUBSCRIPTION_PURCHASE:                   25,
  INTERACTION_PREMIUM_UPSELL:                   26,
  STAGE_START:                                  27,
  STAGE_END:                                    28,
  STAGE_SPEAKER:                                29,
  // Unknown 30
  STAGE_TOPIC:                                  31,
  GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:       32,
  // Unknown 33-35
  GUILD_INCIDENT_ALERT_MODE_ENABLED:            36,
  GUILD_INCIDENT_ALERT_MODE_DISABLED:           37,
  GUILD_INCIDENT_REPORT_RAID:                   38,
  GUILD_INCIDENT_REPORT_FALSE_ALARM:            39,
  // Unknown 40-43
  PURCHASE_NOTIFICATION:                        44,
  // Unknown 45
  POLL_RESULT:                                  46,
};

module.exports.MFALevels = {
  NONE:     0,
  ELEVATED: 1,
};

module.exports.OAuthTeamMemberRoleTypes = {
  ADMIN:     "admin",
  DEVELOPER: "developer",
  OWNER:     "",
  READ_ONLY: "read_only",
};

module.exports.PermissionOverwriteTypes = {
  ROLE: 0,
  USER: 1,
};

const Permissions = {
  createInstantInvite:              1n << 0n,
  kickMembers:                      1n << 1n,
  banMembers:                       1n << 2n,
  administrator:                    1n << 3n,
  manageChannels:                   1n << 4n,
  manageGuild:                      1n << 5n,
  addReactions:                     1n << 6n,
  viewAuditLog:                     1n << 7n,
  /** @deprecated */
  viewAuditLogs:                    1n << 7n,
  prioritySpeaker:                  1n << 8n,
  /** @deprecated */
  voicePrioritySpeaker:             1n << 8n,
  stream:                           1n << 9n,
  /** @deprecated */
  voiceStream:                      1n << 9n,
  viewChannel:                      1n << 10n,
  /** @deprecated */
  readMessages:                     1n << 10n,
  sendMessages:                     1n << 11n,
  sendTTSMessages:                  1n << 12n,
  manageMessages:                   1n << 13n,
  embedLinks:                       1n << 14n,
  attachFiles:                      1n << 15n,
  readMessageHistory:               1n << 16n,
  mentionEveryone:                  1n << 17n,
  useExternalEmojis:                1n << 18n,
  /** @deprecated */
  externalEmojis:                   1n << 18n,
  viewGuildInsights:                1n << 19n,
  connect:                          1n << 20n,
  /** @deprecated */
  voiceConnect:                     1n << 20n,
  speak:                            1n << 21n,
  /** @deprecated */
  voiceSpeak:                       1n << 21n,
  muteMembers:                      1n << 22n,
  /** @deprecated */
  voiceMuteMembers:                 1n << 22n,
  deafenMembers:                    1n << 23n,
  /** @deprecated */
  voiceDeafenMembers:               1n << 23n,
  moveMembers:                      1n << 24n,
  /** @deprecated */
  voiceMoveMembers:                 1n << 24n,
  useVAD:                           1n << 25n,
  /** @deprecated */
  voiceUseVAD:                      1n << 25n,
  changeNickname:                   1n << 26n,
  manageNicknames:                  1n << 27n,
  manageRoles:                      1n << 28n,
  manageWebhooks:                   1n << 29n,
  manageGuildExpressions:           1n << 30n,
  /** @deprecated */
  manageExpressions:                1n << 30n,
  /** @deprecated */
  manageEmojisAndStickers:          1n << 30n,
  /** @deprecated */
  manageEmojis:                     1n << 30n,
  useApplicationCommands:           1n << 31n,
  /** @deprecated */
  useSlashCommands:                 1n << 31n,
  requestToSpeak:                   1n << 32n,
  /** @deprecated */
  voiceRequestToSpeak:              1n << 32n,
  manageEvents:                     1n << 33n,
  manageThreads:                    1n << 34n,
  createPublicThreads:              1n << 35n,
  createPrivateThreads:             1n << 36n,
  useExternalStickers:              1n << 37n,
  sendMessagesInThreads:            1n << 38n,
  useEmbeddedActivities:            1n << 39n,
  /** @deprecated */
  startEmbeddedActivities:          1n << 39n,
  moderateMembers:                  1n << 40n,
  viewCreatorMonetizationAnalytics: 1n << 41n,
  useSoundboard:                    1n << 42n,
  createGuildExpressions:           1n << 43n,
  createEvents:                     1n << 44n,
  useExternalSounds:                1n << 45n,
  sendVoiceMessages:                1n << 46n,
  // Unknown 47
  setVoiceChannelStatus:            1n << 48n,
  sendPolls:                        1n << 49n,
  useExternalApps:                  1n << 50n,
  pinMessages:                      1n << 51n,
  bypassSlowmode:                   1n << 52n,
};
Permissions.allGuild = Permissions.kickMembers
  | Permissions.banMembers
  | Permissions.administrator
  | Permissions.manageChannels
  | Permissions.manageGuild
  | Permissions.viewAuditLog
  | Permissions.viewGuildInsights
  | Permissions.changeNickname
  | Permissions.manageNicknames
  | Permissions.manageRoles
  | Permissions.manageWebhooks
  | Permissions.manageGuildExpressions
  | Permissions.manageEvents
  | Permissions.moderateMembers
  | Permissions.viewCreatorMonetizationAnalytics
  | Permissions.createGuildExpressions
  | Permissions.createEvents
  | Permissions.useExternalApps;
Permissions.allText = Permissions.createInstantInvite
  | Permissions.manageChannels
  | Permissions.addReactions
  | Permissions.viewChannel
  | Permissions.sendMessages
  | Permissions.sendTTSMessages
  | Permissions.manageMessages
  | Permissions.embedLinks
  | Permissions.attachFiles
  | Permissions.readMessageHistory
  | Permissions.mentionEveryone
  | Permissions.useExternalEmojis
  | Permissions.manageRoles
  | Permissions.manageWebhooks
  | Permissions.useApplicationCommands
  | Permissions.manageThreads
  | Permissions.createPublicThreads
  | Permissions.createPrivateThreads
  | Permissions.useExternalStickers
  | Permissions.sendMessagesInThreads
  | Permissions.sendVoiceMessages
  | Permissions.sendPolls
  | Permissions.useExternalApps
  | Permissions.pinMessages
  | Permissions.bypassSlowmode;
Permissions.allVoice = Permissions.createInstantInvite
  | Permissions.manageChannels
  | Permissions.prioritySpeaker
  | Permissions.stream
  | Permissions.viewChannel
  | Permissions.connect
  | Permissions.speak
  | Permissions.muteMembers
  | Permissions.deafenMembers
  | Permissions.moveMembers
  | Permissions.useVAD
  | Permissions.manageRoles
  | Permissions.requestToSpeak
  | Permissions.useEmbeddedActivities
  | Permissions.useSoundboard
  | Permissions.useExternalSounds
  | Permissions.sendVoiceMessages
  | Permissions.setVoiceChannelStatus
  | Permissions.sendPolls
  | Permissions.useExternalApps;
Permissions.all = Permissions.allGuild | Permissions.allText | Permissions.allVoice;
module.exports.Permissions = Permissions;

module.exports.PollLayoutTypes = {
  DEFAULT: 1,
};

module.exports.PremiumTiers = {
  NONE:   0,
  TIER_1: 1,
  TIER_2: 2,
  TIER_3: 3,
};

module.exports.PremiumTypes = {
  NONE:          0,
  NITRO_CLASSIC: 1,
  NITRO:         2,
};

module.exports.ReactionTypes = {
  NORMAL: 0,
  BURST:  1,
};

module.exports.RoleConnectionMetadataTypes = {
  INTEGER_LESS_THAN_OR_EQUAL:     1,
  INTEGER_GREATER_THAN_OR_EQUAL:  2,
  INTEGER_EQUAL:                  3,
  INTEGER_NOT_EQUAL:              4,
  DATETIME_LESS_THAN_OR_EQUAL:    5,
  DATETIME_GREATER_THAN_OR_EQUAL: 6,
  BOOLEAN_EQUAL:                  7,
  BOOLEAN_NOT_EQUAL:              8,
};

module.exports.RoleFlags = {
  IN_PROMPT: 1 << 0,
};

module.exports.SKUFlags = {
  AVAILABLE:          1 << 2,
  GUILD_SUBSCRIPTION: 1 << 7,
  USER_SUBSCRIPTION:  1 << 8,
};

module.exports.SKUTypes = {
  DURABLE:            2,
  CONSUMABLE:         3,
  SUBSCRIPTION:       5,
  SUBSCRIPTION_GROUP: 6,
};

module.exports.SortOrderTypes = {
  LATEST_ACTIVITY: 0,
  CREATION_DATE:   1,
};

module.exports.StageInstancePrivacyLevel = {
  PUBLIC:     1,
  GUILD_ONLY: 2,
};

module.exports.StickerFormats = {
  PNG:    1,
  APNG:   2,
  LOTTIE: 3,
  GIF:    4,
};

module.exports.StickerTypes = {
  STANDARD: 1,
  GUILD:    2,
};

module.exports.SubscriptionStatuses = {
  ACTIVE:   0,
  INACTIVE: 1,
  ENDING:   2,
};

module.exports.SystemChannelFlags = {
  SUPPRESS_JOIN_NOTIFICATIONS:                              1 << 0,
  SUPPRESS_PREMIUM_SUBSCRIPTIONS:                           1 << 1,
  SUPPRESS_GUILD_REMINDER_NOTIFICATIONS:                    1 << 2,
  SUPPRESS_JOIN_NOTIFICATION_REPLIES:                       1 << 3,
  SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS:        1 << 4,
  SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES: 1 << 5,
};

module.exports.SystemJoinMessages = [
  "%user% joined the party.",
  "%user% is here.",
  "Welcome, %user%. We hope you brought pizza.",
  "A wild %user% appeared.",
  "%user% just landed.",
  "%user% just slid into the server.",
  "%user% just showed up!",
  "Welcome %user%. Say hi!",
  "%user% hopped into the server.",
  "Everyone welcome %user%!",
  "Glad you're here, %user%.",
  "Good to see you, %user%.",
  "Yay you made it, %user%!",
];

module.exports.TextInputStyles = {
  SHORT:     1,
  PARAGRAPH: 2,
};

module.exports.ThreadMemberFlags = {
  HAS_INTERACTED: 1 << 0,
  ALL_MESSAGES:   1 << 1,
  ONLY_MENTIONS:  1 << 2,
  NO_MESSAGES:    1 << 3,
};

module.exports.UserFlags = {
  NONE:                         0,
  DISCORD_STAFF:                1 << 0,
  /** @deprecated */
  DISCORD_EMPLOYEE:             1 << 0,
  PARTNER:                      1 << 1,
  /** @deprecated */
  PARTNERED_SERVER_OWNER:       1 << 1,
  /** @deprecated */
  DISCORD_PARTNER:              1 << 1,
  HYPESQUAD:                    1 << 2,
  /** @deprecated */
  HYPESQUAD_EVENTS:             1 << 2,
  BUG_HUNTER_LEVEL_1:           1 << 3,
  // Unknown 4-5
  HOUSE_BRAVERY:                1 << 6,
  /** @deprecated */
  HYPESQUAD_ONLINE_HOUSE_1:     1 << 6,
  HOUSE_BRILLIANCE:             1 << 7,
  /** @deprecated */
  HYPESQUAD_ONLINE_HOUSE_2:     1 << 7,
  HOUSE_BALANCE:                1 << 8,
  /** @deprecated */
  HYPESQUAD_ONLINE_HOUSE_3:     1 << 8,
  PREMIUM_EARLY_SUPPORTER:      1 << 9,
  /** @deprecated */
  EARLY_SUPPORTER:              1 << 9,
  TEAM_PSEUDO_USER:             1 << 10,
  /** @deprecated */
  TEAM_USER:                    1 << 10,
  // Unknown 11
  SYSTEM:                       1 << 12,
  // Unknown 13
  BUG_HUNTER_LEVEL_2:           1 << 14,
  // Unknown 15
  VERIFIED_BOT:                 1 << 16,
  VERIFIED_DEVELOPER:           1 << 17,
  /** @deprecated */
  EARLY_VERIFIED_BOT_DEVELOPER: 1 << 17,
  /** @deprecated */
  VERIFIED_BOT_DEVELOPER:       1 << 17,
  CERTIFIED_MODERATOR:          1 << 18,
  /** @deprecated */
  DISCORD_CERTIFIED_MODERATOR:  1 << 18,
  BOT_HTTP_INTERACTIONS:        1 << 19,
  SPAMMER:                      1 << 20,
  // Unknown 21
  ACTIVE_BOT_DEVELOPER:         1 << 22,
};

module.exports.VerificationLevels = {
  NONE:      0,
  LOW:       1,
  MEDIUM:    2,
  HIGH:      3,
  VERY_HIGH: 4,
};

module.exports.VideoQualityModes = {
  AUTO: 1,
  FULL: 2,
};

module.exports.VoiceChannelEffectAnimationTypes = {
  PREMIUM: 0,
  BASIC:   1,
};

module.exports.VoiceCloseCodes = {
  UNKNOWN_OPCODE:           4001,
  FAILED_TO_DECODE_PAYLOAD: 4002,
  NOT_AUTHENTICATED:        4003,
  AUTHENTICATION_FAILED:    4004,
  ALREADY_AUTHENTICATED:    4005,
  SESSION_NO_LONGER_VALID:  4006,
  SESSION_TIMEOUT:          4009,
  SERVER_NOT_FOUND:         4011,
  UNKNOWN_PROTOCOL:         4012,
  DISCONNECTED:             4014,
  VOICE_SERVER_CRASHED:     4015,
  UNKNOWN_ENCRYPTION_MODE:  4016,
  DAVE_PROTOCOL_REQUIRED:   4017,
  BAD_REQUEST:              4020,
  RATE_LIMITED:             4021,
  CALL_TERMINATED:          4022,
};

module.exports.VoiceOPCodes = {
  IDENTIFY:                            0,
  SELECT_PROTOCOL:                     1,
  READY:                               2,
  HEARTBEAT:                           3,
  SESSION_DESCRIPTION:                 4,
  SPEAKING:                            5,
  HEARTBEAT_ACK:                       6,
  RESUME:                              7,
  HELLO:                               8,
  RESUMED:                             9,
  // Unknown 10
  CLIENTS_CONNECT:                     11,
  // Unknown 12
  CLIENT_DISCONNECT:                   13,
  /** @deprecated */
  DISCONNECT:                          13,
  // DAVE (end-to-end encryption) protocol opcodes. Eris does not implement DAVE; these are listed for completeness
  DAVE_PREPARE_TRANSITION:             21,
  DAVE_EXECUTE_TRANSITION:             22,
  DAVE_TRANSITION_READY:               23,
  DAVE_PREPARE_EPOCH:                  24,
  DAVE_MLS_EXTERNAL_SENDER:            25,
  DAVE_MLS_KEY_PACKAGE:                26,
  DAVE_MLS_PROPOSALS:                  27,
  DAVE_MLS_COMMIT_WELCOME:             28,
  DAVE_MLS_ANNOUNCE_COMMIT_TRANSITION: 29,
  DAVE_MLS_WELCOME:                    30,
  DAVE_MLS_INVALID_COMMIT_WELCOME:     31,
};

module.exports.WebhookEventPayloadTypes = {
  PING:  0,
  EVENT: 1,
};

module.exports.WebhookEventTypes = {
  APPLICATION_AUTHORIZED:   "APPLICATION_AUTHORIZED",
  APPLICATION_DEAUTHORIZED: "APPLICATION_DEAUTHORIZED",
  ENTITLEMENT_CREATE:       "ENTITLEMENT_CREATE",
  ENTITLEMENT_UPDATE:       "ENTITLEMENT_UPDATE",
  ENTITLEMENT_DELETE:       "ENTITLEMENT_DELETE",
};

module.exports.WebhookTypes = {
  INCOMING:         1,
  CHANNEL_FOLLOWER: 2,
  APPLICATION:      3,
};
