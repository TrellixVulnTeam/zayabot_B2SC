const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Nenhuma mídia encontrada'
  let media = await q.download()

   let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    //fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = ran
                   // dark.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    conn.sendFile(m.chat, buffer, '', '', m)
                   // fs.unlinkSync(ran)
                })
}
handler.help = ['Tourl (Marque uma img)']
handler.tags = ['transformar']
handler.command = /^(toimg|tourl)$/i

module.exports = handler

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
