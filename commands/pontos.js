exports.run = (client, msg, args, sql) => {
    msg.delete();
    sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
      if (!row) return msg.reply("Tu não tem ponto nenhum, parceiro! :(");
      msg.reply(`Tu tem **${row.points}** pontos, parceiro! :)`);
    });
}