
const setLight = (color, time) => {
    var p = new Promise(resolve => {
        timeTick(color, time)
        setTimeout(() => {
            resolve({ color, time })
        }, time)

    })
    return p
}


const timeTick = (color, time) => {
    var t = 0
    var tc = setInterval(() => {
        if (t * 1000 == time) {
            clearInterval(tc)
            return
        }
        console.log(`Traffic light: ${color} == ${++t}s`)

    }, 1000)
}


const TrafficLight = () => {
    setLight('red', 3000).then(v => {
        return setLight('yellow', 1000)
    }).then(v => {
        return setLight('green', 3000)
    }).then(v => {
        TrafficLight()
    })
}

TrafficLight()
