const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
    if(!message.member.roles.some(r=> ["CEO 🔮", "Millie Lover ❤️", "Mike Lover 💙", "Moderador 💼"].includes(r.name)) ) {
        return message.reply(` você não tem permissão para isso!`)
    }
  
  if(!args[0]) 
  return message.channel.send("Coloque o número de mensagens a serem apagadas (de 1 á 2000)!");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} mensagens apagadas.`).then(msg => msg.delete(2000));
});

}

module.exports.config = {
  name: "clear",
  aliases: ["cc"]
}