exports.run = (client, msg, args) => {
    var search = require('youtube-search');
    var opts = {
      maxResults: 1,
      key: process.env.GOOGLE
    };
    search('deadmau5', opts, function(err, results) {
      if(err) return console.log(err);
      msg.channel.send(results);
    });
}