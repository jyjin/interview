// ------- test require 部分--------
// var a = require('./a')
// var b = require('./b')
// var c = require('./c')
// a()
// b()
// c()




// ------- test exports 部分 --------
// var {setIncrement, printCount} = require('./test-exports')

// setIncrement(10)
// printCount()
// printCount()
// printCount()
// setIncrement(2)
// printCount()
// printCount()
// printCount()


var te = require('./test-exports')
// te.printCount()
var t = new te()
t.printCount();


console.log('app start...')