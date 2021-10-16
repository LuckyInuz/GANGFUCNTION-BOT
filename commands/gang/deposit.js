const Discord = require('discord.js')
const fs = require("fs")
const formatter = new Intl.NumberFormat('en')

module.exports = {
    config: {
        name: "deposit",
        aliases: ["dep"]
    },
    run: async (client, message, args, economy) => {

        ///if (message.channel.id !== '855334670585692191' || message.channel.id !== '846371079492599808') return;

        let guild_file = `./db`
        let guild_config = JSON.parse(fs.readFileSync(`${guild_file}/gang.json`, "utf8"))
        let guild_c = JSON.parse(fs.readFileSync(`${guild_file}/config.json`, "utf8"))

        let gang = guild_config.gang

        ///let currency = client.emojis.cache.get(guild_c.currency)
        let check = client.emojis.cache.get('827064266858954792')
        let wrong = client.emojis.cache.get('827064267198300170')
        
        economy.getUserBalance(message.guild.id, message.member.id).then(p => {

            async function deposit(name, bank) {

                let money = 0
                if (!Number(args[0])) return message.channel.send('พิมพ์คำสั่งผิดพลาด')
                money = Number(args[0])

                name.economy_money = name.economy_money + money

                if (name.economy_money > name.economy_limit) {
                    let dep_limit = new Discord.MessageEmbed()
                        .setColor('ef5350')
                        .setDescription(`${wrong} ธนาคารแก๊งของคุณเต็มแล้ว`)
                        .setTimestamp()
                        .setAuthor(message.guild.roles.cache.get(name.id).name, name.png)
                    return message.channel.send(dep_limit)
                }
    
                if (bank < money) {
                    let dep_nomoney = new Discord.MessageEmbed()
                        .setColor('ef5350')
                        .setTimestamp()
                        .setAuthor(message.guild.roles.cache.get(name.id).name, name.png)
                        .addField(`**${message.author.tag}**`,`❌ ไม่มีเงินมากพอที่จะฝาก ขณะนี้คุณมี ${formatter.format(bank)} บาท อยู่ในธนาคารหลัก `, true)
                    return message.channel.send(dep_nomoney)
                }
    
                await economy.editUserBalance(message.guild.id, message.member.id, { bank: -money }, 'Gang Economy')
                await fs.writeFile(`${guild_file}/gang.json`, JSON.stringify(guild_config), err => { if (err) { console.log(err) } })
    
                let dep_money = new Discord.MessageEmbed()
                    .setColor('66bb6a')
                    .setTimestamp()
                    .setAuthor(message.guild.roles.cache.get(name.id).name, name.png)
                    .addField(`**${message.author.tag}**`,`✅ ฝาก ${formatter.format(money)} บาท ไปที่ธนาคารของแก๊งคุณ`, true)
                return message.channel.send(dep_money)
            }

            if (message.member.roles.cache.has(gang.g1.id)) {
                deposit(gang.g1, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g2.id)) {
                deposit(gang.g2, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g3.id)) {
                deposit(gang.g3, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g4.id)) {
                deposit(gang.g4, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g5.id)) {
                deposit(gang.g5, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g6.id)) {
                deposit(gang.g6, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g7.id)) {
                deposit(gang.g7, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g8.id)) {
                deposit(gang.g8, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g9.id)) {
                deposit(gang.g9, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g10.id)) {
                deposit(gang.g10, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g11.id)) {
                deposit(gang.g11, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g12.id)) {
                deposit(gang.g12, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g13.id)) {
                deposit(gang.g13, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g14.id)) {
                deposit(gang.g14, p.bank)
            }

            else if (message.member.roles.cache.has(gang.g15.id)) {
                deposit(gang.g15, p.bank)
            }

            else return message.channel.send(`<@${message.member.id}> ⛔ คุณไม่มีสิทธิในการใช้คำสั่งนี้`)
        })
    }
}