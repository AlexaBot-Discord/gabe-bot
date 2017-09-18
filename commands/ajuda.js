exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send({embed: {
        author: {
            name: "Gabe-Bot",
            icon_url: client.user.avatarURL
        },
        color: 0x46be30,
        description: `**BORK!**\nOlá, eu sou o Gabe-Bot, um bot multi-funções ~~meio inútil~~ completamente em Português (:flag_pt: e :flag_br:, sim -_-)!\nEu fui construido em [Node.js](https://nodejs.org) e minha lib é [Discord.js](https://discord.js.org).\nSe tiver alguma dúvida, eu enviei alguns comandos para sua DM, veja lá!`,
        fields: [
            {
                name: "**Convide o Gabe-Bot para seu server**",
                value: "[Clique aqui](https://goo.gl/t4d3Vd)",
                inline: true
            },{
                name: "**Envie sugestões para o Gabe-Bot**",
                value: "**$feedback sugestão**",
                inline: true
            }
        ],
        footer: {
            icon_url: msg.author.avatarURL,
            text: `${msg.author.tag}`
        }
    }});
    msg.author.send({embed:{
        author: {
            name: "Lista de comandos do Gabe-Bot",
            icon_url: client.user.avatarURL
        },
        color: 0x46be30,
        fields: [
            {
                name: "**$ajuda**",
                value: "<:wonderArrow:338481496211849216>  Mostra esta mensagem maravilhenta que você está vendo neste momento"
            },{
                name: "**$ban [Usuário] [Razão]**",
                value: "<:wonderArrow:338481496211849216>  Bane o usuário com razão para Audit Log"
            },{
                name: "**$kick [Usuário] [Razão]**",
                value: "<:wonderArrow:338481496211849216>  Expulsa o usuário com razão para Audit Log"
            },{
                name: "**$estatisticas**",
                value: "<:wonderArrow:338481496211849216>  Mostra algumas estatísticas minhas, como ping, uptime, em quantos servidores eu estou, etc."
            },{
                name: "**$feedback [Sugestão]**",
                value: "<:wonderArrow:338481496211849216>  Envie suas sugestões de melhorias ou adições para o bot, e se for boa a sugestão, o comando poderá ser adicionado!"
            },{
                name: "**$ping**",
                value: "<:wonderArrow:338481496211849216>  O que esse comando faz? :thinking:"
            },{
                name: "**$servidor**",
                value: "<:wonderArrow:338481496211849216>  Mostra variadas informações sobre o servidor"
            },{
                name: "**$roles**",
                value: "<:wonderArrow:338481496211849216>  Mostra todos os cargos no servidor"
            },{
                name: "**$usuario [Usuário]**",
                value: "<:wonderArrow:338481496211849216>  Mostra variadas informações sobre o usuário mencionado"
            }
        ]
    }}).then(m => m.pin());
}