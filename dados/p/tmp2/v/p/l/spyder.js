const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' //
                    + 'VERSION:3.0\n' 
                    + 'N:;spyder;;;'
                    + 'FN:spyder\n' // 
                    + 'ORG:spyder;\n' //
                    + 'TEL;type=CELL;type=VOICE;waid=5511980761189:+55 11 98076-1189\n' // 
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'spyder', contacts: [{ vcard }] } }, { quoted: m })
                
}
handler.help = ['Dono']
handler.tags = ['info']

handler.command = /^(spyderdev)$/i

module.exports = handler
