const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Lütfen Kullanıcı Gir.");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Süreyi Girmeyi Unuttun! \nsaniye(s), Dakika(m), Saat(h), Gün(d) \#ÖRN; `*mute @kullanıcı 1m`");

  await(tomute.addRole(muterole.id));
  const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
  .setThumbnail('https://images.encyclopediadramatica.rs/thumb/e/e6/MUTE.gif/250px-MUTE.gif')
  .setDescription(`
<a:1230_angear:574298894809432074> ▬ Mute ▬ Susturma ▬ <a:1230_angear:574298894809432074>\n
———————————————
🔇 Susturulan Kullanıcı ➽ <@${tomute.id}>
———————————————
👑 Susturan Yetkili ➽ ${message.author.username}#${message.author.discriminator}    
———————————————
⚠️ Susturma Süresi ➽ ${ms(ms(mutetime))}
———————————————
  `)
  .setFooter(`${message.author.username} | Tarafından kontrol ediliyor...`, message.author.avatarURL)
message.channel.send(embed);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Adlı Kişinin Mutesi Kalktı!`);
  }, ms(mutetime));

//end of module
}
exports.conf = {
    enabled: true,
    aliases: ['sustur'],
    permLevel: 3
};

exports.help = {
    name: 'mute',
    description: 'Çalan şarkı bitince aynı şarkıyı otomatik olarak tekrar oynatır.',
    usage: 'tekrar'
};