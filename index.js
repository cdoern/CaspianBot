const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
    console.log('ready!');
})

client.on('message', message => {
    if(message.content === `${prefix}ping`){
        message.channel.send("pong");
    }
})

client.login(`${token}`);
