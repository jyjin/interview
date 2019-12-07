console.log(1 + 2 + '3')
console.log('3' + 2 + 1)

var a = 10;
(function () {
    console.log(a)
    var a = b = 100
    console.log(a)
})()
console.log(a + b)

// ['2a', '3', '4'].map(parseInt)

var a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log('Hello World!');
}

