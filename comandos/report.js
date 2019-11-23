const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Usuário não encontrado!");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("📞 Novo report")
    .setColor("#ff0000")
    .addField("😑 Usuário: ", `${rUser}`)
    .addField("👮 Reportado por: ", `${message.author}`)
    .addField("📂 Motivo: ", reason)
    .addField("📍 Canal: ", message.channel)
    .addField("⏰ Ás: ", message.createdAt);

    bot.guilds.get('644655693210845186').channels.get(`645097295062368258`).send('@everyone').then(m =>{
        m.delete(100)
        })
    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.config = {
  name: 'report',
  aliases: ['reportar']
}