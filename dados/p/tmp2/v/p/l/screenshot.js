//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o link do site que você deseja receber print | Exemplo /print www.google.com`
                   const res = await axios({
                    method: 'GET',
                    url: `https://mnazria.herokuapp.com/api/screenshotweb?url=${text}`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   m.reply(`Pera aí, vou lá tirar a print.`)
                   conn.sendFile(m.chat, res.data.gambar, '', 'Aqui oh!', m) //enviando img
 }
handler.help = ['Print (site)']
handler.tags = ['cs']
handler.command = /^(print)$/i
module.exports = handler
