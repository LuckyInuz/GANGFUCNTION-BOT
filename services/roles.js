const {save, remove} = require("./db")

const addRole = ({ user, roleId, duration }) => {
    return new Promise((resolve, reject) => {
        user.roles.add(roleId)
            .then(async () => {
                const data = {
                    uid: user.id,
                    roleId,
                    duration
                }
                await save(data)
                resolve(true)
            })
            .catch(reject)
    })
}


const checkRole = ({ user, roleId }) => {
    return user.roles.cache.has(roleId)
}


const removeRole = ({ user, roleId }) => {
    return new Promise((resolve, reject) => {
        user.roles
            .remove(roleId)
            .then(async () => {
                await remove(user.id)
                resolve(true)
            }).catch(reject)
    }) 
}
module.exports = {
    addRole,
    checkRole,
    removeRole
}