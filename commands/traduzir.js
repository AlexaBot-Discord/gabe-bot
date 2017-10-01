exports.run = (client, msg, args) => {
    const translate = require('google-translate-api');
    const text = args.join(" ");
    translate(text, {to: 'en'}).then(res => {
       msg.channel.send({embed:{
           color: 0x46be30,
           description: ":flag_"+res.from.language.iso+": ➤ *"+text+"*\n:flag_us: ➤ *"+res.text+"*",
           footer: {
             icon_url: msg.author.avatarURL,
             text: `${msg.author.tag}`
           }
       }});
   }).catch(err => {
      msg.channel.startTyping();
      msg.channel.send("**:x: | ERRO**\n```"+err+"```");
      msg.channel.stopTyping();
   });
}