const log = function (...args) {
    console.log.call(console, ...args)
}
const fs = require('fs')
const xlsx = require('node-xlsx')
const workSheetsFromFile = xlsx.parse(`${__dirname}/a.xlsx`);

var data = workSheetsFromFile[0].data
data.shift(0)
data.shift(0)
data.shift(0)

// log(data)
log('-----------')

var arr = []
data.map(item => {
    if (item.length == 6) {
        log(item[5])
        arr.push({
            index: 5,
            name: item[5]
        })
    } else if (item.length === 7) {
        log(item[6])
        arr.push({
            index: 6,
            name: item[6]
        })
    } else if (item.length === 8) {
        log(item[7])
        arr.push({
            index: 7,
            name: item[7]
        })
    } else {
        log('=> ', item)
    }
})

log('----------')
log(arr)

const getCapStr = (str) => {
    var cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var s = '';
    for (var i = 0; i < str.length; i++) {
        var letter = str.substr(i, 1)
        if (~cap.indexOf(letter)) {
            s += letter
        }
    }
    return s;
}

var codeArr = []
arr.map(item => {
    item.codeName = getCapStr(item.name)
    codeArr.push(item.name + ' ' + item.codeName)
})

log(arr)
log(codeArr)

fs.writeFile('code.txt', codeArr.join('\r\n'), (err)=>{
    if(err){
        log('写文件失败')
    }else{
        log('写入成功！')
    }
})


