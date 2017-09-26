exports.run = (client, msg, args, sql) => {
  msg.delete();
  sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
    if (!row) return msg.reply("Teu nível atual é **0**, parça.");
    msg.reply(`Teu nível atual é **${row.level}**, parça.`);
  });
}