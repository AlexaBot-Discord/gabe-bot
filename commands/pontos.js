exports.run = (client, msg, args, sql) => {
    msg.delete();
    sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
      if (!row) return message.reply("Tu não tem ponto nenhum, parceiro! :(");
      message.reply(`Tu tem **${row.points}** pontos, parceiro! :)`);
    });
}