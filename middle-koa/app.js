const Koa = require('koa');
const app = new Koa();
const port = 3002
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const log = function () {
    console.log.apply(this, arguments)
}

const midA = async (ctx, next) => {
    var d = Number(new Date())
    var err = null
    log('midA start...', d)
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (d % 2 == 0) {
                resolve()
            } else {
                err = '奇数我们认为是错误'
                resolve()
            }
        }, 100)
    })
    if(err){
        ctx.body = '奇数我们认为是错误'
    }else{
        return next()
    }
  
}


const midB = async (ctx, next) => {
    log('midB start...')
    var err = null 
    var file = null
    await new Promise(resolve => {
        fs.readFile('./test.json', (err, data) => {
            if (err) {
                err = '文件读取失败'
            } else {
                file = JSON.parse(data.toString())
            }
            resolve()
        })
    })
    if(err){
        ctx.body = err
    }else{
        ctx.user = file
        return next()
    }
   
}

const midC = async (ctx, next) => {
    log('midC start ...', ctx.user)
    ctx.body = {
        res: 1,
        data: {
            msg: 'test success',
            user: ctx.user
        }
    }
    log('midC end...')
}

router.get('/test', midA, midB, midC)
app.use(router.routes())

app.on('error', (err, ctx) => {
    log('error route ...', err.msg)
    ctx.body = err.msg || 'catch err event'
})

log('listen on 3002...')
app.listen(port);


/**
 * 总结：
 *  async 函数与 await。
 *  1.只有在async函数内部，才能使用await
 *  2.await等待的必须是promse对象
 *  3.当promise对象resolve()时，await语句执行完毕
 *  4.reject触发的一定是异常
 * 
 *  koa
 *  1.koa app.use() 中，ctx.body不能放在异步环境中
 *  2.ctx.body可以放在await执行完之后
 **/
