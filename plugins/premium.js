let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│
│
│ > Harga :
│• 5K / (Permanen)
│
│ > Pembayaran :
│• TRI : 62895612153565
│• DANA/GOPAY : 62895612153565
│• Saweria: https://saweria.co/Mikubot
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Minat?*\n*Jika Minat Silahkan Ketik #owner*', 'status@broadcast')
} 
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^(premium)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler