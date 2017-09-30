exports.run = (client, msg, args) => {
    msg.channel.startTyping();
    msg.channel.send({embed: {
        color: 0x46be30,
        description: "<:wonderCheck:333376965556043777> | **Roles [" + msg.guild.roles.size + "]**\n" + "```" + msg.guild.roles.map(r => r.name).join(', ') + "```",
        footer: {
            icon_url: msg.author.avatarURL,
            text: `${msg.author.tag}`
        }
    }});
    msg.channel.stopTyping();
}