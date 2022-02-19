//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Qual IP você quer ver? | Exemplo /ip 177.47.216.72`
                   const res = await axios({
                    method: 'GET',
                    url: `http://ip-api.com/json/${text}`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   let consulta = ` Hm... encontrei isso aqui:

• *País*: ${res.data.country}
• *Localização*: ${res.data.city} - ${res.data.regionName}
• *CEP*: ${res.data.zip}
• *Lat*: ${res.data.lat}
• *Lon*: ${res.data.lon}
• *Fuso Horário*: ${res.data.timezone}
• *Provedor*: ${res.data.isp}
`
    m.reply(consulta)
 }
handler.help = ['Ip (ip)']
handler.tags = ['cs']
handler.command = /^(ip)$/i
module.exports = handler

handler.owner = true
handler.owner2 = true
