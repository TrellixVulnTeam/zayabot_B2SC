//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
    const { base64encode, base64decode } = require('nodejs-base64');
    if (!text) throw `Cade o texto? | Use assim: /Decode (seu texto) `




    let decoded = base64decode(text); // "hey there"
    console.log(decoded)
    m.reply(`Texto '${text}' desencriptado com sucesso:\n\n*${decoded}*`)



}
handler.help = ['Decode (texto)']
handler.tags = ['tools']
handler.command = /^(decode|desencriptar)$/i
module.exports = handler
