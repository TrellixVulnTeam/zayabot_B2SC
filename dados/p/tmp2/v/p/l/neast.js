const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' //
                    + 'VERSION:3.0\n' 
                    + 'N:;neast;;;'
                    + 'FN:neast\n' // 
                    + 'ORG:neast;\n' //
                    + 'TEL;type=CELL;type=VOICE;waid=5511968151484:+55 11 96815-1484\n' // 
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'neast', contacts: [{ vcard }] } }, { quoted: m })
                
}
handler.help = ['Dono']
handler.tags = ['info']

handler.command = /^(neastdev)$/i

module.exports = handler
