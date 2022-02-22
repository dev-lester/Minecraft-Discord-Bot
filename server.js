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
					.setTitle('SPIELER NABE Minecraft server status')
					.addField('Description', 'Welcome to SPIELER NABE smp mga bobo')
					.addField('Server IP', 'wag mahihiyang mag tanong kay Lester!')
					.addField('Port', response.port)
					.addField('Server Version', response.version)
					.addField('Online Players', response.onlinePlayers)
					.addField('Max Players', response.maxPlayers)
				message.channel.send(Embed);

				console.error({response});
			})
			.catch((error) => {
				console.error(error);
			});
		break;

	case 'mc-homies':
		ping.status(ipAdress)
		.then((response) => {
			const Embed = new Discord.MessageEmbed()
				.setTitle('SPIELER NABE Minecraft members')
				.addField('Members', response.rawResponse.players.sample.map.name)
			message.channel.send(Embed);
			console.log(response.rawResponse.players);

		})
		.catch((error) => {
			const Embed = new Discord.MessageEmbed()
				.addField(error)
			message.channel.send(Embed);
			console.error(error);
		});
		break;
	}
});

client.login(token);

