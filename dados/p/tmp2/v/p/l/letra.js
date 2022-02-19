//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text, fs }) => {
  if (!text) throw `Tá afim de cantar uma música? Posso te mandar a letra dela! | Exemplo: /letra say you wont let go`

                   const res = await axios({
                    method: 'GET',
                    url: `https://leyscoders-api.herokuapp.com/api/lirik?q=${text}&apikey=dappakntlll`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   texto = `${res.data.result}`
                   m.reply(texto)
 }
handler.help = ['Letra (nome)']
handler.tags = ['yt']
handler.command = /^(letra)$/i
module.exports = handler
