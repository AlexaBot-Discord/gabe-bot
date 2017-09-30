exports.run = (client, msg, args, guildConf) => {
    const menção = msg.mentions.members.first();
    const razão = msg.content.split(/\s+/g).slice(2).join(" ");
    if(msg.content === guildConf.prefix + "kick") {
        msg.channel.startTyping();
        msg.channel.send("<:wonderExclamation:332685258623287296> |  **Me fala o usuário que eu vou chutar a bunda**");
        return msg.channel.stopTyping();
    };
    if(!msg.member.hasPermission("KICK_MEMBERS")) {
        msg.channel.startTyping();
        msg.channel.send("<:wonderExclamation:332685258623287296> | **Tu não tem a permissão ``KICK_MEMBERS``. Pede aí para algum admin, ou algo do género**");
        return msg.channel.stopTyping();
    }
    menção.kick(razão+" | "+msg.author.tag);
    msg.channel.startTyping();
    msg.channel.send(":boot: |  **Chutei a bunda do " + menção.user.tag + " daqui pra fora.**\n**Razão:** " + razão + "\n**Kick enviado por:** " + msg.author.tag);
    msg.channel.stopTyping();
    msg.guild.owner.startTyping();
    msg.guild.owner.send(":boot: |  **Chutei a bunda do " + menção.user.tag + " da " + msg.guild.name + " pra fora.**\n**Razão:** " + razão + "\n**Kick enviado por:** " + msg.author.tag);
    msg.guild.owner.stopTyping();
}