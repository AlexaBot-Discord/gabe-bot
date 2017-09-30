exports.run = (client, msg, args) => {
    const osu = require('node-osu');
    const osuApi = new osu.Api(process.env.OSU);
    function numberWithCommas(x) {
        const parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    osuApi.getUser({u: args.join(" ")}).then(user => {
        const pais = user.country;
        msg.channel.startTyping();
        msg.channel.send({embed:{
            color: 0x46be30,
            author: {
                name: "Perfil de "+user.name,
                icon_url: "https://a.ppy.sh/"+user.id
            },
            fields: [
                {
                    name: "Ranking Global",
                    value: "#"+user.pp.rank,
                    inline: true
                },{
                    name: "Ranking Local",
                    value: "#"+user.pp.countryRank+" :flag_"+pais.toLowerCase()+":",
                    inline: true
                },{
                    name: "Pontos de Performance",
                    value: Math.round(user.pp.raw)+"pp",
                    inline: true
                },{
                    name: "Ranks",
                    value: "<:osuSS:359800530383405057> "+user.counts.SS+" <:osuS:359808204022218753> "+user.counts.S+" <:osuA:359808219075313675> "+user.counts.A,
                    inline: true
                },{
                    name: "Pontuação Ranked",
                    value: numberWithCommas(user.scores.ranked),
                    inline: true
                },{
                    name: "Pontuação Total",
                    value: numberWithCommas(user.scores.total),
                    inline: true
                },{
                    name: "Nível",
                    value: Math.round(user.level),
                    inline: true
                },{
                    name: "Contagem de Jogos",
                    value: user.counts.plays,
                    inline: true
                },{
                    name: "Pontaria",
                    value: user.accuracyFormatted,
                    inline: true
                }
            ],
            footer: {
                icon_url: msg.author.avatarURL,
                text: `${msg.author.tag}`
            },
            thumbnail: {
                url: "https://a.ppy.sh/"+user.id
            }
        }});
        msg.channel.stopTyping();
    });
}