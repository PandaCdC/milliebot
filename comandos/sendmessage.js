const discord = require('discord.js')

module.exports.run = async (bot, message, args) =>{
    message.delete()
    if(!message.member.roles.some(r=> ["CEO 🔮"].includes(r.name)) ) {
        return message.reply(` você não tem permissão de fazer isso!`)   
    }

    let target = message.guild.member(message.mentions.users.first());
    let dmMessage = args.join(' ')
    if(!args[1]) {
        return message.reply(` coloque uma mensagem!`)
    }
    var dmEmbed = new discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`SadCommunity - DM`, bot.user.avatarURL)
    .setDescription(dmMessage)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    target.send(dmEmbed)

    return message.channel.send(`${message.author.username} acabou de mandar uma mensagem via BOT para a DM de ${target}`)
}

module.exports.config = {
    name: 'dm',
    aliases: ['direct', 'botdm']
}