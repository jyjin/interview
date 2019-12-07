// Promise.resolve(1)
//     .then(x => { console.log('x == ', x); throw new Error('jyjin') })
//     .catch(
//         x => { console.log(x); return 2 })
//     .then(x => {
//         console.log('x == ', x)
//         return x + 1
//     })
//     .catch(console.error)
//     .then(console.log)
