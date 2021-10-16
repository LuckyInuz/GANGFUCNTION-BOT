const configs = require("./config.json")
const {Role} = require("./db/Roles.json")

module.exports = {
    ...configs,
    roles: Role
}