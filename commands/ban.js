exports.run = (client, msg, args, guildConf) => {
    var menção = msg.mentions.members.first();
    var razão = msg.content.split(/\s+/g).slice(2).join(" ");
    if(msg.content === guildConf.prefix + "ban") {
        msg.delete();
        return msg.channel.send("<:wonderExclamation:332685258623287296> |  **Me fala o usuário que eu vou martelar a bunda**");
    };
    if(!msg.member.hasPermission("BAN_MEMBERS")) {
        msg.delete();
        return msg.channel.send("<:wonderExclamation:332685258623287296> | **Tu não tem a permissão ``BAN_MEMBERS``. Pede aí para algum admin, ou algo do género**")
    }
    menção.ban(razão+" | "+msg.author.tag);
    msg.delete();
    msg.channel.send(":hammer: |  **Martelei o usuário " + menção.user.tag + " daqui pra fora.**\n**Razão:** " + razão + "\n**Ban enviado por:** "+ msg.author.tag)
    msg.guild.owner.send(":hammer: |  **Martelei o usuário " + menção.user.tag + " da " + msg.guild.name + " pra fora.**\n**Razão:** " + razão + "\n**Ban enviado por:** " + msg.author.tag)
}