const Discord = require('discord.js');
exports.run = function(client, message, args) {
      var errembed = new Discord.RichEmbed()
             .setColor("RED")
          .addField(`<a:4729_thisl:573889670535184394> Minecraft Sunucusu ArcheNetwork İp Adresi <a:4745_thisr:573889679011741706>`, 
`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
\n✔      <a:mysticAnimated_4911:573913224144093213>  Play.ArcheNetwork.com  <a:mysticAnimated_4911:573913224144093213>
\n✔      <a:mysticAnimated_4911:573913224144093213>  https://archenetwork.com  <a:mysticAnimated_4911:573913224144093213>
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
👑 👑 <a:rainbowpartner:573924384025346051> **HEMEN ARAMIZA KATIL** <a:rainbowpartner:573924384025346051> 👑 👑

⚙️ ⚔️ <a:6865_AOL:573950872711594004>  Sunucu Sürümü  1.8 - 1.14 <a:6865_AOL:573950872711594004> ⚔️ ⚙️
`

);
  message.channel.send(errembed).then(msg => msg.delete(30000));
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ıp", "İP", "IP"],
  permLevel: 0
};

module.exports.help = {
  name: 'ip',
  description: '',
  usage: 'ip'
};
