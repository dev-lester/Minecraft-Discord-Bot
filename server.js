const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am running!');
});

// client.on('message', message => {
// 	if (message.content === `${prefix}ping`) {
// 		// send back "Pong." to the channel the message was sent in
// 		message.channel.send('Pong!');
// 	}
// 	else if (message.content === `${prefix}bark`) {
// 		message.channel.send('Continental Pakyu!');
// 	}
// 	else if (message.content === `${prefix}server`) {
// 		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
// 	}
// 	else if (message.content === `${prefix}info-user`) {
// 		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
// 	}
// });

client.on('message', message =>{
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLocaleLowerCase();
	// ...
	// Using the new `command` variable, this makes it easier to manage!
	// You can switch your other commands to this format as well
	if (command === '!bark') {
		message.channel.send('Continental Pakyu!');
	}
	else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}

});

client.login(token);

