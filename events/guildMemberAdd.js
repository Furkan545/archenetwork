module.exports = member => {
    let username = member.user.username;
    member.send('Sunucuya Hoş Geldin! Kardşim');
    member.guild.defaultChannel.send('giriş-çıkış');
};
