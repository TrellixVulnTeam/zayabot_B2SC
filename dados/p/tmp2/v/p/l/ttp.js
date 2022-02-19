//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const { sticker1, sticker5 } = require('../lib/sticker')
const axios = require('axios')
var imgbb = require('imgbb-uploader')
const { exec, spawn } = require('child_process');
getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o texto que eu irei colocar na fig | Exemplo /attp dark`
                    anu1 = `https://api.xteam.xyz/ttp?file&text=${text}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                   const figs = exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                
                    conn.sendFile(m.chat, figs, 'stiker.webp', '', m)
                    });
}
               
handler.help = ['Ttp (txt)']
handler.tags = ['figs']
handler.command = /^(ttp)$/i
module.exports = handler
