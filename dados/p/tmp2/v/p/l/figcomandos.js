const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `Para que você não fique perdido(a), coloquei a explicação do que cada um faz logo abaixo.

✦ */attp* (texto)
→ Cria uma figurinha colorida com o texto que você digitou.

✦ */f* | */fig* | */figu*
→ Envie uma foto com essa mensagem ou 'responda' uma imagem com esse comando para criar uma figurinha.

✦ */figanimada*
→ Envie um gif ou vídeo de até 5s que vou criar uma figurinha animada para

⚠️ Comando em desenvolvimento.
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
               displayText: '⌨ Voltar ao menu',
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
handler.command = /^(figcomandos)$/i

module.exports = handler