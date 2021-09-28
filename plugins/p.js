let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, participants }) => {
    let users = participants.map(u => u.jid)
let dsh = fs.readFileSync('./Audio/hai.opus')
conn.reply(m.chat, 'Ketik #menu untuk melihat menu bot', 'conversation', { quoted: m, contextInfo: { externalAdReply :{
mediaUrl: 'https://wa.me/62895603352610',
mediaType: 2,
title: 'Johannes',
body: 'Ｙｕｋｉ亭 By @Johannes',
thumbnailUrl: 'https://i.ibb.co/TYBsTsV/1890eb474e10.jpg',
}}}) 
conn.sendMessage(m.chat, dsh, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true}, { mentionedJid: users})
}

handler.customPrefix = /^(p|P)?$/i
handler.command = new RegExp

module.exports = handler