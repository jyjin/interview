var child_process = require('child_process')
var worker = child_process.fork('./worker')

console.log('pid in app: ', process.pid)

worker.on('message', (msg) => {
    console.log('1: ', msg)
})

process.on('message', (msg) => {
    console.log('2: ', msg)
})

worker.send('---')
process.emit('message', '--------')