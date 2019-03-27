const Discord = require('discord.js')
const kkj = require('knock-knock-jokes')
const { prefix } = require('./config.json')

const client = new Discord.Client()

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    // console.log(message.content)

    if (message.content.startsWith(`${prefix}joke`)) {
        message.channel.send(kkj())
    }
})

client.login(process.env.TOKEN)