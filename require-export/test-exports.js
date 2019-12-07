
var count = 0
var increment = 5

// var setIncrement = function (_increment) {
//     if (!_increment)
//         console.error('parameter _increment is required!')
//     increment = _increment
// }

var printCount = function () {
    count += increment
    console.log('count in exports: ', count)
}

// exports.setIncrement = setIncrement

// exports.printCount = printCount

// exports = { setIncrement, printCount }


exports.printCount = printCount


module.exports = function () {
    increment = 2
    count += increment
    this.printCount = function () {
        console.log('count in module.exports: ', count)
    }
}

var isEq = (exports == module.exports)
console.log('isEq   : ', isEq)
console.log('exports: ', exports)
console.log('module.exports: ', module.exports)