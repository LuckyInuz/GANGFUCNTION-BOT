const { count } = require("console");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const fs = require("fs");
require("dotenv").config()

const {checkRole, addRole, removeRole} = require("./services/roles")

const {invalidCmdReply, prefix, roles, methods, intervalTime} = require("./config")

const getDuration = require("./services/duration")

const jobs = require("./services/jobs")

client.config = JSON.parse(fs.readFileSync(`./config.json`, "utf8"));

client.prefix = client.config.prefix;

["aliases", "commands"].forEach(x => client[x] = new Collection());
["command"].forEach(x => require(`./handlers/${x}`)(client));

client.on('ready', () => {
    console.log(`online as ${client.user.tag}`)
}) 


client.on('message', async message => {

    jobs(intervalTime, message)

    const {content} = message

    const contentCmd = content.toString().split(" ").filter(e => e.length)

    if (message.author.bot || message.channel.type === "dm") return;

    const [cmd, method, mention, duration] = contentCmd

    if(!message.member.roles.cache.has("854362080220020736")) return message.channel.send('คุฯไม่สามารถใช้งานคำสั่งนี้ได้')
    if (!Object.keys(roles).some(e => prefix + e === cmd)) return

    if (!methods.includes(method)) return message.reply(invalidCmdReply)

    const mentionMember = message.mentions.members.first()
    const $cmd = cmd.slice(1)
    

    switch (method) {
        case "add": 
        
            if (contentCmd.length !== 4) return message.reply(invalidCmdReply)
            const durationTime = getDuration(duration)
            if (!durationTime) return message.reply(invalidCmdReply)
        
            addRole({user: mentionMember, roleId: roles[cmd.slice(1)], duration: durationTime})
                .then(() => {
                    message.channel.send(`add ${$cmd} ${mention}`)
                })
                .catch(() => {
                    message.reply(invalidCmdReply)
                })
            break

        case "remove":
            if (contentCmd.length !== 3) return message.reply(invalidCmdReply)
            removeRole({user: mentionMember, roleId: roles[$cmd]})
                .then(() => {
                    message.channel.send(`remove ${$cmd} ${mention}`)
                }).catch(() => {
                    message.reply(invalidCmdReply)
                })
            break
    }


    // if (message.author.bot || message.channel.type === "dm") return;

    // if (!message.content.startsWith(client.prefix)) return;

    // let args = message.content.slice(client.prefix.length).trim().split(/ +/);
    // let cmd = args.shift().toLowerCase();

    // client.noneperms = `<@${message.author.id}> ในการใช้งานคำสั่งนี้จำเป็นต้องมีสิทธิ์:`

    // let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))

    // if (commandfile) commandfile.run(client, message, args)



})



// client.on('ready', message => {

//     let guild_file = `./db`
//     let guild_config_role = JSON.parse(fs.readFileSync(`${guild_file}/Roles.json`, "utf8"))
//     let Role = guild_config_role.Role
//     let guild_config_date = JSON.parse(fs.readFileSync(`${guild_file}/date.json`, "utf8"))
//     let VIPOut = guild_config_date.VIPOut

//     const currentDate = new Date()
//     let day = currentDate.getDate()
//     let mounth = currentDate.getMonth()
//     mounth = mounth + 1
//     var timeNow = day.toLocaleString() + "/" + mounth.toLocaleString()

    // const role = '857716313241288714'
    // const member = message.guild.members.cache.get("311187998253252611");


//     function timeout() {
//         setTimeout(function () {
//             console.log('กำลังทำงาน')
//             if(VIPOut.t1 === timeNow){
//                 member.roles.remove(role)
            
//             }

        
//             timeout();
//         }, 1000);

// timeout()
// }
// })


client.login(process.env.TOKEN);
