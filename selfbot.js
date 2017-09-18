const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Ready.")
});
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on('message', msg => {
    const args = msg.content.split(" ").slice(1);
    if(msg.content.startsWith("%v")) {
      msg.delete();
      try {
        const code = args.join(" ");
        let evaled = eval(code);
        if (typeof evaled !== "string") {
          evaled = require("util").inspect(evaled);
        };
        client.users.get("317687423519817729").send({embed: {
          description: "**Success**  <:wonderCheck:333376965556043777>",
          color: 52306,
          fields: [{
            name: "<:wonderArrowDown:338289814187278339>|  **Input**",
            value: "```" + code + "```",
          },{
            name: "<:wonderArrowUp:338289757937467404>|  **Output**",
            value: "```" + clean(evaled) + "```",
          }],
          footer: {
              icon_url: msg.author.avatarURL,
              text: `Command issued by ${msg.author.tag}`
          }
        }});
      } catch (err) {
        const code = args.join(" ");
        client.users.get("317687423519817729").send({embed: {
          description: "**Error**  <:wonderCross:333375581859086337>",
          color: 11730962,
          fields: [{
            name: "<:wonderArrowDown:338289814187278339>|  **Input**",
            value: "```" + code + "```",
          },{
            name: "<:wonderArrowUp:338289757937467404>|  **Output**",
            value: "```" + clean(err) + "```",
          }],
          footer: {
              icon_url: msg.author.avatarURL,
              text: `Command issued by ${msg.author.tag}`
          }
        }})
      }
    }
});


client.login("MjE2OTAxODAwODk5NTEwMjcy.DJr2Jg.YCUHJtjrv_e30QPXMJw-uOYP4Kk")