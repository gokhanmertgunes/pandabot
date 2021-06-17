const Discord = require('discord.js');
const client = new Discord.Client();
const isaret = require("./isaret.json");
const { Client, MessageEmbed } = require('discord.js');

var prefix = isaret.prefix

client.on('ready', () => {
	console.log(`Sunucuya girdi botunuz ${client.user.tag}!`);
	client.user.setActivity('Bakımda - "Gökhan"', { type: 'PLAYING'})
	.then(presence => console.log('Durum --> aktif oldu.'))
	.catch(console.error);
});

client.on('message', msg => {
  if(msg.content.toLowerCase() === 'ping') {
    msg.channel.send('Pong!');
  }
});

client.on('message', msg => {
  if(msg.content.toLowerCase() === 'selam') {
    msg.author.send('Aleyküm Selam Hoşgeldin! :)');
  }
});

client.on('message', msg => {
  if(msg.content.toLowerCase() === prefix + ' ' + 'naber') {
    msg.channel.send('iyidir yavru');
  }
});

client.on('message', msg => {
  if(msg.content.toLowerCase() === 'ananı sikm') {
		msg.delete()
    msg.channel.send('Çok ayıp kanka');
  }
});

client.on('message', msg => {
  if(msg.content.toLowerCase() === 'gökhan') {
		msg.react('😘')
  }
});

client.on('message', msg => {
  if(msg.content.toLowerCase() === prefix + ' ' + 'help') {
		const kanal = new MessageEmbed()

		.setTitle('Panda Blue')
		.setDescription('Yaratıcım -> Gökhan')
		.setAuthor('Gökhan')
		.setColor("RANDOM")
		.setThumbnail('https://cdn.discordapp.com/attachments/855187027499024415/855192943773876274/unknown.png')
		.addField(':zany_face: ' , 'Arkadaşlarınızı Davet etmeyi Unutmayın!');
		msg.channel.send(kanal);
	}
	});

client.login('hidden');
