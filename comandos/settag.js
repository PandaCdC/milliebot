const discord = require('discord.js')
var database = require('../database.js')

module.exports.run = async (bot, message, args) =>{
    var user = message.mentions.members.first();
    var roleModerator = message.guild.roles.find('name', '[Μ] ŞΔĐ ĆØΜΜỮŇƗŦ¥ ΜØĐ€ŘΔŦØŘ');
    var roleDarkness = message.guild.roles.find('name', '[Đ] ĐΔŘҜŇ€ŞŞ');
    var roleBlood = message.guild.roles.find('name', '[β] βŁØØĐ');

    switch (args[0]) {
        case 'moderador':
            if (!user) return message.reply(' você precisa mencionar um usuário válido deste servidor!');
            if (user.roles.exists('name', '[Μ] ŞΔĐ ĆØΜΜỮŇƗŦ¥ ΜØĐ€ŘΔŦØŘ')) return message.reply(':eyes: Eu vejo esse cargo neste usuário já!');
            user.addRole(roleModerator).then(() => message.reply('Cargo adicionado')).catch((err) => message.reply('Não é possível adicionar cargo').then(() => console.log(err)));
            break;

        case 'millie':
            if (!user) return message.reply(' você precisa mencionar um usuário válido deste servidor!');
            if (user.roles.exists('name', '[Đ] ĐΔŘҜŇ€ŞŞ')) return message.reply(':eyes: Eu vejo esse cargo neste usuário já!');
            user.addRole(roleDarkness).then(() => message.reply('Cargo adicionado')).catch((err) => message.reply('Não é possível adicionar cargo').then(() => console.log(err)));
            break;

        case 'mike':
            if (!user) return message.reply(' você precisa mencionar um usuário válido deste servidor!');
            if (user.roles.exists('name', '[β] βŁØØĐ')) return message.reply(':eyes: Eu vejo esse cargo neste usuário já!');
            user.addRole(roleBlood).then(() => message.reply('Cargo adicionado')).catch((err) => message.reply('Não é possível adicionar cargo').then(() => console.log(err)));
            break;
        default:
            message.reply('Bem, você pode adicionar ou remover papéis... **!help**');
     }
    }

module.exports.config = {
    name: "settag",
    aliases: [] 
}