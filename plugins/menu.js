/*
   RECODE By JOHANNES
   CREATOR [ NURUTOMO ]
*/

//========== BATASSS NGABBB ==========//

let { performance } = require('perf_hooks')
const { createHash } = require('crypto') 
let util = require('util')
let fetch = require('node-fetch');
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
const uploadImage = require('../lib/uploadImage')
let PhoneNumber = require('awesome-phonenumber')
let fs = require ('fs')
let path = require('path')

//========== BATASSS NGABBB ==========//

let handler  = async (m, { conn, usedPrefix: _p }) => {

let neww = performance.now()
let old = performance.now()
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
let gambar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'  	
pp = await conn.getProfilePicture(who)

  let user = global.DATABASE._data.users[m.sender]
const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi 🌄'

				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'


				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
 const ftoko = { key : { fromMe: false, participant : `0@s.whatsapp.net` },message: {orderMessage: { message: `${ucapanWaktu}`,thumbnail: fs.readFileSync("./src/milf.jpeg")}}}
const ftroli = {
	                  key : {
		                        fromMe: false,
                                participant : '0@s.whatsapp.net',
                                remoteJid: 'status@broadcast'
                               },
                    message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: "Halo Kak 👋",
                            orderTitle: "YUKIBOT",
                            thumbnail: fs.readFileSync("./src/logo.jpg"),
                            sellerJid: '0@s.whatsapp.net'
                        }
                }
          }

let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))

    let { exp, limit, level, role, age, money, registered, healt, coin, tigame, premium, } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.DATABASE.data.users[m.sender].name : conn.getName(m.sender)
    let sn = createHash('md5').update(m.sender).digest('hex')
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let battery = ['100','99','98','97','96','95','94','93','92','91','90','89','88','87','86','85','84','83','82','81','80','79','78','77','76','75','74','73','72','71','70','69','68','67','66','65','64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'][Math.floor(((d * 1) + gmt) / 8460) % 100]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const ultah = new Date('March 28, 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let totalgc = Object.keys(global.DATABASE._data.chats).length
    let totalsend = global.DATABASE.data.stats['menu.js'].total
    let rtotalreg = 0

    try {

    rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    } catch {

    }
let tags = {
'main': 'Start Bot',
      'daftar': 'Daftar',
      'abs': 'Absensi Menu', 
      'xp': 'Exp & Limit',
      'rpg': 'Adventure Menu', 
      'game': 'Game Menu',
      'dewasa': '18+ Menu',
      'anime': 'Anime Menu',
      'group': 'Group Menu', 
      'cs': 'Custom Sticker',
      'sticker': 'Creator Menu',
      'image': 'Image Menu',
      'anony': 'Anonymous Chat',
      'audio': 'Audio Menu', 
      'sound': 'Sound Menu',
      'quotes': 'Random Menu',
      'primbon': 'Primbon Menu',
      'belajar': 'Education Menu',
      'simi': 'Simsimi Menu',
      'kerang': 'Kerang Menu',
      'downloader': 'Downloader Menu',
      'tools': 'Tools Menu',
      'premium': 'Premium Menu',
      'owner': 'Owner Menu',
      'host': 'Host Menu',
      'database': 'Database',
      'info': 'Information',
}

    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }

    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
Hai Kak %name 👋

╭───◪ *𝙄𝙉𝙁𝙊 𝘽𝙊𝙏*
│
├❒ Bot Name : *${conn.getName(conn.user.jid)}*
├❒ Browser : *${conn.browserDescription[1]}*
├❒ Nomor Johannes : @62895603352610
├❒ Utah Johannes : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik 
├❒ Wa Web Name : *${conn.browserDescription[0]}*
├❒ Wa Web Version : *${conn.browserDescription[2]}*
├❒ Version : *%version*
├❒ Battery : ${conn.battery ? `${conn.battery.value}%* ${conn.battery.live ? 'Charging' : 'Not Charged'}` : 'Not detected'}
└❒ Total Features : *357+*

