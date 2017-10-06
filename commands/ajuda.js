exports.run = (client, msg, args) => {
    const comandos = 19;
    const cmds = Math.floor(comandos - 3);
    msg.channel.startTyping();
    msg.channel.send({embed:{color: 0x46be30,description: "**BORK!**\nOlá, eu sou o Gabe-Bot, um bot multi-funções ~~meio inútil~~ completamente em Português!\nEnviei para você uma lista com **"+cmds+"** comandos na DM, vá ver!\n\n➤ Meu repositório (Github): **<https://github.com/PillGP/gabe-bot>**\n\n➤ Venha para o meu servidor: **https://discord.gg/y9ZvmJb**\n\n➤ Convide-me para seu servidor: **<https://goo.gl/t4d3Vd>**"}});
    msg.channel.stopTyping();
    msg.author.send({embed:{
        author: {
            name: "Lista de comandos do Gabe-Bot",
            icon_url: client.user.avatarURL
        },
        color: 0x46be30,
        fields: [
            {
                name: "**g$ajuda**",
                value: "➤ Mostra esta mensagem maravilhenta que você está vendo neste momento"
            },{
                name: "**g$ban [Usuário] [Razão]**",
                value: "➤ Bane o usuário com razão para Audit Log"
            },{
                name: "**g$kick [Usuário] [Razão]**",
                value: "➤ Expulsa o usuário com razão para Audit Log"
            },{
                name: "**g$estatisticas**",
                value: "➤ Mostra algumas estatísticas minhas, como ping, uptime, em quantos servidores eu estou, etc."
            },{
                name: "**g$feedback [Sugestão]**",
                value: "➤ Envie suas sugestões de melhorias ou adições para o bot, e se for boa a sugestão, o comando poderá ser adicionado!"
            },{
                name: "**g$ping**",
                value: "➤ O que esse comando faz? :thinking:"
            },{
                name: "**g$servidor**",
                value: "➤ Mostra variadas informações sobre o servidor"
            },{
                name: "**g$roles**",
                value: "➤ Mostra todos os cargos no servidor"
            },{
                name: "**g$usuario [Usuário]**",
                value: "➤ Mostra variadas informações sobre o usuário mencionado"
            },{
                name: "**g$perguntar [Sua pergunta]**",
                value: "➤ Me faça uma pergunta! (Todas as respostas são aleatórias)"
            },{
                name: "**g$imdb [IMDB Tag]**",
                value: "➤ Pesquise um filme / série pela tag do IMDB"
            },{
                name: "**g$osu [Usuário do osu!]**",
                value: "➤ Veja todas as estatísticas de um usuário no osu!"
            },{
                name: "**g$9gag**",
                value: "➤ Receba uma imagem aleatória do 9GAG"
            },{
                name: "**g$habbo**",
                value: "➤ Receba um meme de Habbo aleatório [Sugestão: Nekroッ#4893]"
            },{
                name: "**g$traduzir [Texto]**",
                value: "➤ Traduz um texto para Inglês"
            }
        ]
    }}).then(m => m.pin());
}