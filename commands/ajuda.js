exports.run = (client, msg, args) => {
    var comandos = 15;
    msg.delete();
    msg.channel.send({embed: {
        author: {
            name: "Gabe-Bot",
            icon_url: client.user.avatarURL
        },
        color: 0x46be30,
        description: `**BORK!**\nOlá, eu sou o Gabe-Bot, um bot multi-funções ~~meio inútil~~ completamente em Português (:flag_pt: e :flag_br:, sim -_-)!\nEu fui construido em [Node.js](https://nodejs.org) e minha lib é [Discord.js](https://discord.js.org).\nSe tiver alguma dúvida, eu enviei **${Math.floor(comandos - 3)}** comandos para sua DM, veja lá!`,
        fields: [
            {
                name: "**Acesse o Website do Gabe-Bot**",
                value: "[Clique aqui](https://pillgp.github.io/gabe-website/index.html)",
                inline: true
            },{
                name: "**Entre no servidor do Gabe**",
                value: "[Clique aqui](https://discord.gg/y9ZvmJb)",
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
            },{
                name: "**$perguntar [Sua pergunta]**",
                value: "<:wonderArrow:338481496211849216>  Me faça uma pergunta! (Todas as respostas são aleatórias)"
            },{
                name: "**$imdb [IMDB Tag]**",
                value: "<:wonderArrow:338481496211849216>  Pesquise um filme / série pela tag do IMDB"
            },{
                name: "**$osu [Usuário do osu!]**",
                value: "<:wonderArrow:338481496211849216>  Veja todas as estatísticas de um usuário no osu!"
            }
        ]
    }}).then(m => m.pin());
}