╭───◪ *𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍*
│
├❒ UserName : *%name*
├❒ Serial Number : ${sn}
├❒ Age : *${registered ? '' + age : ''}*
├❒ Mention : *@${m.sender.replace(/@.+/, '')}*
├❒ Number : *${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*
├❒ Role : *%role*
├❒ Health : *%healt*
├❒ Money : *$%money*
├❒ Limit : *%limit*
├❒ Level : *%level*
├❒ Registered : *${registered ? 'Yes': 'No'}*
└❒ Premium User : *${premium ? 'Premium': 'Gratisan'}*

╭───◪ *𝘿𝘼𝙏𝘼*
│
├❒ Uptime : *%uptime*
├❒ Total Hit : *%totalsend*
├❒ Main Uptime : *%muptime*
├❒ Total Users : *%totalreg Users*
├❒ Registered : *%rtotalreg*
└❒ Time : *%time WIB*
%readmore
`

    let header = conn.menu.header || '┌─⎔ ```%category``` ⎔'
    let body   = conn.menu.body   || '╎➾ *%cmd%islimit*' 
    let footer = conn.menu.footer || '└──────────────────❍\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered By @${global.conn.user.jid.split`@`[0]}`) + `\n*SPECIAL THANKS TO*\n\n*• Nurutomo*\n*• Ariffb25*\n*• Benniismael*\n*• Johannes*\n*• ZeroBot*\n*• Aria Putra*\n*• Adi Official*\n*• UdeanXD*\n*• Penyedia Apikey*\n*• Creator Bot WhatsApp*\n*• Dan Seluruh Pengguna Bot ini*`
    let _text  = before + '\n'

    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, totalgc, rtotalreg, role, healt, money, battery, coin, tigame, totalsend, sn, 
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])

function _0x2dba(_0x2873f7,_0x3034c7){var _0x10eb64=_0x10eb();return _0x2dba=function(_0x2dba2e,_0x14a22f){_0x2dba2e=_0x2dba2e-0x100;var _0x4c39cf=_0x10eb64[_0x2dba2e];return _0x4c39cf;},_0x2dba(_0x2873f7,_0x3034c7);}function _0x10eb(){var _0x54453d=['12DIOjJT','📝\x20SOURCE\x20CODE','659504uvNprY','𝕄𝕒𝕕𝕖\x20𝔹𝕪\x20@62895603352610','688285ljqkAK','10049090sstGNi','https://www.instagram.com/p/CEOnVoVAdXQ3V5KhCHm6fArQwc7msEgbbHuBjE0/?utm_medium=copy_link','5273752qmXKFU','#sc','https://i.ibb.co/GtDDhpB/2bb30ea99c35.jpg','6LIhQnQ','jid','send3ButtonImg','553HJsjyA','trim','👥\x20GROUPBOT','#gcbot','#owner','chat','getProfilePicture','9EkZrUx','1282308uQMShS','113176wosavb','user','589061pxDgXA','3uWSUfx'];_0x10eb=function(){return _0x54453d;};return _0x10eb();}var _0x1e6d40=_0x2dba;(function(_0x26c06d,_0x5bde3b){var _0x1c75b7=_0x2dba,_0x222a32=_0x26c06d();while(!![]){try{var _0x1ad88a=parseInt(_0x1c75b7(0x102))/0x1+parseInt(_0x1c75b7(0x115))/0x2*(parseInt(_0x1c75b7(0x119))/0x3)+parseInt(_0x1c75b7(0x107))/0x4+parseInt(_0x1c75b7(0x104))/0x5*(parseInt(_0x1c75b7(0x10a))/0x6)+-parseInt(_0x1c75b7(0x10d))/0x7*(parseInt(_0x1c75b7(0x116))/0x8)+parseInt(_0x1c75b7(0x114))/0x9*(-parseInt(_0x1c75b7(0x105))/0xa)+parseInt(_0x1c75b7(0x118))/0xb*(parseInt(_0x1c75b7(0x100))/0xc);if(_0x1ad88a===_0x5bde3b)break;else _0x222a32['push'](_0x222a32['shift']());}catch(_0x4b1070){_0x222a32['push'](_0x222a32['shift']());}}}(_0x10eb,0xa7ea6),await conn[_0x1e6d40(0x10c)](m[_0x1e6d40(0x112)],text[_0x1e6d40(0x10e)](),_0x1e6d40(0x109),_0x1e6d40(0x103),'👤\x20OWNER',_0x1e6d40(0x111),_0x1e6d40(0x10f),_0x1e6d40(0x110),_0x1e6d40(0x101),_0x1e6d40(0x108),{'quoted':ftroli,'contextInfo':{'mentionedJid':['62895603352610@s.whatsapp.net'],'forwardingScore':0x3e7,'isForwarded':!![],'externalAdReply':{'mediaUrl':_0x1e6d40(0x106),'mediaType':0x2,'title':ucapanWaktu+'\x20'+name,'body':week+'\x20'+date,'thumbnailUrl':await conn[_0x1e6d40(0x113)](conn[_0x1e6d40(0x117)][_0x1e6d40(0x10b)])}}}));
  
   } catch (e) {
    conn.reply(m.chat, 'Maaf, Menu Kami Sedang Error, Silahkan Coba Lagi Nanti', m)
    throw e
  }
}

handler.help = ['allmenu', 'help']
handler.tags = ['ngentod']
handler.command = ['allmenu', 'help']

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = false

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
