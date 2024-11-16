//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/919262650175 , https://wa.me/97698045414";
global.sudo = process.env.SUDO || "97698045414";
global.owner = process.env.OWNER_NUMBER || "97698045414,919262650175";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUE0bVN2Q3NuZTl1dWQ0MkhqbCt5RS9pdmc5d2xGcVZuRDV3NTFXRzAwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXgrd1M1Zy9vaGJkbS9nZzJjd3VrRVYwRERSNDFSRDhPTU9SQUVOT0MxQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQUpaQW1pTEJESGRkdkhIZHRjQTZlNFM0QXhJL2g2QTYrK0lvZlR0SlZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZMmptYmM3UlZya25KK3pJdE9aY0YvRjBUU09HdVBxbU9aN1VZcTBWSGtVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLbnpGS0dlUXA3WWtSQjJhcjNGMnNIbWM0UTlVUVdsQVZuTnNpUkF1bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIOUJad2VqZ3ZISWR4c1FjNUlQb3gyVityQXJvTDl6b2JGbWdiTWd3eU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0sydEZ4YUlCMTJsMnVMZ2lnelloZFhXTW9DUWdKOE1sWDdSUHVHeDNXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzhkV0FFOEdWL01ZL1dkSWJoN2d2UXFadDRZdUdndmFkd0F0MSswTXdndz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5zRzkrRmc4L0ljcS8zSkJKMDR4dFVLNHFnT05QaXhxWVVhTkZ1Z1VqemRGTmxEdVNEVldhUW1WaGlZMEdQVno1NlFtRTkxZTdOVUd2NDVyWVp3VWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6ImxVZkpHTDZqMW03OTcyWDRaeDdEZENLcC9TRWNGVTFPNW4ydnpRTmtGWE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlM2eldCWGpOVG9lY1NQdWtxbnR6RGciLCJwaG9uZUlkIjoiNzVhY2YxYTAtYjQ0YS00MjY5LTg5Y2ItNTIwNWRkMDRmYTAxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaRURjUXZlOUwxelFsTVBkalJVekl5bm9wQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2M1dCaHRWZHAvYlhWV2NEYmJmWnlUdnNDRHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1lUQjJYUFkiLCJtZSI6eyJpZCI6IjkxOTI2MjY1MDE3NToyMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2JRazVRREVLblc0TGtHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNWhiQkNNMkJqQU5kV1RHSHRFaHNmNnl0TWhYeVZYN0x0S3ovcTFXeUZ5WT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWTR1dGV0dzFndmYwU0lhUEhDYVB4Y3NyYUhHbHpKYTFseFJORk1MVUs3UnM0K0VLWUhNd0k4ME9nS2NRWjhITkVXajNaRFFNRUJtZmNOY3N0RjI3RGc9PSIsImRldmljZVNpZ25hdHVyZSI6InJiejFPZGpNanZBQTBWZS94a25ERVRCbXFWTzZDSDV2MW1TSU1YcUZmR1dpMVVNUXlra0QyZmtWejdvMlFMUVJqajhJeG1kR1ozcE5YcDdqZzU2OWdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5MjYyNjUwMTc1OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVZV3dRak5nWXdEWFZreGg3UkliSCtzclRJVjhsVit5N1NzLzZ0VnNoY20ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE3MzQzMjYsIm15QXBwU3RhdGVLZXlJZCI6IkFCTUFBS1RlIn0=
  process.env.SESSION_ID ||
  "mettre votre session ici"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ❤️⃝⃪ѕмαятуѕує∂❤️⃝⃪●┼┼",
  author: process.env.PACK_AUTHER || " ❤️⃝⃪ѕмαятуѕує∂❤️⃝⃪●┼┼",
  packname: process.env.PACK_NAME || "❤️⃝⃪ѕмαятуѕує∂❤️⃝⃪●┼┼",
  botname: process.env.BOT_NAME || "𖤐SANJU ROCKSTAR",
  ownername: process.env.OWNER_NAME || "❤️⃝⃪ѕмαятуѕує∂❤️⃝⃪●┼┼",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
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
