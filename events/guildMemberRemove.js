module.exports = member => {
  let guild = member.guild;
  member.send('Sunucudan Ayrıldı! Bu da beni üzdü');
  guild.defaultChannel.send(`giriş-çıkış`);
};
