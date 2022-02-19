let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) return m.reply('O que você está procurando?')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('ERRO 404')
  conn.sendFile(m.chat, url, 'gimage', `
*── 「 IMAGEM DO GOOGLE 」 ──*
Beleza, achei essa imagem de ${text}, aqui umas informações:

*Largura*: ${width}
*Altura*: ${height}
`.trim(), m)
}
handler.help = ['Imagem (pesquisa)']
handler.tags = ['cs']
handler.command = /^(gimage|imagem)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
