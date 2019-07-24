const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603604892422242306")
setInterval(function() {
channel.send(`ana el ga7d`);
}, 30)
})

client.login(process.env.BOT_TOKEN);