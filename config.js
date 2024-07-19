//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254739937062,254710772666";
global.sudo = process.env.SUDO || "254739937062,254710772666";
global.owner = process.env.OWNER_NUMBER || "255768619068";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lUYlF6STBPSnFNTDhkdElOL0FlVnREZVpwTjlOdXpqTiswUTFBdElHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJCTkFkbnlxVHQ2Z3NyZmMzY0hEZ21ZaUtRZWtGV0FqMC91NGdWbU13bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QTNLNkNERG9VYUZNd2dPbm5uSmxMRUphRWYrWGFuaDkzTjBKRXdzT2xJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjNmVQYVFaQTdPTHJ2dnlEQzFiT0htUUtNanI5N3ZmMlB3Umg4L25HR3hZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndBbFZTOWl6eU8zSVhSZlhKeGkrc2ZJSHpnUlBnWm5aVmN3RUd2MWJKRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFZa1NoWmhvS3FoM1RZZDJoWktMcXhObFdKbHJobk1NSUhDbzRkaW90aTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURTQzUxRVNIeU5OMHVLeFNrZzNwZDFmUkJ1K3Vpb24zN3AzRGQ3eXZraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXkwK3BqKzNxczlYMFZCM1I1NUtVRU4yMjlvTThrRUdFdXlkbzMvS1kyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN4dWI4Z0hVM1JQdjZDbGNybHpGT0tPbVo4ZnZwQTdISVRwVXpBZWdQMkNadXA3MEN6QTN2allwV0R1Q1c1TnYxdnBMVUFpQzZCSFpTUTY0b0ZrbkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiJhOVFlejQyc0NYbmpVOExvOSsrVXBEeVc5OG9PQlJza2l3Q21UK3BMbkVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc2ODYxOTA2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGRjFBODlDNjVEODhEQkNDRUI0MTlFNjE5QzFGRTE5MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNDE1NDE5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKc25qckFnUFFzUzg1QzNsYWZYYXRnIiwicGhvbmVJZCI6ImU4MzEwMDQ4LTU5YzktNDI3OS1hYzU2LThmN2Q0NjE2MWM1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxSSt6TFRUVE9qeVhwSit5WjdRZE5IY2ZXMGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDZmMXJ2WTJBeFQ2TjMvcy9aaFllVTZqenNVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpGRlk0WFBaIiwibWUiOnsiaWQiOiIyNTU3Njg2MTkwNjg6OTZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ055NTM2c0dFT250NnJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9heEc1TlpNc1d6UFB3ZG5iTktkYUZtbGVoVEVMdGN4UkN1Q3gvUVE3VTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InQzYVNQbHVMM3JwRVB1N2Y4Z014bjVqMFVGSERkMmcvc1dmOFdpVndTN291cjB1WVdpSHgwWXlUdlRkSExTREZ4MWlIL1g5dk51ajlOMVMzRFl0R0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqcWlrOXZjOVFtMk4zcTNpblo2OUhxOWRmTk1acm8wM2RraHlKZGc1bUc2Q2oyUkNlMlBpSUlQdCs4VkpadVZTaEpGbEU2Sm9nSXhDTEphMUhTMlFBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc2ODYxOTA2ODo5NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUbXNSdVRXVExGc3p6OEhaMnpTbldoWnBYb1V4QzdYTVVRcmdzZjBFTzFOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDE1NDE1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURaVyJ9=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


