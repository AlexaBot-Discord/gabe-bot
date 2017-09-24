exports.run = (client, msg, args) => {
    var comandos = 16;
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
    msg.author.send("```\n\n➤ $ajuda\nMostra esta mensagem maravilhenta\n\n➤ $ban [Usuário] [Razão]\nBane o usuário com razão para Audit Log\n\n➤ $kick [Usuário] [Razão]\nKicka o usuário com razão para Audit Log\n\n➤ $estatisticas\nMostra algumas estatísticas minhas, como ping, uptime, em quantos servidores eu estou, etc.\n\n$feedback [Sugestão]\nEnvie suas sugestões de melhorias ou adições para o bot, e se for boa a sugestão, o comando poderá ser adicionado!\n\n➤ $ping\nUm bot não é um bot sem comando de ping\n\n➤ $servidor\nMostra variadas informações sobre o servidor\n\n➤ $roles\nMostra as roles do servidor\n\n➤ $usuario [Usuário]\nMostra variadas informações sobre o usuário mencionado\n\n➤ $perguntar [Pergunta]\nMe faça uma pergunta! (Todas as respostas são aleatórias)\n\n➤ $imdb [Tag IMDB]\nPesquise um filme / série pela tag IMDB\n\n➤ $osu [Usuário osu!]\nVeja todas as estatísticas de um usuário no osu!\n\n➤ $9gag\nReceba uma imagem aleatória do 9GAG```").then(m => m.pin());
}