//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o ddd | Exemplo /ddd 18`
                   const res = await axios({
                    method: 'GET',
                    url: `https://brasilapi.com.br/api/ddd/v1/${text}`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   m.reply(`Processando os dados, aguarde...`)
                   dddlist = `Lista de Cidades de ${res.data.state} com este DDD ${text}>\n\n`
                   for (let i = 0; i < res.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${res.data.cities[i]}*\n` }
m.reply(dddlist)
 }
handler.help = ['Ddd (ddd)']
handler.tags = ['cs']
handler.command = /^(ddd)$/i
module.exports = handler
