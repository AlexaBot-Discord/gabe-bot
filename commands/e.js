exports.run = (client, msg, args) => {
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
if(msg.author.id !== "216901800899510272") return;
    msg.delete();
    try {
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      msg.channel.send("```"+clean(evaled)+"```");
    } catch (err) {
      const code = args.join(" ");
      msg.channel.send("```"+clean(err)+"```")
    }
}