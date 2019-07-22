const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription(`
	**:grinning: Yardım komutları :grinning:**
	
a!ban ✘ Etiketlediğiniz kişiyi sunucudan yasaklar.
a!sunucubilgi ✘ Sunucunuz hakkında bilgi verir.	
a!mute ✘ Bir oyuncuyu susturur.	
a!kick ✘ Etiketlediğiniz oyuncuyu sunucudan atar.
a!kilit ✘ Bir kanalı süreli kilitler.
a!kullanıcı ✘ Sizin veya etiketlediğiniz kişi hakkında bilgi verir.
	`)
    .setColor("RED")
	
    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bütün yardım komutlarını gösterir.',
  usage: 'yardımet'
};
