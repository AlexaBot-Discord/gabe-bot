// ----------------------
//
// Start Dependencies

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const guildConf = {prefix: "$"};
client.login(process.env.BOT);

// End Dependencies
//
// ----------------------
//
// Start Events

client.on("ready", () => {
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setGame(`BORK | $ajuda`);  
});

client.on("guildCreate", guild => {
  guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES")).send("**BORK!**\nOlá, eu sou o Gabe-Bot, um bot multi-funções ~~meio inútil~~ completamente em Português!\nObrigado por me ter adicionado ao seu servidor, caso queira uma lista de comandos, faça ``$ajuda`` no seu servidor! :smile:\n\n➤ Meu repositório (Github): **<https://github.com/PillGP/gabe-bot>**\n\n➤ Venha para o meu servidor: **https://discord.gg/y9ZvmJb**\n\n➤ Convide-me para seu servidor: **<https://goo.gl/t4d3Vd>**");
});

// End Events
//
// ----------------------
//
// Start Commands

client.on("message", msg => {
  if(!msg.guild || msg.author.bot || msg.content.indexOf(guildConf.prefix) !== 0) return;
  const args = msg.content.split(/\s+/g);
  const command = args.shift().slice(guildConf.prefix.length).toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, msg, args, guildConf, fs);
    client.guilds.get("330439963193901056").channels.get("337921670796804099").send({embed:{color:0x46be30,author:{name: "Executed command", icon_url: msg.author.avatarURL},description:`**Command \`${command}\` was executed by \`${msg.author.tag}\` on \`${msg.guild.name}\`**`}});
    msg.react("✅");
  } catch (err) {
    console.log(err);
    msg.react("❓");
  };
});

// End Commands
//
// ----------------------