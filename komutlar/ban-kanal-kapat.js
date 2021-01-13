  
const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/761314429589258315/762047392651411487/erentr1.jpg').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}ban-kanal-kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

  data.delete(`banlog.${message.guild.id}`);
  message.channel.send(new Discord.MessageEmbed().setTitle('İşte bu kadar!').setDescription(`Ban sistem kanalı başarıyla kapatıldı.`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ban-kanal-kapat'
};