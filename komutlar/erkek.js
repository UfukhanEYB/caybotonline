const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send(":x: Bir İsim Yazmalısın!");
  member.setNickname(`${isim}`);
  member.removeRole('718221343744851998')
  member.addRole('717957657398345798')
const embed = new Discord.RichEmbed()


      .addField(`**🏷 Çay Şekeri Kayıt 🏷**`,
      `\n**🔸️Kayıt Edilen Kullanıcı:** ${member.user} \n🔸️**Kayıt Eden Yetkili:** \`${message.author.username}\``)
client.channels.get('718127785213689955').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e", "erkek"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "Çay Şekeri Kayıt Sistemi",
  usage: "Çay Şekeri Kayıt Sistemi"
};