var database = require('../database.js');

module.exports.run = (bot, message, args) => {
    let razaou = args.slice(0).join(' ')

    database.Users.findOne({
      '_id': message.author.id
    }, function (erro, usuario) {
        if (usuario.isOwner || usuario.isModerator) {
            if (!razaou.length < 1) {
                let banir = message.mentions.users.first() ? message.mentions.users.first() : bot.users.get(args[0])
                    if (banir) {
                        if (banir.id === message.author.id) {
                            message.reply(`<:rejeitado:571140887220846603> || **${message.author.username}**, você não pode se banir de usar o bot.`)
                        } else {
                            database.Users.findOne({
                                '_id': banir.id
                            }, function (arro, alvo) {
                                if (alvo) {
                                    if (alvo.isCeo || alvo.isMillieL) {
                                        message.channel.send(`<:rejeitado:571140887220846603> **${message.author.username}**, este usuário é um ${alvo.owner ? `Patrão` : ''}${alvo.admin ? `Administrador` : ''}${alvo.suporte ? `Suporte` : ''} do bot.`)
                                    } else {
                                        if (alvo.ban) {
                                            alvo.ban = false
                                            alvo.coins = 0
                                            alvo.save()
                                           
                                            message.channel.send(`<:aprovado:571140884092026882> | **${message.author.username}**, ${banir.username} foi desbanido do meu sistema com sucesso!`)
                                        } else {
                                            alvo.ban = true
                                            alvo.coins = 0
                                            alvo.save()
                                           
                                            message.channel.send(`<:aprovado:571140884092026882> | **${message.author.username}**, ${banir.username} foi do meu sistema com sucesso!`)
                                        }
                                    }
                                } else {
                                    message.channel.send(`<:rejeitado:571140887220846603> **${message.author.username}**, infelizmente ocorreu um erro!`);
                                }
                            })
                        }
                    } else {
                        message.channel.send(`<:rejeitado:571140887220846603> **${message.author.username}**, usuário não encontrado.`)
                    }
            } else {
                message.channel.send(`<:rejeitado:571140887220846603> **${message.author.username}**, mencione o usuário ou diga seu ID.`)
            }
        } else {
            message.channel.send(`<:rejeitado:571140887220846603> **${message.author.username}**, você não tem permissão necessária!\nVocê precisa ser da minha equipe antes de usar este comando.`)
        }
    })
}

module.exports.config   = {
    name: 'botban',
    aliases: []
};
