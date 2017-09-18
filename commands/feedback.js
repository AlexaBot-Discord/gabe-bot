exports.run = (client, msg, args) => {
    msg.delete();
    client.guilds.get("330439963193901056").channels.get("359437797226053633").send({embed:{
        color: 0x46be30,
        thumbnail: {
            url: msg.author.avatarURL
        },
        title: "Sugestão de "+msg.author.tag+", proveniente do servidor "+msg.guild.name,
        description: args.join(" "),
    }});
    msg.channel.send("Obrigado <@"+msg.author.id+"> pela sua sugestão! Ela irá ser vista pelo <@216901800899510272> o quanto antes! :smile:")
}