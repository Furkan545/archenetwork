const Discord = require('discord.js');
exports.run = function(client, message, args) {

  message.channel.send('Play.Archenetwork.Com')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ıp","IP","İP","iP"],
  permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'İp adresi.',
  usage: 'ip'
};
