const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    message.delete()
    if(!message.member.roles.some(r=> ["CEO 🔮", "Millie Lover ❤️", "Mike Lover 💙", "Moderador 💼"].includes(r.name)) ) {
        return message.reply(` você não tem permissão para isso!`)
    }

  let logs = message.guild.channels.find("name", "banimentos");
  if(!logs) return message.channel.send("Não foi achado o canal banimentos!");

  let user = message.mentions.users.first();
  if(!user) return message.reply("Favor, citar um usuário!");

  let reason = args.join(" ");
  if(!reason) reason = "No reason!";

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed()
    .setAuthor(`Portal fechado!`, bot.user.avatarURL)
    .setDescription(`O usuário ${user} foi banido por ${message.author.username}!`)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
  
  logs.send(logsEmbed);
}

module.exports.config = {
    name: 'ban',
    aliases: ['punish']
}