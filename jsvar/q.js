// console.log(NaN == NaN, NaN === NaN)


// arguments不能在箭头函数中访问
// arguments不是数组 不能map foreach
// Array.prototype.push = function(){
//     arguments.map(function (item) {
//         if (typeof arguments[i] !== 'number') {
//             console.error('不是数字')
//         } else {
//             this[this.length] = arguments[i]
//         }
//     })
//     return this.length
// }

// var arr = new Array()
// arr.push('sss')
// arr.push(1)
// console.log(arr)

// 问：Array类重写push方法，使所有Array实例在push操作的时候检查数据类型是不是Number类型，是则添加，不是则打印“不是数字”并忽略

// 答：
Array.prototype.push = function () {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            console.error('不是数字')
        } else {
            this[this.length] = arguments[i];
        }
    }
    return this.length;
}
var arr = [];
arr.push('name')
arr.push(1)




    // 问：补充以下代码，是的输出1，2，3，4，不能使用for循环
    (function (val) {
        console.log(val)
    })(1);

// 答：
var i = 0
var fn = (i) => {
    (function (val) {
        val += i
        console.log(val)
    })(1)
    if (i < 3) {
        fn(++i)
    }
}
fn(i)


