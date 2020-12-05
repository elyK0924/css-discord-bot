const Discord = require('discord.js');  // import DiscordJS using the require() method
const {prefix, token} = require('./config.json');
const client = new Discord.Client();    // create a Discord client for the bot to use

// when the client is ready, print "ready" to the console
client.once('ready', () => {
	console.log('Ready!');
	console.log(prefix, token);
});

// log your bot in to Discord using its unique token
client.login(token);
client.on('message', message => {
	//If the message is from a bot, ignore.
	if(message.author.bot || !message.content.startsWith(prefix)){	return;	}

	let args = message.content.slice(prefix.length).trim().split(/ +/);
	let command = args.shift().toLowerCase();

	console.log(message.content); //this is the message we are sending!
	
	if(command === 'beep'){
        message.channel.send('boop!');
	}
	
    else if (command === 'ping'){
        message.channel.send('pong!');
	}
	
})