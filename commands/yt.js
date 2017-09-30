exports.run = (client, msg, args) => {
    var yt = require('youtube-search');
    var search = args.join(" ");
    var options = {
        maxResults: 1,
        key: 'AIzaSyDwYfSLFOoMPwYBzWk0duJMRWm9Kgl64qo'
    };
    yt(search, options, function(err, results) {
        if(err) return msg.channel.send("<:wonderExclamation:332685258623287296>  **ERRO:**\n```"+err+"```");
        msg.channel.send(results);
    });
}