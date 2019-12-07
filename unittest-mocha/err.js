function div(a, b) {
    return a / b
}

try {
    var a = 1 / 0
    console.log('jyjin === ', a == Infinity, div(1, 0))
} catch (e) {
    console.log(e)
    throw new Error('123')
}