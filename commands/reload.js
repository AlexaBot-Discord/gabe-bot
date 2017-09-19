exports.run = (client, msg, args) => {
  if(msg.author.id !== "216901800899510272") return;
  if(!args || args.size < 1) return msg.reply("Você precisa de me dizer qual o comando que vou reiniciar");
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  msg.reply(`O comando **${args[0]}** foi reiniciado`);
};