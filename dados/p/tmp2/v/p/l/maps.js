//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Qual Cidade/Estado você gostaria de ver o mapa? | Exemplo /map São Paulo`
                   const res = await axios({
                    method: 'GET',
                    url: `https://mnazria.herokuapp.com/api/maps?search=${text}`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   m.reply(`Me comunicando com os satélites, aguarde...`)
                   conn.sendFile(m.chat, res.data.gambar, '', 'Olha aqui o mapa!', m) //enviando img
 }
handler.help = ['Map (nome)']
handler.tags = ['cs']
handler.command = /^(map)$/i
module.exports = handler
