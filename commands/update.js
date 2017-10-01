exports.run = (client, msg, args) => {
    const snekfetch = require('snekfetch');
    if(msg.author.id !== "216901800899510272") return;
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMxNzY4NzQyMzUxOTgxNzcyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTA2ODIzNTcwfQ.21x9zAwt5b7_KW1lWs_XLRRkiBYsqUMvlbcCSAfCnL0')
      .send({ server_count: client.guilds.size })
      .then(msg.channel.send('Updated dbots.org status.'))
      .catch(e => msg.channel.send('dbots.org down spam @oliy'));
}