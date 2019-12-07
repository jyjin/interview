const fs = require('fs')
const log = (...args) => {
    console.log.call(console, ...args)
}
const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile('../' + filename, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data.toString()))
            }
        })
    })
}

function add(a, b) {
    return a + b
}

var a = (a, b) => {
    return add(a, b)
}

var b = (a, b) => add(a, b)

readFile('test.json')
    .then(file => {
        log('test.json = ', file)
    }).then(() => {
        return readFile('test1.json')
    }).then(file1 => {
        log('test1.json = ', file1)
    })


const readAsyncFile = async function () {
    log('串行读取... ')
    log(111)
    var file = await readFile('test.json').catch(function (err) {
        console.log(err);
    });
    log(222)
    var file1 = await readFile('test1.json').catch(function (err) {
        console.log(err);
    });
    log(333)
    log('读取后才执行我: ', file)
    log('读取后才执行我: ', file1)


    log('平行读取... ')
    log(11)
    var file = readFile('test.json')
    log(22)
    var file1 = readFile('test1.json')
    log(33)
    log('读取后才执行我: ', await file)
    log(44)
    log('读取后才执行我: ', await file1)
    log(55)
}

readAsyncFile()

log('我在哪里执行？')
log('不知道', 444)

log('1 + 1 : ', a(1, 1))
log('2 + 2 : ', b(2, 2))

setTimeout(() => {
    function* gen(x) {
        try {
            var y = yield x + 2;
        } catch (e) {
            console.log(e);
        }
        return y;
    }

    var g = gen(1)
    console.log(g.next())
    console.log(g.next())
    console.log(g.next())
    console.log(g.next())

    function* ge() {    //声明时需要添加*，普通函数内部不能使用yield关键字，否则会出错
        yield '1';
        yield '2';
        yield '3';
        return '4';
    }
    var a = ge()
    console.log(a.next())  // {"value":"1", "done": true}
    console.log(a.next())  // {"value":"2", "done": true}
    console.log(a.next())  // {"value":"3", "done": true}
    console.log(a.next())  // {"value":"4", "done": true}
    console.log(a.next())  // {done": true}
    console.log(a.next())  // {done": true}
}, 1000)

