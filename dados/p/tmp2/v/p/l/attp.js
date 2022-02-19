//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o texto que eu irei colocar na fig | Exemplo /attp dark`
                
                    api = `https://api.xteam.xyz/attp?file&text=${text}`, // link da api
                   
                   m.reply(`Fazendo sua figurinha...`)
                  await conn.sendFile(m.chat, api, 'stiker.webp', '', m)
 }
handler.help = ['Attp (txt)']
handler.tags = ['figs']
handler.command = /^(attp)$/i
module.exports = handler
