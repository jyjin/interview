
// 快速排序
var oN = 0
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr
    }
    var pivotIndex = Math.floor(arr.length / 2)
    var pivot = arr.splice(pivotIndex, 1)[0]  // 这里必须用splice改变原数组长度截取， 否则数组长度不变，取得的pivotIndex也可能不变，陷入死循环
    var left = []
    var right = []

    arr.map(item => {
        if (item < pivot) {
            left.push(item)
        } else {
            right.push(item)
        }
    })
    // console.log('left ', left)
    // console.log('right ', right)
    oN++
    return quickSort(left).concat(pivot, quickSort(right))
}


var swap = function (arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

// 冒泡排序
var popSort = function (arr) {
    oN = 0
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            oN++
            if (arr[j] > arr[j + 1]) {
                arr = swap(arr, j, j + 1)
                console.log(arr)
            }
        }
    }
    return arr
}

// 选择排序
var selectSort = function (arr) {
    oN = 0
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i
        // 从前往后， 假设第i个最小，遍历剩下的与i比较直到找到最小的， 每一轮把最小的放前面
        for (var j = i; j < arr.length; j++) {
            oN++
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        arr = swap(arr, i, min)
    }
    return arr
}


// 插入排序
var insertSort = function (arr) {
    oN = 0
    for (var i = 1; i < arr.length; i++) {
        var j = i - 1
        if (arr[i] < arr[j]) {
            var last = arr[i]
            arr[i] = arr[j]
            for (; j >= 0 && last < arr[j]; j--) {
                oN++
                arr[j + 1] = arr[j]
                console.log(arr)
            }

            arr[j + 1] = last
        }
    }
    return arr
}



var arr = [85, 24, 63, 45, 17, 31, 96, 50]
console.log('原数组   => ', arr)

// console.log('快速排序 sort arr => ', quickSort(arr), '  o(n) => ', i = oN)
// console.log('冒泡排序 sort arr => ', popSort(arr), '  o(n) => ', i = oN)
// console.log('选择排序 sort arr => ', selectSort(arr), '  o(n) => ', i = oN)
console.log('插入排序 sort arr => ', insertSort(arr), '  o(n) => ', i = oN)

