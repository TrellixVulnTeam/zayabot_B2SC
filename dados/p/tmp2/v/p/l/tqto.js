
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let canal = `
*CANAL DO CRIADOR:*

https://www.youtube.com/channel/UCcNXUT8f4grmNxQCxiZX95Q
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: canal,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./dados/imagens/canal.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Link Direto',
               url: 'https://www.youtube.com/channel/UCcNXUT8f4grmNxQCxiZX95Q'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Voltar Para O Menu',
               id: '/menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['Canal']
handler.tags = ['info']
handler.command = /^(credits|credit|thanks|thanksto|canal)$/i

module.exports = handler
