const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = (".");
bot.login(process.env.TOKEN);

bot.on('ready', () =>  {
    console.log("Je suis connecté !")
     bot.user.setActivity("Préparer les clés")
  ;
  
bot.on('message' , message => {
    if (message.channel == message.guild.channels.get("435351843766272010")) {
let channelS = client.channels.get("456130473593405440");
var content = message.content
channelS.send(`${content}`)
}})})
