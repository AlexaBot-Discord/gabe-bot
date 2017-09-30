exports.run = (client, msg, args) => {
    const gagScraper = require('9gag-scraper');
    new gagScraper().getRandom(function (error, data) {
        msg.channel.startTyping();
        msg.channel.send({embed:{
            color: 0x46be30,
            title: "9GAG | "+data.title,
            image: {
                url: data.image
            }
        }});
        msg.channel.stopTyping();
    });
}