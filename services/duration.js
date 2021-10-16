const durations = {
    "s": 1000,
    "m": 60 * 1000,
    "h": 60 * 60 * 1000,
    "d": 24 * 60 * 60 * 1000
}

module.exports = (duration) => {
    const result = duration.split(/(\d+)/).filter(e => e.length)
    const [str, num] = [result.filter(e => !Number(e)), result.filter(e => Number(e))]

    if (str.length !== 1 && num.length !== 1) return null
    if (!Object.keys(durations).includes(str[0])) return null

    return durations[str[0]] * ~~num[0]
}