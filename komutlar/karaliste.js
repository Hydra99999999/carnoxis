const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
 if(message.author.id !== "477050335685509124") if(message.author.id !== "477050335685509124") return message.channel.send("hoop bilader sahip komutu bu");
  let user = args[0]
      let sebep = args.slice(1).join(' ')
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("<a:twitchbit:793899916614828062> Karalisteye almak istediğin kullanıcının id sini yaz!")
    message.channel.send({embed: e})
    return;
  };
  if(!sebep){
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("<a:twitchbit:793899916614828062> Lütfen karalisteye almak için bir sebep belirtin!")
    message.channel.send({embed: e})
    return;
  }
  
  
  db.set(`karalist_${user}`, "aktif")
  db.set(`sebep_${user}`, sebep)
  
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<a:twitchbit:793899916614828062> <@${user}> adlı kullanıcı başarıyla **${sebep}** sebebiyle karalisteye alındı!`)
    message.channel.send({embed: embed})
  const westrabumm = new Discord.MessageEmbed()
  .setColor("RED")
  .setFooter("Carnoxis")
  .setTimestamp()
  .setDescription(`<a:twitchbit:793899916614828062> <@${message.author.id}> adlı yetkilimiz tarafından karalisteye alındın! Artık Carnoxis'nin komutlarını kullanamazsın. Karalisteye alınma sebebin: **${sebep}**`)
  if (client.users.cache.get(user).send(westrabumm)){
  } else return
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 0
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};