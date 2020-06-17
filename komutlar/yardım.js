const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Çaybot`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=613729018000310285&scope=bot&permissions=2080767167) | [Destek Sunucsu](https://discord.gg/3ww7gZW) | [Twitch](https://www.twitch.tv/zelfitz)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Çaybot - Yardım`, `:white_small_square: | **ç!anakomutlar**: Sunucunuz için Ayar Komutlarını Gösterir.!\n:white_small_square: | **ç!eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **ç!yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **ç!kullanıcı**: Kullanıcılar için komutlar.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };