const fs = require("fs")

const DB_PATH = "./db/db.json"

// { uid, roleId, createdAt, expiredAt, updatedAt }

module.exports.findAll = async (id) => {
    return new Promise((resolve, reject) => {
        try {
            const file =  JSON.parse(fs.readFileSync(DB_PATH))
            if (id) {
                const r = file.db.find(e => e.uid === id)
                reslove(r)
            } else {
                resolve(file.db)
            }
        } catch (err) {
            reject(err)
        }
    })
}

module.exports.save = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const file =  JSON.parse(fs.readFileSync(DB_PATH))
            const idx = file.db.findIndex(e => e.uid === data.uid)
            
            if (file.db[idx]) {
                file.db[idx].expiredAt += data.duration
                file.db[idx].updatedAt = Date.now()
            } else {
                data.createdAt = Date.now()
                data.expiredAt = Date.now() + data.duration
                data.updatedAt = Date.now()
                file.db.push(data)
            }

            fs.writeFileSync(DB_PATH, JSON.stringify(file, null, 2))
            resolve(true)

        } catch (error) {
            reject(error)
        }
    })
}

module.exports.remove = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const file =  JSON.parse(fs.readFileSync(DB_PATH))
            const idx = file.db.findIndex(e => e.uid === id)
            
            if (!file.db[idx]) {
                throw new Error("invalid data")
            } 

            file.db.splice(idx, 1)
            fs.writeFileSync(DB_PATH, JSON.stringify(file, null, 2))
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}