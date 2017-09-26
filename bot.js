// Dependencies
var Discord = require("discord.js");
var client = new Discord.Client();
var fs = require("fs");
var guildConf = {prefix: "$"};

// Events
client.on("ready", () => {
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setGame(`BORK | $ajuda`);  
});

// Commands
client.on("message", msg => {
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