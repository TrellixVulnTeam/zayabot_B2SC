//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
    const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const darklindo = `dappakntlll`

if (comando == "mscrandom") {
    const musicGenres = require("music-genres");
const mscapi = musicGenres.getAllGenres();
console.log(mscapi)
m.reply('Coletando informações de generos musicais e escolhendo uma musica aleatoria com base em seus gostos.')
const randomUrlGen = require("random-youtube-music-video");
const youtubeUrl = await randomUrlGen.getRandomMusicVideoUrl();
const res = await axios({
    method: 'GET',
    url: `https://hadi-api.herokuapp.com/api/yt2/audio?url=${youtubeUrl}`,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
    },
})
legenda = `Que tal essa? *${res.data.result.title}*`
conn.sendFile(m.chat, res.data.result.thumb, '', legenda, m) //enviando img
conn.sendFile(m.chat, res.data.result.download_audio) //enviando audio
    
    }


 }
handler.help = ['Mscrandom']
handler.tags = ['nsfw']
handler.command = /^(mscrandom)$/i
module.exports = handler
