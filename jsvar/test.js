var a = 10, b = { text: 'unchange' }, c = { text: 'unchange' }

console.log('a = ', a)
console.log('b = ', b)
console.log('c = ', c)

var foo = function () {
    a = a * 10
    b.text = 'change'
    c = { text: 'change' }
}

foo()

console.log('a = ', a)
console.log('b = ', b)
console.log('c = ', c)