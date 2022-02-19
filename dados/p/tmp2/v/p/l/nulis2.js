//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text, fs }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
    const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    
    m.reply('Vou escrever no caderno e te enviar foto, espera um pouquinho.')

    if (comando == "nulis") {
    if (!text) throw `Digite o texto | Exemplo: /nulis dark`

                   api = `https://hadi-api.herokuapp.com/api/canvas/nulis?text=${text}`
                   conn.sendFile(m.chat, api, '', `${text}`, m) //enviando img
    }

    if (comando == "nulis2") {
        if (!text) throw `Digite o texto | Exemplo: /nulis2 dark`

        api = `https://hadi-api.herokuapp.com/api/canvas/nulis2?text=${text}`
        conn.sendFile(m.chat, api, '', `${text}`, m) //enviando img
    }
 }
handler.help = ['Nulis (txt)','Nulis2 (txt)']
handler.tags = ['transformar','canvas']
handler.command = /^(nulis|nulis2)$/i
module.exports = handler
