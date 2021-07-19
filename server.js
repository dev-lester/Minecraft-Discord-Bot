const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');
const { prefix } = require('./config.json');
const token = process.env.DISCORD_TOKEN;
const client = new Discord.Client();

const ping = require('minecraft-server-util');

client.on('ready', () => {
	console.log('I am running!');
});

client.on('message', message => {
	const args = message.content.substring(prefix.length).split(/ +/);
	const ipAdress = process.env.MINECRAFT_IP_ADRESS;

	switch(args[0]) {
	case 'mc':
		ping.status(ipAdress)
			.then((response) => {
				const Embed = new Discord.MessageEmbed()
					.setTitle('Server Status')
					.addField('Description', response.description)
					.addField('Server IP', 'Please ask permission to boss lestaH!')
					.addField('Port', response.port)
					.addField('Server Version', response.version)
					.addField('Online Players', response.onlinePlayers)
					.addField('Max Players', response.maxPlayers);

				message.channel.send(Embed);

			})
			.catch((error) => {
				console.error(error);
			});
		break;
	case 'malas':
		message.channel.send('RAINIEL APOSTOL VILLANUEVA');
		break;
	}
});

client.login(token);

