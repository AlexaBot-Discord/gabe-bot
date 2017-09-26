exports.run = (client, msg, args, sql) => {
  msg.delete();
  sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
    if (!row) return message.reply("Teu nível atual é **0**, parça.");
    message.reply(`Teu nível atual é **${row.level}**, parça.`);
  });
}