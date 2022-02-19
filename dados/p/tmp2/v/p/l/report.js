let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Encontrou uma falha? Relate-o usando este comando\n\n*Exemplo*:\n${usedPrefix + command} o comando "X" não está funcionando!`
    if (text.length < 10) throw `O relatório é muito curto. Escreve mais um pouquinho pra ajudar meus desenvolvedores!`
    if (text.length > 1000) throw `Poxa, o relatório é muito longo! Envie no máximo de 1000 caracteres!`
    let teks = `*${command.toUpperCase()}!*\n\nEnviado por: *@${m.sender.split`@`[0]}*\n\n*Mensagem*:\n${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })

    let teks2 = `*${command.toUpperCase()}!*\n\nEnviado por: *@${m.sender.split`@`[0]}*\n\n*Mensagem*:\n${text}\n`
    conn.reply(global.admin[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })

    m.reply(`Mensagem enviada aos desenvolvedores.
Agradeçemos pela contribuição!`)
}
handler.help = ['Reportar'].map(v => v + '(texto)')
handler.tags = ['info']
handler.command = /^(reportar|request)$/i
module.exports = handler
