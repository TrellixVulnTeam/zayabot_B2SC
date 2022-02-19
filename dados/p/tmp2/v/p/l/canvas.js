//case montada por dark deixe os creditos (bglh chato de se fazer)
const { sticker1, sticker5 } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const darklindo = `dappakntlll`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''


    if (comando == "poster") {
    if (!mime) throw 'Marque uma imagem com /poster, ou use /poster na legenda de uma imagem.'
    let media = await q.download()
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
    let link = await (isTele ? uploadImage : uploadFile)(media)
    m.reply('Colando o poster...')
    const imagem = `https://leyscoders-api.herokuapp.com/api/img/picture?url=${link}&apikey=${darklindo}`
            conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
    }

    if (comando == "joke") {
        if (!mime) throw 'Marque uma imagem com /joke, ou use /joke na legenda de uma imagem.'
        let media = await q.download()
        let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
        let link = await (isTele ? uploadImage : uploadFile)(media)
        m.reply('Editando...')
        const imagem = `https://leyscoders-api.herokuapp.com/api/img/joke?url=${link}&apikey=${darklindo}`
                conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
        }

        if (comando == "hitler") {
            if (!mime) throw 'Marque uma imagem com /hitler, ou use /hitler na legenda de uma imagem.'
            let media = await q.download()
            let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
            let link = await (isTele ? uploadImage : uploadFile)(media)
            m.reply('Pior que hitler?')
            const imagem = `https://leyscoders-api.herokuapp.com/api/img/hitler?url=${link}&apikey=${darklindo}`
                    conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
            }

            if (comando == "wanted") {
                if (!mime) throw 'Marque uma imagem com /wanted, ou use /wanted na legenda de uma imagem.'
                let media = await q.download()
                let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                let link = await (isTele ? uploadImage : uploadFile)(media)
                m.reply('Procurado!')
                const imagem = `https://leyscoders-api.herokuapp.com/api/img/wanted?url=${link}&apikey=${darklindo}`
                        conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
                }

                if (comando == "cinza") {
                    if (!mime) throw 'Marque uma imagem com /greyscale, ou use /greyscale na legenda de uma imagem.'
                    let media = await q.download()
                    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                    let link = await (isTele ? uploadImage : uploadFile)(media)
                    m.reply('Deixei tudo mais acinzentado')
                    const imagem = `https://leyscoders-api.herokuapp.com/api/img/greyscale?url=${link}&apikey=${darklindo}`
                            conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
                    }

                    if (comando == "lixo") {
                        if (!mime) throw 'Marque uma imagem com /lixo, ou use /lixo na legenda de uma imagem.'
                        let media = await q.download()
                        let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                        let link = await (isTele ? uploadImage : uploadFile)(media)
                        m.reply('Não esqueça seus óculos Peter Parker...')
                        const imagem = `https://leyscoders-api.herokuapp.com/api/img/trash?url=${link}&apikey=${darklindo}`
                                conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
                        }

                        if (comando == "circulo") {
                            if (!mime) throw 'Marque uma imagem com /circulo, ou use /circulo na legenda de uma imagem.'
                            let media = await q.download()
                            let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                            let link = await (isTele ? uploadImage : uploadFile)(media)
                            m.reply('Arredondando...')
                            const imagem = `https://leyscoders-api.herokuapp.com/api/img/circle?url=${link}&apikey=${darklindo}`
                                    conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
                            }

                            if (comando == "desfoque") {
                                if (!mime) throw 'Marque uma imagem com /blur, ou use /blur na legenda de uma imagem.'
                                let media = await q.download()
                                let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                                let link = await (isTele ? uploadImage : uploadFile)(media)
                                m.reply('Desfocando...')
                                const imagem = `https://leyscoders-api.herokuapp.com/api/img/blur?url=${link}&apikey=${darklindo}`
                                        conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
                                }

                                if (comando == "sepia") {
                                    if (!mime) throw 'Marque uma imagem com /sepia, ou use /sepia na legenda de uma imagem.'
                                    let media = await q.download()
                                    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                                    let link = await (isTele ? uploadImage : uploadFile)(media)
                                    m.reply('Como nos velhos tempos...')
                                    const imagem = `https://leyscoders-api.herokuapp.com/api/img/sepia?url=${link}&apikey=${darklindo}`
                                            conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
                                    }

                                    if (comando == "inverter") {
                                        if (!mime) throw 'Marque uma imagem com /inverter, ou use /inverter na legenda de uma imagem.'
                                        let media = await q.download()
                                        let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                                        let link = await (isTele ? uploadImage : uploadFile)(media)
                                        m.reply('Espelhando...')
                                        const imagem = `https://leyscoders-api.herokuapp.com/api/img/invert?url=${link}&apikey=${darklindo}`
                                                conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
                                        }

                                        if (comando == "12anos") {
                                            if (!mime) throw 'Marque uma imagem com /12y, ou use /12y na legenda de uma imagem.'
                                            let media = await q.download()
                                            let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                                            let link = await (isTele ? uploadImage : uploadFile)(media)
                                            m.reply('Essa geração Z...')
                                            const imagem = `https://leyscoders-api.herokuapp.com/api/img/affect?url=${link}&apikey=${darklindo}`
                                                    conn.sendFile(m.chat, imagem, 'edit.png', '', m) //enviando img
                                            }
          
}
handler.help = ['Poster','Joke','Hitler','Wanted','Cinza','Lixo','Circulo','Blur','Sepia','Inverter','12y']
handler.tags = ['canvas']
handler.command = /^(poster|joke|hitler|wanted|cinza|lixo|circulo|desfoque|sepia|inverter|12anos)$/i

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))
}