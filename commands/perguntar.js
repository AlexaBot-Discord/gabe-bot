exports.run = (client, msg, args) => {
    const respostas = [
        'Certamente que sim',
        'Tenho ideia que não',
        'Nem tenho resposta para isso',
        'Não tenho certeza disso, brother'
    ];
    const rand = respostas[Math.floor(Math.random() * respostas.length)];
    msg.delete();
    msg.channel.send({embed:{
        color: 0x46be30,
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