const discord = require('discord.js')

module.exports.run = async (bot, message, args) =>{
    message.delete()
    
    var embed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("📌 Lista da equipe:", bot.user.avatarURL)
    .setDescription("📌Lista da equipe de moderação: \n \n 🔮 CEO: \n 🔮 Panda \n\n ❤️ Millie Lover: \n ❤️ Marina \n\n 💙 Mike Lover: \n 💙 VAGA \n\n  ♛ Moderador: \n ♛ Texugo \n\n 🔨 Programador: \n 🔨 Panda")
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    message.channel.send(embed)
}

module.exports.config = {
    name: 'staff',
    aliases: ['stafflist', 'equipe', 'staf']
}