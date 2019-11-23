const discord = require('discord.js');
var database = require('../database.js');

module.exports.run = async (bot, message, args) => {
    database.Users.findOne({
        '_id': message.author.id
    }, function (err, user) {
        if(user) {
            if(user.isCeo) {
                try {
                    let codein = args.join(" ");
                    let code = eval(codein);
                
                    if (typeof code !== 'string')
                        code = require('util').inspect(code, { depth: 0 });
                    message.channel.send(`\`\`\`js\n${code}\n\`\`\``)
                } catch(e) {
                    message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
                }
            } else {
                var embed = new discord.RichEmbed()
                .setColor("ff0000")
                .setAuthor(`Permission - Rejection`, bot.user.avatarURL)
                .setDescription(`Você não tem permissão de realizar esse ato!`)
                .setFooter(message.author.username, message.author.avatarURL)
                .setTimestamp()
                .setThumbnail(bot.user.avatarURL)
                message.channel.send(embed)
            }
        }
    })
}

/*try {
        let codein = args.join(" ");
        let code = eval(codein);
    
        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        message.channel.send(`\`\`\`js\n${code}\n\`\`\``)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
*/
module.exports.config = {
    name: 'boteval',
    aliases: ['eval']
}