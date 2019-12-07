console.log('pid in worker: ', process.pid)

process.on('message', (msg)=>{
    console.log('3: ', msg)
})

process.send('===')
process.emit('message', '========')