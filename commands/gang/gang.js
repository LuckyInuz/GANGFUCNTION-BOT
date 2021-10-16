const Discord = require('discord.js')
const fs = require("fs")

module.exports = {
    config: {
        name: "gang",
        aliases: []
    },
    run: async (client, message, args, economy) => {

        let guild_file = `./db`
        let guild_config = JSON.parse(fs.readFileSync(`${guild_file}/gang.json`, "utf8"))
        let gang = guild_config.gang
        let check_member_role = message.member.roles.cache
        let get_role = message.guild.roles.cache
        const r1 = get_role.get(gang.leader).name, r2 = get_role.get(gang.coleader).name, r3 = get_role.get(gang.adviser).name
        const g1 = get_role.get(gang.g1.id), g2 = get_role.get(gang.g2.id), g3 = get_role.get(gang.g3.id), g4 = get_role.get(gang.g4.id), g5 = get_role.get(gang.g5.id),
            g6 = get_role.get(gang.g6.id), g7 = get_role.get(gang.g7.id), g8 = get_role.get(gang.g8.id), g9 = get_role.get(gang.g9.id), g10 = get_role.get(gang.g10.id),
            g11 = get_role.get(gang.g11.id), g12 = get_role.get(gang.g12.id), g13 = get_role.get(gang.g13.id), g14 = get_role.get(gang.g14.id), g15 = get_role.get(gang.g15.id);

        if (!args[0]) { //แสดงรายการคำสั่ง
            return message.channel.send(new Discord.MessageEmbed()
                .setColor(client.config.color)
                .addField(`**คู่มือคำสั่งแก๊ง**`, `
**${client.prefix}gang list**: แสดงรายชือแก๊ง
**${client.prefix}gang add**: เพื่มสมาชิกเข้าแก๊ง
**${client.prefix}gang remove**: ลบมาชิกออกจากแก๊ง
**${client.prefix}gang leave**: ออกจากแก๊ง
`)
                .setFooter(`ใช้คำสั่งโดย ${message.author.tag}`, message.author.avatarURL()))
        }

        const gang_list_0 = new Discord.MessageEmbed()
            .setColor(client.config.color)
            .setTitle('**รายชื่อแก๊ง**')
        const gang_list_1 = new Discord.MessageEmbed()
            ////.setColor(g1.color.toString(16).padStart(6, '0'))
            .addField('1. แก๊ง', `\`\`\`${g1.name}\`\`\``, true)
            .addField('คติประจำแก๊ง', `\`\`\`${gang.g1.info}\`\`\``, true)
            .addField('\u200B', '\u200B', false)
            .addField(`${r1}`, `<@${gang.g1.owner}>`, true)
            .addField('จำนวนสมาชิกปัจจุบัน', `\`\`\`${g1.members.size}/${gang.g1.limit} คน \`\`\``, true)
            .addField('จำนวนเงินในธนาคารเเก๊ง', `\`\`\` ${gang.g1.economy_money} บาท\`\`\``, true)
            .addField('คะเเนนเเก๊ง', `\`\`\` 0 คะเเนน\`\`\``, true)
            .setThumbnail(gang.g1.png)

       
        const gang_list_2 = new Discord.MessageEmbed()
           /// .setColor(g2.color.toString(16).padStart(6, '0'))
            .addField('2. แก๊ง', `\`\`\`${g2.name}\`\`\``, true)
            .addField('คติประจำแก๊ง', `\`\`\`${gang.g2.info}\`\`\``, true)
            .addField('\u200B', '\u200B', false)
            .addField(`${r1}`, `<@${gang.g2.owner}>`, true)
            .addField('จำนวนสมาชิกปัจจุบัน', `\`\`\`${g2.members.size}/${gang.g2.limit} คน \`\`\``, true)
            .addField('จำนวนเงินในธนาคารเเก๊ง', `\`\`\` ${gang.g2.economy_money} บาท\`\`\``, true)
            .addField('คะเเนนเเก๊ง', `\`\`\` 0 คะเเนน\`\`\``, true)
            .setThumbnail(gang.g2.png)

            const gang_list_3 = new Discord.MessageEmbed()
           /// .setColor(g2.color.toString(16).padStart(6, '0'))
            .addField('3. แก๊ง', `\`\`\`${g3.name}\`\`\``, true)
            .addField('คติประจำแก๊ง', `\`\`\`${gang.g3.info}\`\`\``, true)
            .addField('\u200B', '\u200B', false)
            .addField(`${r1}`, `<@${gang.g3.owner}>`, true)
            .addField('จำนวนสมาชิกปัจจุบัน', `\`\`\`${g3.members.size}/${gang.g3.limit} คน \`\`\``, true)
            .addField('จำนวนเงินในธนาคารเเก๊ง', `\`\`\` ${gang.g3.economy_money} บาท\`\`\``, true)
            .addField('คะเเนนเเก๊ง', `\`\`\` 0 คะเเนน\`\`\``, true)
            .setThumbnail(gang.g3.png)


            const gang_list_4 = new Discord.MessageEmbed()
           /// .setColor(g2.color.toString(16).padStart(6, '0'))
            .addField('4. แก๊ง', `\`\`\`${g4.name}\`\`\``, true)
            .addField('คติประจำแก๊ง', `\`\`\`${gang.g4.info}\`\`\``, true)
            .addField('\u200B', '\u200B', false)
            .addField(`${r1}`, `<@${gang.g4.owner}>`, true)
            .addField('จำนวนสมาชิกปัจจุบัน', `\`\`\`${g4.members.size}/${gang.g4.limit} คน \`\`\``, true)
            .addField('จำนวนเงินในธนาคารเเก๊ง', `\`\`\` ${gang.g4.economy_money} บาท\`\`\``, true)
            .addField('คะเเนนเเก๊ง', `\`\`\` 0 คะเเนน\`\`\``, true)
            .setThumbnail(gang.g4.png)

	
        function gang_list() {//กำหนดการแสดงแก๊ง
            return message.channel.send(gang_list_0)
                , message.channel.send(gang_list_1)
                , message.channel.send(gang_list_2)
            	,message.channel.send(gang_list_3)
                ,message.channel.send(gang_list_4)
           
        }

        if (args[0] == 'list') { //กำหนดการแสดงแก๊ง
            if (!args[1]) return gang_list()
            if (args[1] == 'g1') return message.channel.send(gang_list_1)
            else if (args[1] == 'g2') return message.channel.send(gang_list_2)
            else if (args[1] == 'g3') return message.channel.send(gang_list_3)
            else if (args[1] == 'g4') return message.channel.send(gang_list_4)
            

        }

        if (message.channel.id !== '855334670585692191') return; //ห้องที่สามารถใช้งานคำสั่งได้

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]) 

        if (args[0] == 'add') { //เพื่มสมาชิก
            if (check_member_role.has(gang.leader) || check_member_role.has(gang.coleader) || check_member_role.has(gang.adviser)) {

                if (!user) return message.channel.send('กรุณาแท็กสมาชิก')
                let check_user_role = user.roles.cache
                if (check_user_role.has(gang.g1.id) || check_user_role.has(gang.g1.id) || check_user_role.has(gang.g3.id) || check_user_role.has(gang.g4.id) || check_user_role.has(gang.g5.id) ||
                    check_user_role.has(gang.g6.id) || check_user_role.has(gang.g7.id) || check_user_role.has(gang.g8.id) || check_user_role.has(gang.g9.id) || check_user_role.has(gang.g10.id) ||
                    check_user_role.has(gang.g11.id) || check_user_role.has(gang.g12.id) || check_user_role.has(gang.g13.id) || check_user_role.has(gang.g14.id) || check_user_role.has(gang.g15.id))
                    return message.channel.send(`<@${user.id}> มีแก๊งอยู่แล้ว`)

                function add_member(id, limit) {
                    if (get_role.get(id).members.size > limit) return message.channel.send(`ตอนนี้แก๊งของคุณมีสมาชิกครบ ${limit} แล้ว`)
                    return user.roles.add(id), message.channel.send(`เพื่มสมาชิก <@${user.id}> สำเร็จ`)
                }

                //ส่วนของการตรวจสอบและให้ยศ
                if (check_member_role.has(gang.g1.id)) {
                    add_member(gang.g1.id, gang.g1.limit)
                }

                else if (check_member_role.has(gang.g2.id)) {
                    add_member(gang.g2.id, gang.g2.limit)
                }

                else if (check_member_role.has(gang.g3.id)) {
                    add_member(gang.g3.id, gang.g3.limit)
                }
                else if (check_member_role.has(gang.g4.id)) {
                    add_member(gang.g4.id, gang.g4.limit)
                }
                else if (check_member_role.has(gang.g5.id)) {
                    add_member(gang.g5.id, gang.g5.limit)
                }
                else if (check_member_role.has(gang.g6.id)) {
                    add_member(gang.g6.id, gang.g6.limit)
                }
                else if (check_member_role.has(gang.g7.id)) {
                    add_member(gang.g7.id, gang.g7.limit)
                }
                else if (check_member_role.has(gang.g8.id)) {
                    add_member(gang.g8.id, gang.g8.limit)
                }
                else if (check_member_role.has(gang.g9.id)) {
                    add_member(gang.g9.id, gang.g9.limit)
                }
                else if (check_member_role.has(gang.g10.id)) {
                    add_member(gang.g10.id, gang.g10.limit)
                }
                else if (check_member_role.has(gang.g11.id)) {
                    add_member(gang.g11.id, gang.g11.limit)
                }
                else if (check_member_role.has(gang.g12.id)) {
                    add_member(gang.g12.id, gang.g12.limit)
                }
                else if (check_member_role.has(gang.g13.id)) {
                    add_member(gang.g13.id, gang.g13.limit)
                }
                else if (check_member_role.has(gang.g14.id)) {
                    add_member(gang.g14.id, gang.g14.limit)
                }
                else if (check_member_role.has(gang.g15.id)) {
                    add_member(gang.g15.id, gang.g15.limit)
                }
            }
            else return message.channel.send(`<@${message.member.id}> คุณไม่มีสิทธิในการใช้คำสั่งนี้`)
        }

        if (args[0] == 'remove') { //นำสมาชิกออก
            if (check_member_role.has(gang.leader)) {

                if (!user) return message.channel.send('กรุณาแท็กสมาชิก')

                let check_user_role = user.roles.cache

                if (check_user_role.has(gang.leader) === gang.leader){

                    return message.channel.send(`คุณไม่สามารถนำ${r1}ออกจากแก๊งได้`)
                } 

               

                function remove_member(id) {
                    if (!check_user_role.has(id)) return message.channel.send(`<@${user.id}> ไม่ได้อยู่ในแก๊ง`)
                    return user.roles.remove(id), message.channel.send(`นำ <@${user.id}> ออกจากแก๊งสำเร็จ`)
                }

                //ส่วนของการตรวจสอบและปลดยศ
                if (check_member_role.has(gang.g1.id)) {
                    remove_member(gang.g1.id)
                }
                else if (check_member_role.has(gang.g2.id)) {
                    remove_member(gang.g2.id)
                }
                else if (check_member_role.has(gang.g3.id)) {
                    remove_member(gang.g3.id)
                }
                else if (check_member_role.has(gang.g4.id)) {
                    remove_member(gang.g4.id)
                }
                else if (check_member_role.has(gang.g5.id)) {
                    remove_member(gang.g5.id)
                }
                else if (check_member_role.has(gang.g6.id)) {
                    remove_member(gang.g6.id)
                }
                else if (check_member_role.has(gang.g7.id)) {
                    remove_member(gang.g7.id)
                }
                else if (check_member_role.has(gang.g8.id)) {
                    remove_member(gang.g8.id)
                }
                else if (check_member_role.has(gang.g9.id)) {
                    remove_member(gang.g9.id)
                }
                else if (check_member_role.has(gang.g10.id)) {
                    remove_member(gang.g10.id)
                }
                else if (check_member_role.has(gang.g11.id)) {
                    remove_member(gang.g11.id)
                }
                else if (check_member_role.has(gang.g12.id)) {
                    remove_member(gang.g12.id)
                }
                else if (check_member_role.has(gang.g13.id)) {
                    remove_member(gang.g13.id)
                }
                else if (check_member_role.has(gang.g14.id)) {
                    remove_member(gang.g14.id)
                }
                else if (check_member_role.has(gang.g15.id)) {
                    remove_member(gang.g15.id)
                }
            }
            else return message.channel.send(`<@${message.member.id}> คุณไม่มีสิทธิในการใช้คำสั่งนี้`)
        }

        if (args[0] == 'leave') {


            if (check_member_role.has(gang.leader)) return message.channel.send(`<@${message.member.id}> คุณออกจากแก๊งของตัวเองไม่ได้`)
                message.member.roles.remove(gang.g1.id)
                message.member.roles.remove(gang.g2.id)
                message.member.roles.remove(gang.g3.id)
                message.member.roles.remove(gang.g4.id)
                message.member.roles.remove(gang.g5.id)
                message.member.roles.remove(gang.g6.id)
                message.member.roles.remove(gang.g7.id)
                message.member.roles.remove(gang.g8.id)
                message.member.roles.remove(gang.g9.id)
                message.member.roles.remove(gang.g10.id)
                message.member.roles.remove(gang.g11.id)
                message.member.roles.remove(gang.g12.id)
                message.member.roles.remove(gang.g13.id)
                message.member.roles.remove(gang.g14.id)
                message.member.roles.remove(gang.g15.id)
                return message.channel.send(`<@${message.member.id}> ออกจากแก๊งสำเร็จ หรือไม่มีเเก๊ง`)
            
        }
     
    }
}