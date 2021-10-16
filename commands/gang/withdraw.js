const Discord = require('discord.js')
const fs = require("fs")
const formatter = new Intl.NumberFormat('en')

module.exports = {
    config: {
        name: "withdraw",
        aliases: ["with"]
    },
    run: async (client, message, args, economy) => {

       /// if (message.channel.id !== '855334670585692191') return;
      ///  if(message.chanel.id !== '846371079492599808') return;

        let guild_file = `./db`
        let guild_config = JSON.parse(fs.readFileSync(`${guild_file}/gang.json`, "utf8"))
        let guild_c = JSON.parse(fs.readFileSync(`${guild_file}/config.json`, "utf8"))

        let gang = guild_config.gang

        ///let currency = client.emojis.cache.get(guild_c.currency)
        //let check = client.emojis.cache.get('827064266858954792')
        //let wrong = client.emojis.cache.get('827064267198300170')

        if (message.member.roles.cache.has(gang.leader) || message.member.roles.cache.has(gang.coleader)) {

            if (!args[0]) return message.channel.send('พิมพ์คำสั่งผิดพลาด')

            async function withdraw(name) {
                let money = 0
                if (!Number(args[0])) return message.channel.send('พิมพ์คำสั่งผิดพลาด')
                money = Number(args[0])

                if (name.economy_money < money) {
                    let with_nomoney = new Discord.MessageEmbed()
                        .setColor('ef5350')
                        .setTimestamp()
                        .setAuthor(message.guild.roles.cache.get(name.id).name, name.png)
                        .addField(`**${message.author.tag}**`,`❌ ไม่สามารถถอดได้ เพราะแก๊งของคุณมี ${formatter.format(name.economy_money)} บาท อยู่ในธนาคารแก๊ง`, true)
                    return message.channel.send(with_nomoney)
                }

                name.economy_money = name.economy_money - money

                await economy.editUserBalance(message.guild.id, message.member.id, { bank: money }, 'Gang economy')
                await fs.writeFile(`${guild_file}/gang.json`, JSON.stringify(guild_config), err => { if (err) { console.log(err) } })

                let with_money = new Discord.MessageEmbed()
                    .setColor('66bb6a')
                    .setTimestamp()
                    .setAuthor(message.guild.roles.cache.get(name.id).name, name.png)
                    .addField(`**${message.author.tag}**`,`✅ ถอนเงิน ${formatter.format(money)} บาท ออกจากแก๊ง`, true)
                return message.channel.send(with_money)
            }

            if (message.member.roles.cache.has(gang.g1.id)) {
                withdraw(gang.g1)
            }

            else if (message.member.roles.cache.has(gang.g2.id)) {
                withdraw(gang.g2)
            }

            else if (message.member.roles.cache.has(gang.g3.id)) {
                withdraw(gang.g3)
            }

            else if (message.member.roles.cache.has(gang.g4.id)) {
                withdraw(gang.g4)
            }

            else if (message.member.roles.cache.has(gang.g5.id)) {
                withdraw(gang.g5)
            }

            else if (message.member.roles.cache.has(gang.g6.id)) {
                withdraw(gang.g6)
            }

            else if (message.member.roles.cache.has(gang.g7.id)) {
                withdraw(gang.g7)
            }

            else if (message.member.roles.cache.has(gang.g8.id)) {
                withdraw(gang.g8)
            }

            else if (message.member.roles.cache.has(gang.g9.id)) {
                withdraw(gang.g9)
            }

            else if (message.member.roles.cache.has(gang.g10.id)) {
                withdraw(gang.g10)
            }

            else if (message.member.roles.cache.has(gang.g11.id)) {
                withdraw(gang.g11)
            }

            else if (message.member.roles.cache.has(gang.g12.id)) {
                withdraw(gang.g12)
            }

            else if (message.member.roles.cache.has(gang.g13.id)) {
                withdraw(gang.g13)
            }

            else if (message.member.roles.cache.has(gang.g14.id)) {
                withdraw(gang.g14)
            }

            else if (message.member.roles.cache.has(gang.g15.id)) {
                withdraw(gang.g15)
            }
        }
        else return message.channel.send(`<@${message.member.id}> ⛔ คำสั่งนี้ใช้สำหรับหัวหน้าแก๊ง`)
    }
}