const Discord = require('discord.js')
const fs = require("fs")
const formatter = new Intl.NumberFormat('en')

module.exports = {
    config: {
        name: "setting-gang",
        aliases: ["sg"]
    },
    run: async (client, message, args, economy) => {

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${client.noneperms} \`Manage Guild\``)

        let guild_file = `./db`
        let guild_config = JSON.parse(fs.readFileSync(`${guild_file}/gang.json`, "utf8"))

        if (!args[0] || !args[1]) return message.channel.send(`กรุณาระบุคำสั่งให้ถูกต้อง`)
        let cmd = args[0]
        let gangid = args[1]
        let gang = guild_config.gang

        let currency = client.emojis.cache.get(guild_config.currency)

        if (cmd == 'info') { //ส่วนแก้ไขคติประจำแก๊ง
            let des = args.splice(2).join(" ")
            let info = function (gang) {
                return `เปลี่ยนคติประจำใจของแก๊งค์ <@&${gang}> สำเร็จ`
            }
            if (gangid == 'g1') {
                gang.g1.info = des
                message.channel.send(info(gang.g1.id))
            }
            else if (gangid == 'g2') {
                gang.g2.info = des
                message.channel.send(info(gang.g2.id))
            }
            else if (gangid == 'g3') {
                gang.g3.info = des
                message.channel.send(info(gang.g3.id))
            }
            else if (gangid == 'g4') {
                gang.g4.info = des
                message.channel.send(info(gang.g4.id))
            }
            else if (gangid == 'g5') {
                gang.g5.info = des
                message.channel.send(info(gang.g5.id))
            }
            else if (gangid == 'g6') {
                gang.g6.info = des
                message.channel.send(info(gang.g6.id))
            }
            else if (gangid == 'g7') {
                gang.g7.info = des
                message.channel.send(info(gang.g7.id))
            }
            else if (gangid == 'g8') {
                gang.g8.info = des
                message.channel.send(info(gang.g8.id))
            }
            else if (gangid == 'g9') {
                gang.g9.info = des
                message.channel.send(info(gang.g9.id))
            }
            else if (gangid == 'g10') {
                gang.g10.info = des
                message.channel.send(info(gang.g10.id))
            }
            else if (gangid == 'g11') {
                gang.g11.info = des
                message.channel.send(info(gang.g11.id))
            }
            else if (gangid == 'g12') {
                gang.g12.info = des
                message.channel.send(info(gang.g12.id))
            }
            else if (gangid == 'g13') {
                gang.g13.info = des
                message.channel.send(info(gang.g13.id))
            }
            else if (gangid == 'g14') {
                gang.g14.info = des
                message.channel.send(info(gang.g14.id))
            }
            else if (gangid == 'g15') {
                gang.g15.info = des
                message.channel.send(info(gang.g15.id))
            }
            return fs.writeFile(`${guild_file}/gang.json`, JSON.stringify(guild_config), err => { if (err) { console.log(err) } })
        }
        else if (cmd == 'limit') { //ส่วนแก้ไขสมาชิกสูงสุดของแก๊ง
            let member_add = Number(args[2])
            let msg1 = function (number, limit) {
                return `ไม่สามารถเพื่มสมาชิกแก๊งค์อีก ${number}คน\nสมากชิกสูงสุดปัจจุบัน ${limit}`
            }
            let msg2 = function (gang, number, limit) {
                return `เพื่มสมาชิกของแก๊งค์ <@&${gang}> อีก ${number}คน สำเร็จ\nสมากชิกสูงสุดปัจจุบัน ${limit}`
            }
            if (gangid == 'g1') {
                if (gang.g1.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g1.limit))
                message.channel.send(msg2(gang.g1.id, member_add, gang.g1.limit + member_add))
            }
            else if (gangid == 'g2') {
                if (gang.g2.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g2.limit))
                message.channel.send(msg2(gang.g2.id, member_add, gang.g2.limit + member_add))
            }
            else if (gangid == 'g3') {
                if (gang.g3.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g3.limit))
                message.channel.send(msg2(gang.g3.id, member_add, gang.g3.limit + member_add))
            }
            else if (gangid == 'g4') {
                if (gang.g4.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g4.limit))
                message.channel.send(msg2(gang.g4.id, member_add, gang.g4.limit + member_add))
            }
            else if (gangid == 'g5') {
                if (gang.g5.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g5.limit))
                message.channel.send(msg2(gang.g5.id, member_add, gang.g5.limit + member_add))
            }
            else if (gangid == 'g6') {
                if (gang.g6.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g6.limit))
                message.channel.send(msg2(gang.g6.id, member_add, gang.g6.limit + member_add))
            }
            else if (gangid == 'g7') {
                if (gang.g7.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g7.limit))
                message.channel.send(msg2(gang.g7.id, member_add, gang.g7.limit + member_add))
            }
            else if (gangid == 'g8') {
                gang.g9.limit = gang.g9.limit + member_add
                if (gang.g8.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g8.limit))
                message.channel.send(msg2(gang.g8.id, member_add, gang.g8.limit + member_add))
            }
            else if (gangid == 'g9') {
                gang.g9.limit = gang.g9.limit + member_add
                if (gang.g9.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g9.limit))
                message.channel.send(msg2(gang.g9.id, member_add, gang.g9.limit + member_add))
            }
            else if (gangid == 'g10') {
                if (gang.g10.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g10.limit))
                message.channel.send(msg2(gang.g10.id, member_add, gang.g10.limit + member_add))
            }
            else if (gangid == 'g11') {
                if (gang.g11.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g11.limit))
                message.channel.send(msg2(gang.g11.id, member_add, gang.g11.limit + member_add))
            }
            else if (gangid == 'g12') {
                if (gang.g12.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g12.limit))
                message.channel.send(msg2(gang.g12.id, member_add, gang.g12.limit + member_add))
            }
            else if (gangid == 'g13') {
                if (gang.g13.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g13.limit))
                message.channel.send(msg2(gang.g13.id, member_add, gang.g13.limit + member_add))
            }
            else if (gangid == 'g14') {
                if (gang.g14.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g14.limit))
                message.channel.send(msg2(gang.g14.id, member_add, gang.g14.limit + member_add))
            }
            else if (gangid == 'g15') {
                if (gang.g15.limit + member_add > gang.member_limit) return message.channel.send(msg1(member_add, gang.g15.limit))
                message.channel.send(msg2(gang.g15.id, member_add, gang.g15.limit + member_add))
            }
            return fs.writeFile(`${guild_file}/gang.json`, JSON.stringify(guild_config), err => { if (err) { console.log(err) } })
        }
        else if (cmd == 'png') { //ส่วนแก้ไขรูปภาพแก๊ง
            let file = String(args[2])
            if (!file.split('https://')[1]) return message.channel.send(`ต้องระบุเป็นลิงก์เท่านั้น`)
            let png = function (gang) {
                return `เปลี่ยนโลโก้แก๊งค์ <@&${gang}> สำเร็จ`
            }
            if (gangid == 'g1') {
                gang.g1.png = file
                message.channel.send(png(gang.g1.id))
            }
            else if (gangid == 'g2') {
                gang.g2.png = file
                message.channel.send(png(gang.g2.id))
            }
            else if (gangid == 'g3') {
                gang.g3.png = file
                message.channel.send(png(gang.g3.id))
            }
            else if (gangid == 'g4') {
                gang.g4.png = file
                message.channel.send(png(gang.g4.id))
            }
            else if (gangid == 'g5') {
                gang.g5.png = file
                message.channel.send(png(gang.g5.id))
            }
            else if (gangid == 'g6') {
                gang.g6.png = file
                message.channel.send(png(gang.g6.id))
            }
            else if (gangid == 'g7') {
                gang.g7.png = file
                message.channel.send(png(gang.g7.id))
            }
            else if (gangid == 'g8') {
                gang.g8.png = file
                message.channel.send(png(gang.g8.id))
            }
            else if (gangid == 'g9') {
                gang.g9.png = file
                message.channel.send(png(gang.g9.id))
            }
            else if (gangid == 'g10') {
                gang.g10.png = file
                message.channel.send(png(gang.g10.id))
            }
            else if (gangid == 'g11') {
                gang.g11.png = file
                message.channel.send(png(gang.g11.id))
            }
            else if (gangid == 'g12') {
                gang.g12.png = file
                message.channel.send(png(gang.g12.id))
            }
            else if (gangid == 'g13') {
                gang.g13.png = file
                message.channel.send(png(gang.g13.id))
            }
            else if (gangid == 'g14') {
                gang.g14.png = file
                message.channel.send(png(gang.g14.id))
            }
            else if (gangid == 'g15') {
                gang.g15.png = file
                message.channel.send(png(gang.g15.id))
            }
            return fs.writeFile(`${guild_file}/gang.json`, JSON.stringify(guild_config), err => { if (err) { console.log(err) } })
        }
        else if (cmd == 'owner') { //ส่วนแก้ไขหัวหน้าแก๊ง
            let user = args[2]

            if (args[2]) {
                try {
                    user = (message.guild.members.cache.get(message.mentions.users.first().id))
                } catch {
                    user = null
                }
            }

            if (Number(args[2])) {
                try {
                    if (args[2].length !== 18) return message.channel.send(`กรุณาระบุไอดีให้ถูกต้อง เลขไอดีมีเพียง 18 หลัก`)
                    user = message.guild.members.cache.get(args[2])
                } catch {
                    user = null
                }
            }

            if (user == null) return message.channel.send(`กรุณาระบุข้อมูลให้ถูกต้อง`)

            let id = user.user.id
            let owner = function (gang) {
                return `เปลี่ยนหัวหน้าแก๊งค์ <@&${gang}> สำเร็จ`
            }
            if (gangid == 'g1') {
                gang.g1.owner = id
                message.channel.send(owner(gang.g1.id))
            }
            else if (gangid == 'g2') {
                gang.g2.owner = id
                message.channel.send(owner(gang.g2.id))
            }
            else if (gangid == 'g3') {
                gang.g3.owner = id
                message.channel.send(owner(gang.g3.id))
            }
            else if (gangid == 'g4') {
                gang.g4.owner = id
                message.channel.send(owner(gang.g4.id))
            }
            else if (gangid == 'g5') {
                gang.g5.owner = id
                message.channel.send(owner(gang.g5.id))
            }
            else if (gangid == 'g6') {
                gang.g6.owner = id
                message.channel.send(owner(gang.g6.id))
            }
            else if (gangid == 'g7') {
                gang.g7.owner = id
                message.channel.send(owner(gang.g7.id))
            }
            else if (gangid == 'g8') {
                gang.g8.owner = id
                message.channel.send(owner(gang.g8.id))
            }
            else if (gangid == 'g9') {
                gang.g9.owner = id
                message.channel.send(owner(gang.g9.id))
            }
            else if (gangid == 'g10') {
                gang.g10.owner = id
                message.channel.send(owner(gang.g10.id))
            }
            else if (gangid == 'g11') {
                gang.g11.owner = id
                message.channel.send(owner(gang.g11.id))
            }
            else if (gangid == 'g12') {
                gang.g12.owner = id
                message.channel.send(owner(gang.g12.id))
            }
            else if (gangid == 'g13') {
                gang.g13.owner = id
                message.channel.send(owner(gang.g13.id))
            }
            else if (gangid == 'g14') {
                gang.g14.owner = id
                message.channel.send(owner(gang.g14.id))
            }
            else if (gangid == 'g15') {
                gang.g15.owner = id
                message.channel.send(owner(gang.g15.id))
            }
            return fs.writeFile(`${guild_file}/gang.json`, JSON.stringify(guild_config), err => { if (err) { console.log(err) } })
        }
        else if (cmd == 'economy_limit') { //ส่วนแก้ไขจำนวนเงินที่สามารถฝากได้ในธนาคารแก๊ง
            let money_add = Number(args[2])
            let msg1 = function (add_limit, limit) {
                return `ไม่สามารถเพื่มความจุธนาคารของแก๊งค์อีก ${currency}${formatter.format(add_limit)}\nความจุธนาคารสูงสุดปัจจุบัน ${currency}${formatter.format(limit)}`
            }
            let msg2 = function (gang, add_limit, limit) {
                return `เพื่มความจุธนาคารของแก๊งค์ <@&${gang.g1.id}> อีก ${currency}${formatter.format(add_limit)} สำเร็จ\nความจุธนาคารสูงสุดปัจจุบัน ${currency}${formatter.format(limit)}`
            }
            if (gangid == 'g1') {
                if (gang.g1.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g1.economy_limit))
                message.channel.send(msg2(gang.g1.id, money_add, gang.g1.economy_limit + money_add))
            }
            else if (gangid == 'g2') {
                if (gang.g2.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g2.economy_limit))
                message.channel.send(msg2(gang.g2.id, money_add, gang.g2.economy_limit + money_add))
            }
            else if (gangid == 'g3') {
                if (gang.g3.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g3.economy_limit))
                message.channel.send(msg2(gang.g3.id, money_add, gang.g3.economy_limit + money_add))
            }
            else if (gangid == 'g4') {
                if (gang.g4.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g4.economy_limit))
                message.channel.send(msg2(gang.g4.id, money_add, gang.g4.economy_limit + money_add))
            }
            else if (gangid == 'g5') {
                if (gang.g5.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g5.economy_limit))
                message.channel.send(msg2(gang.g5.id, money_add, gang.g5.economy_limit + money_add))
            }
            else if (gangid == 'g6') {
                if (gang.g6.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g6.economy_limit))
                message.channel.send(msg2(gang.g6.id, money_add, gang.g6.economy_limit + money_add))
            }
            else if (gangid == 'g7') {
                if (gang.g7.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g7.economy_limit))
                message.channel.send(msg2(gang.g7.id, money_add, gang.g7.economy_limit + money_add))
            }
            else if (gangid == 'g8') {
                if (gang.g8.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g8.economy_limit))
                message.channel.send(msg2(gang.g8.id, money_add, gang.g8.economy_limit + money_add))
            }
            else if (gangid == 'g9') {
                if (gang.g9.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g9.economy_limit))
                message.channel.send(msg2(gang.g9.id, money_add, gang.g9.economy_limit + money_add))
            }
            else if (gangid == 'g10') {
                if (gang.g10.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g10.economy_limit))
                message.channel.send(msg2(gang.g10.id, money_add, gang.g10.economy_limit + money_add))
            }
            else if (gangid == 'g11') {
                if (gang.g11.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g11.economy_limit))
                message.channel.send(msg2(gang.g11.id, money_add, gang.g11.economy_limit + money_add))
            }
            else if (gangid == 'g12') {
                if (gang.g12.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g12.economy_limit))
                message.channel.send(msg2(gang.g12.id, money_add, gang.g12.economy_limit + money_add))
            }
            else if (gangid == 'g13') {
                if (gang.g13.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g13.economy_limit))
                message.channel.send(msg2(gang.g13.id, money_add, gang.g13.economy_limit + money_add))
            }
            else if (gangid == 'g14') {
                if (gang.g14.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g14.economy_limit))
                message.channel.send(msg2(gang.g14.id, money_add, gang.g14.economy_limit + money_add))
            }
            else if (gangid == 'g15') {
                if (gang.g15.economy_limit + money_add > gang.money_limit) return message.channel.send(msg1(money_add, gang.g15.economy_limit))
                message.channel.send(msg2(gang.g15.id, money_add, gang.g15.economy_limit + money_add))
            }
            return fs.writeFile(`${guild_file}/gang.json`, JSON.stringify(guild_config), err => { if (err) { console.log(err) } })
        }
    }
}
