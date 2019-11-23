const discord = require('discord.js')
var database = require('../database.js')

module.exports.run = async (bot, message, args) => {
    let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author; 

    database.Users.findOne({
        '_id': member.id 
    }, function (erro, user) {
        if(user) {
            if(member) {
                var embed = new discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL)
                .setTitle(`Perfil  📂`)
                .addField(`🎈 || Nick:`, `\`${member.username}\``)
                .addField(`🎈 || ID do usuário:`, `\`${member.id}\``)
                .addField(`💰 || Coins:`, `\`${Number(user.coins).toLocaleString()} coins\``)
                .setFooter(message.author.username, message.author.avatarURL)
                .setTimestamp()
                .setThumbnail(bot.user.avatarURL)
                message.channel.send(embed)
            } else if(member.id === "589649850489110538") {
                message.channel.send(`:x: || Esse usuário sou eu, kkkk. Eu sou apenas um bot, não tenho perfil!`)
            }
        } else {
            message.channel.send(`:x: || Ixii, deu um erro. :confused:`)
        }
    })
}

module.exports.config = {
    name: "profile",
    aliases: ["perfil"]
}