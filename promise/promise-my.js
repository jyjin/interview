// new Promise(resolve, reject).then(resolveCallback, rejectCallback)


var timestamp = Number(new Date)

console.log('run start ... ', timestamp)


function async(fn) {

    var state = 'pending'

    const then = function (value) {
        return function (resolveCb, rejectCb) {
            if (state === 'fullfilled') {
                return resolveCb(value)
            } else if (state == 'rejected') {
                return rejectCb(value)
            }
        }
    }

    const scb = value => {
        state = 'fulfilled'
        console.log('scb: ', value)
        return then(value)
    }

    const fcb = value => {
        state = 'rejected'
        console.log('fcb: ', value)
        return then(value)
    }

    return function (resolve, reject) {
        fn(scb, fcb)
    }
}

// async.prototype.then = async.then.bind(async)

const test = (scb, fcb) => {
    setTimeout(function () {
        if (timestamp % 2 === 0) {
            scb('resolve')
        } else {
            fcb('奇数我们认为是错误')
        }
    }, 100)
}

// new async(test).then((value) => {
//     console.log('resolve value:', value)
// }, (value) => {
//     console.log('reject value:', value)
// })

function p(){
    var a = function(){
        console.log(123)
    }

   this.a = 
}

