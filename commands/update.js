exports.run = (client, msg, args) => {
    const snekfetch = require('snekfetch');
    if(msg.author.id !== "216901800899510272") return;
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
      .set('Authorization', process.env.DISCORDBOTS)
      .send({ server_count: client.guilds.size })
      .then(msg.channel.send('Updated dbots.org status.'))
      .catch(e => msg.channel.send('dbots.org down spam @oliy'));
}