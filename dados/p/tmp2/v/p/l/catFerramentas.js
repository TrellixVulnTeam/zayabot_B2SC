      const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
      let fs = require('fs')
      let handler = async (m) => {
          let who
          if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
          else who = m.sender
          let user = global.db.data.users[who]
      let anu = `「 🔨 FERRAMENTAS 」
    
✦ */ausente* (motivo)
→ Use esse comando quando for ficar um tempo fora do WhatsApp, se alguém responder uma mensagem sua ou mencionar em algum grupo, eu irei avisar que não te incomode. (Você sairá do modo ausente enviando qualquer mensagem na minha DM ou no grupo).
          
✦ */calculadora*
→ Posso fazer cálculos para você, basta digitar o que você quer calcular.
      
✦ */letra* (nome da música)
→ Vou te enviar a letra completa da música que você pediu!
          
✦ */encriptar* (texto)
→ Quer fazer uma mensagem secreta pra um amigo? Utilize esse comando!
          
✦ */decode* (mensagem recebida)
→ Recebeu uma mensagem criptografada do seu amigo? Traduza aqui.
          
✦ */lermais* (mensagem)
→ Use esse comando para fazer uma mensagem com "Ler mais" mesmo sendo texto pequeno.
          
✦ */msginvisivel*
→ Recebe uma mensagem invisível para copiar e colar.
      
✦ */mscrandom*
→ Vou te recomendar uma música aleatória.
      
✦ */map* (cidade)
→ Vou enviar um pequeno mapa da cidade que você solicitou
          
✦ */ddd* (número)
→ Te mostra todas as cidades/estados brasileiros que usam esse DDD.  
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
      handler.command = /^(catferramentas)$/i
      
      module.exports = handler
      