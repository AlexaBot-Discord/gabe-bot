// Dependencies
var Discord = require("discord.js");
var client = new Discord.Client();
var fs = require("fs");
var guildConf = {prefix: "$"};
const sql = require("sqlite");
sql.open("./score.sqlite");

// Events
client.on("ready", () => {
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setGame(`BORK | $ajuda`);  
});

// Commands
client.on("message", msg => {
  // Start Points
  sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${msg.author.id}`);
        msg.reply(`Você subiu para o nível **${curLevel}**! Tu tá de parabéns, meliante!`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${msg.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
    });
  });
  // End Points
  if(!msg.guild || msg.author.bot) return;
  if(msg.content.indexOf(guildConf.prefix) !== 0) return;
  var args = msg.content.split(/\s+/g);
  var command = args.shift().slice(guildConf.prefix.length).toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, msg, args, guildConf, fs, sql);
    client.guilds.get("330439963193901056").channels.get("337921670796804099").send({embed:{color:0x46be30,author:{name: "Executed command", icon_url: msg.author.avatarURL},description:`**Command \`${command}\` was executed by \`${msg.author.tag}\` on \`${msg.guild.name}\`**`}});
  } catch (err) {
    console.log(err)
  };
});

// Login
client.login(process.env.BOT);