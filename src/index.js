const { Client } = require('discord.js');
const { scheduleJob } = require('node-schedule');

const { parsed: config } = require('dotenv').config();

const client = new Client();

const table = '0 0 8 * * *';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  if (message.content === 'ping') {
    message.reply('pong!');
    
    scheduleJob(table, () => {
      message.reply('pong!');
    })
  }
});

client.login(config.token);