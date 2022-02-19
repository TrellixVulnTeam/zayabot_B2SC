const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `*Precisando de algo?*
Entre em contato conosco!

➠ Encontrou uma falha?
/report (descreva a falha encontrada)

➠ Quer enviar uma sugestão?
/sugerir (conte-nos sua sugestão)

➤ Meus Desenvolvedores:`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./arquivos/imagens/menu/suporte.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             quickReplyButton: {
               displayText: '☁️ Neast',
               id: '/neastdev'
             }

           },
               {
             quickReplyButton: {
               displayText: '🕸️ John',
               id: '/spyderdev',
             }
           },
           
           {
            urlButton: {
              displayText: 'Discord',
              url: 'https://discord.gg/mUGcut9szC',
            }
          }
          
          ]
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
handler.command = /^(suporte)$/i

module.exports = handler