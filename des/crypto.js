var CryptoJS = require("crypto-js");


// 测试素材
var result = "+/VHVvOf9oi8344K3xIcUFaqnR26YxF+r5AFXhmGkh8=" // 加密后的串
var vector_str = "^SjQM1J9"                                 // 偏移量
var aseKey = "F571B6B2"                                     // 秘钥必须为：8/16/32位
var message = "_builtin_PHONE|==|44|##|";                   // 原始代加密的串

// console.log(CryptoJS.enc.Utf8.parse(aseKey))

// 加密
// var encrypt = CryptoJS.DES.encrypt(message, CryptoJS.enc.Utf8.parse(aseKey), {
//     iv: vector_str,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.ZeroPadding
// }).toString();
// console.log(encrypt);



// 解密
// var decrypt = CryptoJS.DES.decrypt(result, CryptoJS.enc.Utf8.parse(aseKey), {
//     iv: vector_str,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.ZeroPadding
// }).toString(CryptoJS.enc.Utf8);
// console.log(decrypt);

const str = 'hello world'


// var myEnc = {
//     testStr: 'hello world',
//     strToBase64: function (str) {
//         var b1 = Buffer.from(str).toString('base64')
//         console.log('to base 64 => ', b1)
//         return b1
//     },
//     base64ToStr: function (base64) {
//         var fb1 = Buffer.from(base64, 'base64').toString()
//         console.log('base64 to str => ', fb1)
//         return fb1
//     },
//     cryptoUtf8: function (str) {
//         var b1 = CryptoJS.enc.Utf8.parse(str)
//         console.log('str to utf8 => ', b1)
//         return b1
//     }
// }

// var to64str = myEnc.strToBase64(myEnc.testStr)
// myEnc.base64ToStr(to64str)
// console.log(myEnc.cryptoUtf8(myEnc.testStr).toString())


// var md = CryptoJS.MD5(myEnc.testStr).toString(CryptoJS.enc.Utf8)
// console.log(md)

// var encrypt = CryptoJS.DES.encrypt(message, aseKey, {
//     iv: vector_str,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.ZeroPadding
// }).toString()

var b = Buffer.from(result, 'base64').toString('utf8')
console.log(b)

// var a = CryptoJS.DES.decrypt(b, aseKey, {
//     iv: vector_str,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.ZeroPadding
// }).toString(CryptoJS.enc.Utf8)
// console.log(a)
