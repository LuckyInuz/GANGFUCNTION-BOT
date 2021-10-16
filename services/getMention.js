module.exports = (mention = "") => {
    if (mention.startsWith("<@") && mention.endsWith(">") || !mention.includes("!")) {
        return remover(mention, ["<", "@", ">"])
    } else {
        return null
    }
}

const remover = (str = "", arr = []) => {
    arr.forEach(e => {
        str = str.replace(e, "")
    })

    return str
}