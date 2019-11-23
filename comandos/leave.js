const Discord = require('discord.js');

exports.run = async(bot, message, args, ops) => {
    message.delete()
    if(!message.member.roles.some(r=> ["CEO 🔮", "Millie Lover ❤️", "Mike Lover 💙", "Moderador 💼"].includes(r.name)) ) {
        return message.reply(` você não tem permissão de fazer isso!`)
    }

    let target = message.author
    let reason = args.slice(0).join(" ")

    if(message.channel.name !== "staff-cmds") {
        return message.reply(`Você só pode utilizar o comando "!sair" no canal #staff-cmds !`) 
    }

    if(!reason) {
        return message.reply(`Apresente um motivo! ?sair [MOTIVO]`)
    }

    let embedLeave = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Staff Leaving`, bot.user.avatarURL)
    .setDescription(`O membro da equipe ${message.author.username} acabou de se retirar. \n A razão apresentada foi a seguinte: ${reason}.`)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    bot.guilds.get(`646833634824814602`).channels.get(`646888344571346944`).send(embedLeave)
    message.guild.member(target).kick()

}

module.exports.config = {
    name: "leave",
    aliases: ["sair"]
}