const Discord = require("discord.js")
const client = new Discord.Client({ disableMentions: 'everyone' })
const fs = require("fs");
client.config = JSON.parse(fs.readFileSync(`./config.json`, "utf8"));
const unbapi = require('unb-api')
const economy = new unbapi.Client(process.env.ECONOMY)

client.prefix = client.config.prefix;

["aliases", "commands"].forEach(x => client[x] = new Discord.Collection());
["command"].forEach(x => require(`./handlers/${x}`)(client));

client.on('ready',() => {
    console.log(`online as ${client.user.tag}`)
}) 

client.on('message', async message => {

    if (message.author.bot || message.channel.type === "dm") return;

    if (!message.content.startsWith(client.prefix)) return;

    let args = message.content.slice(client.prefix.length).trim().split(/ +/);
    let cmd = args.shift().toLowerCase();

    client.noneperms = `<@${message.author.id}> ในการใช้งานคำสั่งนี้จำเป็นต้องมีสิทธิ์:`

    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))

    if (commandfile) commandfile.run(client, message, args, economy)

})

client.login(client.config.token);
