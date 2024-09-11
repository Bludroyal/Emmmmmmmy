//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBTcHlWTUJ3UTNUT3VwNDBhVERGY1BGdExnOUxxRkVSWUNzeEFRTXIxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWdyMlBrUnlWM2FEM01nQnNPR2YvMFlnOEJiLzl3UWhYcHpNd0dRczMwWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUEpDUzE5U3hzd1RUcHkrNWx1WENyQnY4ek5KVlc5WUtPazVWK3ZKbjNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHbTNucmxKaDhrMll2aFU0bWVqU0pXZjdrS2EwNVp1OXo3aHJEMTRrUUZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQTC9EcnFicGNYaXhZeUtWaHpqTVhPZzVickhDOVllTkpmVTNLZFdOVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwxMDcwbHQ2eTNOb0pGSGRETGxZRU4vcUFLS2F2YVQvTXlBeUxSbk1QakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BreW9vb2ZFUjQxUWJUK1diM0kwTkcrcGpibG1VVUJ1QzhxeUIxaTNIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURkWVFpd2JEUmpHczQrNy93TU8vSjNRTmtmazNEZEtNa1RPRW4wcVoyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im82RGl0RWVremdvZm9KZE9YNXoveFFmV2VMTFRBTlFkMXo2OUFCeVRMNzVVc29XRWVQWFZyTVhjTDlUZUF6RkdVeTVlSUlQUHVCZG5HeTVpOHB6UkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6ImRvU08wUTZBVUZrK2x4cGZra2FScjMwV3kxT0RJUWJZd1d6RU90cDN5Q1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTExMjE3MTA3OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NTNDNjAzMkMzNzVBMDcwRTEzNjRBMzI5NzA5QThGNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2MDQ0NDAyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTEyMTcxMDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNDNTQ1QzI3NDMzRkI3REQ2RjQ1MjY3RUI4NkZEODY3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYwNDQ0MDN9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZxZThfeXc3VEQyWXluZzlDT2ZvSVEiLCJwaG9uZUlkIjoiYmFmNzExMGItY2I3MC00Y2ViLThkMzAtYWI5ODExYWZjOTNmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHTEg3Q0RmUFN4bDFkVjVwSU1GdlRwbGlEMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUTRJNFkxNGxvcTJVTnQ4M1FqM3FFWHVjTzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUZFNzFTS0ciLCJtZSI6eyJpZCI6IjIzNDkxMTIxNzEwNzg6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJraW5nIGhha2kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05IbnQrNEdFT0N4aGJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9JTTFHN0RrNTJFcjd6Tkl6T0Y5bXBjakhERGxjZktaWjNrQlhqdW14VGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJGWG1MNmIxekhtbmUycGhja2h3SmRPUjdockdkdlZvYUZjK2xHVDRSc1NtNmJJUzhITzFTcWI3aEhieDBwaHh1SENaWldzSzRyQUJQY0hEZy9LOUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXNjBKQkhJRytQUlpub1IrNTlWTEo1d2tjOUJOdFNEVUh0TC9iTHR0SlJ2S2FxVTVhVFRJMWlqbnd3ejFma0ZOWkR0NjA0UCttczJtQjJtT2x2c2dBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMTIxNzEwNzg6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhQ0ROUnV3NU9kaEsrOHpTTXpoZlpxWEl4d3c1WEh5bVdkNUFWNDdwc1UzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MDQ0Mzk4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpLWCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
