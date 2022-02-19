let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`Há ${totalreg} pessoas registradas no BOT! Obrigado a todos!`)
}
handler.help = ['Usuarios']
handler.tags = ['info']
handler.command = /^(usuarios)$/i
module.exports = handler

handler.owner = true
handler.admin = true