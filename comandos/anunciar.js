const discord = require('discord.js')

module.exports.run = async (bot, message, args) =>{
    message.delete()
    if(!message.member.roles.some(r=> ["CEO 🔮", "Millie Lover ❤️", "Mike Lover 💙"].includes(r.name)) ) {
        return message.reply(` você não tem permissão de fazer isso!`)
        
    }
    let mensagem = args.join(' ')
    if(!args[0]) {
        return message.reply(` você não adicionou algo para ser avisado!`)
    }
    var embed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`STCommunity - Anuncio`, bot.user.avatarURL)
    .setDescription(mensagem)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    bot.guilds.get('646833634824814602').channels.get(`646884068293607464`).send('@everyone').then(m =>{
    m.delete(100)
    })
    bot.guilds.get(`646833634824814602`).channels.get(`646884068293607464`).send(embed)
}

module.exports.config = {
    name: 'anuncio',
    aliases: ['anunciar', 'sendbell']
}