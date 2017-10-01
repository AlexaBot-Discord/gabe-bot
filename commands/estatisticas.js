exports.run = (client, msg, args) => {
String.prototype.toHHMMSS = function () {
    const sec_num = parseInt(this, 10); 
    const hours   = Math.floor(sec_num / 3600);
    const days   = Math.floor(hours / 24);
    const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    const seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    const time    = hours+'h '+minutes+'m '+seconds+'s';
        days > 1 ? time = days+" dias " : time = time
    return time;
};
    const os = require('os-utils');
    const moment = require('moment');
    const sistema = os.sysUptime();
    msg.channel.startTyping();
    msg.channel.send({embed: {
        author: {
            name: "Estatísticas do " + client.user.username,
            icon_url: client.user.avatarURL
        },
        color: 0x46be30,
        fields: [
            {
                name: ":cityscape: | **Servidores**",
                value: client.guilds.size,
                inline: true
            },{
                name: ":hash: | **Canais**",
                value: client.channels.size,
                inline: true
            },{
                name: ":busts_in_silhouette: | **Usuários**",
                value: client.users.size,
                inline: true
            },{
                name: ":signal_strength: | **Ping**",
                value: `${Math.round(client.ping)}ms`,
                inline: true
            },{
                name: ":electric_plug: | **Uptime do Bot**",
                value: os.processUptime().toString().toHHMMSS(),
                inline: true
            },{
                name: ":control_knobs: | **Uptime da Máquina**",
                value: sistema.toString().toHHMMSS(),
                inline: true
            }
        ],
        footer: {
            icon_url: msg.author.avatarURL,
            text: `${msg.author.tag}`
        }
    }});
    msg.channel.stopTyping();
}