exports.run = (client, msg, args) => {
    const moment = require("moment");
    const guild = msg.guild;
    msg.channel.startTyping();
    msg.channel.send({embed: {
        author: {
            name: guild.name,
            icon_url: guild.iconURL
        },
        color: 0x46be30,
        thumbnail: {
            url: guild.iconURL
        },
        fields: [
            {
                name: "**<:wonderHash:332279087336914944>  ID**",
                value: guild.id,
                inline: true
            },{
                name: "**<:wonderMap:338475944895447051>  Região**",
                value: guild.region,
                inline: true
            },{
                name: `**<:wonderBiS2:332669749773467650>  Membros**`,
                value: guild.memberCount,
                inline: true
            },{
                name: "**<:wonderPushpin:332664521196044288>  Canais**",
                value: guild.channels.size,
                inline: true
            },{
                name: "**<:wonderCrown:332663799436017667>  Dono/a do Servidor**",
                value: guild.owner.user.tag,
                inline: true
            },{
                name: "**<:wonderCalendar:332664275980255232>  Data de Criação**",
                value: moment(msg.guild.createdTimestamp).format("DD/MM/YYYY, HH:MM"),
                inline: true
            },{
                name: "**<:wonderCheck:333376965556043777>  Roles [" + guild.roles.size + "]**",
                value: "Veja as roles disponíveis com $roles",
                inline: true
            }
        ],
        footer: {
            icon_url: msg.author.avatarURL,
            text: `${msg.author.tag}`
        }
    }});
    msg.channel.stopTyping();
}