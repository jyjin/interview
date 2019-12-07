function F1(){
    this.name = 'f1'
}

function F2(){
    this.name = 'f2'
    return {}
}

console.log(new F1().name)
console.log(F1().name)
console.log(new F2().name)
console.log(F2().name)