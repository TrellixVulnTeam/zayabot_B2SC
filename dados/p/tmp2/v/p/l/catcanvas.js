      const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
      let fs = require('fs')
      let handler = async (m) => {
          let who
          if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
          else who = m.sender
          let user = global.db.data.users[who]
      let anu = `「 🎨 CANVAS 」
    
✦ */poster*
→ Transformo a foto que você enviou em um poster!
          
✦ */joke*
→ Sabe aquela pessoa sem graça? Pois é, mande a foto dela aqui e veja.
      
✦ */hitler*
→ Um noticiário com a notícia que a pessoa da foto é pior que ele.
          
✦ */wanted*
→ A pessoa só te dá sumiço? Usa esse comando aqui pra fazer uma figurinha especial pra ela.
          
✦ */12anos*
→ Nem sei como descrever isso KKKKKK
      
✦ */lixo*
→ Vou fazer um meme com a foto, com participação do nosso amigo Peter Parker!
          
✦ */circulo*
→ Deixarei sua foto em formato de círculo
          
✦ */inverter*
→ Vou inverter as cores da foto, colocando-a em negativo.
      
✦ */desfoque*
→ Vou deixar sua foto desfocada!
      
✦ */cinza*
→ Transforma sua foto em preto e branco.
          
✦ */sepia*
→ Vou deixar a foto com uma coloração mais envelhecida
      
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
      handler.command = /^(catcanvas)$/i
      
      module.exports = handler
      
      

      
      