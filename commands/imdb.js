exports.run = (client, msg, args) => {
    var imdb = require('imdb');
    imdb(args[0], function(err, data) {
        if(data) {
            msg.delete();
            msg.channel.send({embed:{
                color: 0x46be30,
                title: data.title+" ("+data.year+")",
                description: "Classificação de Conteúdo: "+data.contentRating+"\nDescrição: "+data.description+"\nDiretor: "+data.director+"\nRating: "+data.rating+"/10",
                thumbnail: {
                    url: data.poster
                },
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: `${msg.author.tag}`
                },
            }});
        }
        if(err) {
            msg.delete();
            msg.channel.send("**:x: | ERRO*\n```"+err.stack+"```");
        }
    })
}