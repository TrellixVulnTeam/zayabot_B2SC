let handler = async (m, { text, usedPrefix }) => {
    let salah = `Opções disponíveis\n\npedra, papel, tesoura\n\n*Exemplo:* ${usedPrefix}jokenpo tesoura`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'pedra'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tesoura'
    } else {
        astro = 'papel'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`EMPATE!\n\nVocê e eu escolhemos *${text}*!`)
    } else if (text == 'pedra') {
        if (astro == 'tesoura') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Droga, *você ganhou!*\n\n Eu acabei escolhendo ${astro}!`)
        } else {
            m.reply(`Você foi derrotado!\n\nEscolhi *${astro}*`)
        }
    } else if (text == 'tesoura') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Você acabou com meu papel... *PARABÉNS!*\n\nEu escolhi ${astro}!`)
        } else {
            m.reply(`Eu quebrei sua tesoura!\n\n Minha escolha foi *${astro}*!`)
        }
    } else if (text == 'papel') {
        if (astro == 'pedra') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`*Você ganhou!* \n\nDroga, escolhi ${astro}!`)
        } else {
            m.reply(`Cortei seu papel!\n\nEscolhi *${astro}!*`)
        }
    } else {
        throw salah
    }
}
handler.help = ['Jokenpo']
handler.tags = ['game']
handler.command = /^(jokenpo)$/i

module.exports = handler
