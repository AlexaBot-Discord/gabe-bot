exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send('Ping?').then(m => m.edit(`Ping: ${m.createdTimestamp - msg.createdTimestamp}ms\nHeartbeat: ${Math.round(client.ping)}ms`) );
}