exports.run = (client, msg, args) => {
    var gagScraper = require('9gag-scraper');
    msg.delete();
    new gagScraper().getRandom(function (error, data) {
        msg.channel.send({embed:{
            color: 0x46be30,
            title: "9GAG | "+data.title,
            image: {
                url: data.image
            }
        }});
    });
}