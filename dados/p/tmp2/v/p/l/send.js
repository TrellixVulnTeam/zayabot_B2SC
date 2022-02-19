//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite uma msg`
                  m.reply(`${text}`)
 }
handler.help = ['Send (txt)']
handler.tags = ['info','main']
handler.command = /^(send)$/i
module.exports = handler

handler.owner = true 
handler.admin = true