      const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
      let fs = require('fs')
      let handler = async (m) => {
          let who
          if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
          else who = m.sender
          let user = global.db.data.users[who]
      let anu = `「 📸 IMAGENS 」
   
✦ */nulis* (texto)
✦ */nulis2* (texto)
→ Vou te enviar uma foto com seu texto escrito numa folha de caderno!
          
✦ */gimage* (texto)
→ Posso encontrar imagens no Google para você!
          
✦ */pin* (texto)
→ Te envio imagens sobre o que você pediu diretamente do Pinterest!
      
✦ */print* (site)
→ Posso te enviar print do site que você solicitou. Exemplo: /print google.com
      `
           const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
           templateMessage: {
               hydratedTemplate: {
                 hydratedContentText: anu,
                 locationMessage: { 
                 jpegThumbnail: fs.readFileSync('./arquivos/imagens/menu/figurinhas.jpg') }, 
                 hydratedFooterText: wm,
                 hydratedButtons: [{
                   quickReplyButton: {
                     displayText: '🖥️ Voltar ao menu',
                     id: '/menu'
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
      handler.command = /^(catimagens)$/i
      
      module.exports = handler
      