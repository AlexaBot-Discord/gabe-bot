exports.run = (client, msg, args, guildConf) => {
    var menção = msg.mentions.members.first();
    var razão = msg.content.split(/\s+/g).slice(2).join(" ");
    if(msg.content === guildConf.prefix + "kick") {
        msg.delete();
        return msg.channel.send("<:wonderExclamation:332685258623287296> |  **Me fala o usuário que eu vou chutar a bunda**");
    };
    if(!msg.member.hasPermission("KICK_MEMBERS")) {
        msg.delete();
        return msg.channel.send("<:wonderExclamation:332685258623287296> | **Tu não tem a permissão ``KICK_MEMBERS``. Pede aí para algum admin, ou algo do género**")
    }
    menção.kick(razão+" | "+msg.author.tag);
    msg.delete();
    msg.channel.send(":boot: |  **Chutei a bunda do " + menção.user.tag + " daqui pra fora.**\n**Razão:** " + razão + "\n**Kick enviado por:** " + msg.author.tag);
    msg.guild.owner.send(":boot: |  **Chutei a bunda do " + menção.user.tag + " da " + msg.guild.name + " pra fora.**\n**Razão:** " + razão + "\n**Kick enviado por:** " + msg.author.tag)
}