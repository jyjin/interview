
var timestamp = Number(new Date())

console.log('run start ... ', timestamp)

const executor = (resolve, reject)=>{
    setTimeout(function(){
        if(timestamp % 2 == 0){
            resolve('run finish')
        }else{
            reject('奇数我们认为是错误')
        }
    }, 1000)
}

const resolveCb = value => {
    console.log('run end')
    console.log('resolve value: ', value)
}

const rejectCb = value => {
    console.log('run end')
    console.log('reject value: ', value)
}

new Promise(executor).then(resolveCb, rejectCb)