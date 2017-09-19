exports.run = (client, msg, args) => {
    var respostas = [
        'Certamente que sim',
        'Tenho ideia que não',
        'Nem tenho resposta para isso',
        'Não tenho certeza disso, brother'
    ];
    var rand = respostas[Math.floor(Math.random() * respostas.length)];
    msg.delete();
    msg.channel.send({embed:{
        color: 0x46be30,
        title: {
            name: "Perguntas & Respostas",
            icon_url: client.user.avatarURL
        },
        fields: [
            {
                name: "Pergunta: " + args.join(" "),
                value: "**Resposta:** " + rand
            }
        ],
        footer: {
            icon_url: msg.author.avatarURL,
            text: `${msg.author.tag}`
        },
    }});
}