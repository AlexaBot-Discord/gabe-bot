exports.run = (client, msg, args) => {
    var menção = msg.mentions.members.first();
    var moment = require('moment');
    if(!menção) {
        msg.delete();
        return msg.channel.send("**<:wonderExclamation:332685258623287296>|  Define uma menção válida**");
    };
    if(menção.user.bot) {
        var yn = "Verdadeiro"
    } else {
        var yn = "Falso"
    }
    if(menção.presence.status === "online") {
        var estado = "Disponível";
        var barra = "4238459"
    } else if(menção.presence.status === "dnd") {
        var estado = "Não perturbe";
        var barra = "15746887"
    } else if(menção.presence.status === "idle") {
        var estado = "Ausente";
        var barra = "16426522"
    } else if(menção.presence.status === "offline") {
        var estado = "Invisível";
        var barra = "7634829"
    }
    if(!menção.presence.game || !menção.presence.game.name) {
        var playing = "Nada"
    } else {
        var playing = menção.presence.game.name
    }
    msg.delete();
    msg.channel.send({embed: {
    color: barra,
    thumbnail: {
        url: menção.user.avatarURL
    },
    fields: [
        {
            name: "<:wonderWarning:333376928788512768> |  Zona de informação do " + menção.user.username,
            value: `<:wonderArrow:338481496211849216> **Nome:** ${menção.user.username}\n<:wonderArrow:338481496211849216> **ID:** ${menção.id}\n<:wonderArrow:338481496211849216> **Conhecido no servidor como:** ${menção.displayName}\n<:wonderArrow:338481496211849216> **Entrou no servidor em:** ${moment(menção.joinedTimestamp).format("DD/MM/YYYY, HH:MM")}\n<:wonderArrow:338481496211849216> **Entrou no Discord em:** ${moment(menção.user.createdTimestamp).format("DD/MM/YYYY, HH:MM")}`,
        },{
            name: "<:wonderWarning:333376928788512768> |  Mais informações sobre " + menção.user.username,
            value: `<:wonderArrow:338481496211849216> **Status:** ${estado}\n<:wonderArrow:338481496211849216> **Bot?** ${yn}\n<:wonderArrow:338481496211849216> **Cargos:** ${menção.roles.size}\n<:wonderArrow:338481496211849216> **Jogando:** ` + playing + `\n`
        }
    ],
    footer: {
        icon_url: msg.author.avatarURL,
        text: `${msg.author.tag}`
    }
    }});
}