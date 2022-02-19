const { sticker1, sticker5 } = require('../lib/sticker')

let handler = async (m, { conn }) => {
    let stiker = false
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (/webp/.test(mime)) {
            let img = await q.download()
            if (!img) throw `Marque uma figurinha`
            stiker = await sticker5(img, false, packname, author)
        } else if (/image/.test(mime)) {
            let img = await q.download()
            if (!img) throw `Marque uma imagem`
            stiker = await sticker5(img, false, packname, author)
        } else if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 11) return m.reply('No maximo 10 segundos!')
            let img = await q.download()
            if (!img) throw `Marque um video`
            stiker = await sticker5(img, false, packname, author)
        } else if (m.quoted.text) {
            if (isUrl(m.quoted.text)) stiker = await sticker(false, m.quoted.text, packname, author)
            else throw 'url invalido, tem q terminar com jpg/gif/png'
        }
    } catch (e) {
        throw e
    }
    finally {
        if (stiker) {
          m.reply('✅ Entendi, fazendo sua figurinha...')
            await conn.sendFile(m.chat, stiker, 'stiker.webp', '', m)
        }
        else {

            throw 0
        }
    }
}
handler.help = ['F','Figu','Fig']
handler.tags = ['figs']
handler.command = /^(stiker|s|sticker|f|figu|fig)$/i

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))
}