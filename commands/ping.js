exports.run = (client, msg, args) => {
    msg.channel.startTyping();
    msg.channel.send('Ping?').then(m => m.edit(`Ping: ${m.createdTimestamp - msg.createdTimestamp}ms\nHeartbeat: ${Math.round(client.ping)}ms`) );
    msg.channel.stopTyping();
}