const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply(',Ve Aleyküm Selam Kardeşim Allahın Rahmeti Ve Bereketi Üzerine Olsun.:mosque::kaaba:');
  }
});

client.on("ready", async () => {
  
client.user.setActivity("a!yardım - play.archenetwork.com",  { type: "WATCHING"});
  
})


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot nasılsın') {
    msg.reply('İyiyim seni sormalı :heart:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bende iyiyim') {
    msg.reply('oo çok iyi :D');
  }
});

client.on('message', msg => {
  if (msg.content === 'sg') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content === 'amk') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'anan') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content === '<@529698755734274090>') {
   msg.delete(30)
    msg.reply('Sahibimi etiketleyemezsin!');
  }
});

client.on('message', msg => {
  if (msg.content === 'pic') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'a n a n') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'sik') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'sikik') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'anani') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'anan domaltıp') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'ebeni') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'sülalen') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'a m k') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'şerefsiz') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});



client.on('message', msg => {
  if (msg.content === 'siktiğimin') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});



client.on('message', msg => {
  if (msg.content === 'neneni') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});



client.on('message', msg => {
  if (msg.content === 'ebesini') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'dedeni') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'sokuklar') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'p i ç') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'oruspu') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'cocuğu') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'ebesiz') {
   msg.delete(30)
    msg.reply('Küfür Etmemelisin!');
  }
});


client.on('message', msg => {
  if (msg.content === 'discord') {
   msg.delete(30)
    msg.reply('Reklam Yapma !');
  }
});


client.on('message', msg => {
  if (msg.content === '.com') {
   msg.delete(30)
    msg.reply('Reklam Yapma');
  }
});



client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler ${message.guild.name}! Başarıyla **${sayac[message.guild.id].sayi}** kullanıcıya ulaştık! Sayaç sıfırlandı!`)
                .setColor(ayarlar.renk)
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})

client.on("guildMemberAdd", async member => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    const channel = member.guild.channels.find("id", `client.ayarlar.id`)
    channel.send(`**${member.user.tag}** Katıldı 😎 **${sayac[member.guild.id].sayi}** olmamıza son **${sayac[member.guild.id].sayi - member.guild.members.size}** üye kaldı!`)
})



client.login(ayarlar.token);
