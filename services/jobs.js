const { findAll, remove } = require("./db")
const { expiredMessage } = require("../config")
const { removeRole } = require("./roles")

module.exports = (time = 5000, message) => {
    // console.log("loop..")

    setInterval(async () => {
        const res = await findAll()
        const expired = res.filter(e => e.expiredAt < Date.now())
        for (const e of expired) {
            const m = message.guild.members.cache.get(e.uid);
            await removeRole({user: m, roleId: e.roleId})
            await message.channel.send(`${expiredMessage} <@${e.uid}>`)
        }
    }, time)
}