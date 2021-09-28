let fs = require ('fs')
let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  conn.send2Button(m.chat, ` *「 AFK MODE 」*\n\n▷ User Name : ${conn.getName(m.sender)}\n▷ Alasan : ${text ? '' + text : ''}`, 'Mode Afk Berhasil Di Aktifkan', 'ok', 'ok', 'ok', 'ok', { quoted: m, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply :{
mediaUrl: 'https://chat.whatsapp.com/DiONDfscH1PLqnl2LGpGwa',
mediaType: 2,
title: 'Mode Afk',
body: 'Berhasil Di Aktifkan',
thumbnailUrl: 'https://i.ibb.co/ZfKJ485/e9605daf4a4a.jpg',
}}})
}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
