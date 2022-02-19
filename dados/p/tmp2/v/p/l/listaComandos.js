const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `Você poderá acessar aqui diretamente usando:

✦ */comandos*

*ESCOLHA UMA CATEGORIA*
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./arquivos/imagens/menu/comandos.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             quickReplyButton: {
               displayText: '🔨 Ferramentas',
               id: '/catferramentas'
             }

           },
               {
             quickReplyButton: {
               displayText: '📸 Imagens',
               id: '/catimagens',
             }
           },
           
           {
            quickReplyButton: {
              displayText: '🎨 Canvas',
              id: '/catcanvas',
            }
          },
          {
            quickReplyButton: {
              displayText: '🖥️ Voltar ao menu',
              id: '/menu',
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
handler.command = /^(comandos)$/i

module.exports = handler