let o = {}
let p = Object.assign(o, {})
let q = Object.assign({}, o)
console.log(`o==p:${o == p}`) // o==p:true
console.log(`o==q:${o == q}`) // o==q:false
// --------------------------------------------------
let a = [1, 2, 3, 4, 5]
a.length = 0
console.log(a, a.length) // [] 0
// --------------------------------------------------
const source = {
    get foo() { return 1 }  //属性是取值函数
};
const target = {};          //目标对象    
console.log(Object.assign(target, source)); // foo: 1
// --------------------------------------------------
const v1 = 'abc';
const v2 = true;  // 不可枚举属性不合并
const v3 = 10;
const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
// --------------------------------------------------
var a1 = [, , ,]
var a2 = new Array(3)
console.log(a1, a1.length)          // [,,] 3
console.log(a2, a2.length)          // [,,] 3
console.log(a1 == a2, a1 === a2)    // false false
// --------------------------------------------------
function* ge() {    //声明时需要添加*，普通函数内部不能使用yield关键字，否则会出错
    yield '1';
    yield '2';
    yield '3';
    return '4';
}
// var a = ge()
// console.log(a.next())  // {"value":"1", "done": true}
// console.log(a.next())  // {"value":"2", "done": true}
// console.log(a.next())  // {"value":"3", "done": true}
// console.log(a.next())  // {"value":"4", "done": true}
// console.log(a.next())  // {done": true}
// console.log(a.next())  // {done": true}



const s = 'jyjin'
// s = 'tom'   // run error
console.log('string test == ', s)

const d = new Date()
// d = 1  // run error
console.log('date test == ', d)

const num = 1
// num = 2     // run error
console.log('number test == ', num)

const bo = true
// bo = false  // run error
console.log('boolean test == ', bo)

const no = null
// no = 1  // run error
console.log('null test == ', no)

const no1 = undefined
// no1 = 1
console.log('undefined test == ', no1)

const obj1 = { name: 'jyjin' }
obj1.name = 'tom'
console.log('object test == ', obj1)

const obj2 = [1, 2, 3]
obj2[0] = 2
console.log('array test == ', obj2)

const obj3 = obj2
obj3[0] = 3
const bo1 = bo
console.log('copy test == ', obj3, bo1, obj2)

const fo = () => { return 'fun' }
// fo = [1, 2, 3] // run error
console.log('function test == ', fo)