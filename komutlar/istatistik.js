const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.RichEmbed()
   .setThumbnail('https://media.discordapp.net/attachments/611378658375892992/613739768014045312/giphy_foe.gif')
  .setColor('RANDOM')
  .setFooter('FireOfEternity İstatistik Sistemi', bot.user.avatarURL)
  .addField("<a:tamir:709039774127620097> **Botun Yapımcısı :**", "<@316293303274438666>")
  .addField("<a:ucan:720068309566881882> **Botun Geliştiricisi :**", "<@316293303274438666>")
  .addField("<a:ates:708981465756467250> **Ram kullanımı :**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("<a:AyarGif:703237131799232600> **Çalışma süresi :**", seksizaman)
  .addField("<a:sa:702949255295402095> **Kullanıcı Sayısı :**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("<a:ss:708999316395524129> **Sunucu Sayısı :**", bot.guilds.size.toLocaleString(), true)
  .addField("<a:alev:708999161021857842> **Kanal Sayısı :**", bot.channels.size.toLocaleString(), true)
  .addField("<a:discord:665607381597552691> **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("<a:zz:720034131437682759> **Ping**", bot.ping+" ms", true)
  .addField("<a:tik:718094162381111377> **Bit**", `\`${os.arch()}\``, true)
  .addField("<a:parlak:708999465368944641> **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**<a:UrlGif:703237126073876839> Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=709101727118393376&scope=bot&permissions=8)", )
  .addField("**<a:UrlGif:703237126073876839> Bota Oy Ver**", " [Oy Ver](https://fireof-eternity.glitch.me/)", )
  .addField("**<a:UrlGif:703237126073876839> Destek Sunucusu**", " [Destek](https://discord.gg/fryRqsf)", )
   return message.channel.send(istatistikler);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'bot'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"

};