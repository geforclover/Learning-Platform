(function () {
    var lastTime = 0
    var vendors = ['webkit', 'moz']
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
            window[vendors[x] + 'CancelRequestAnimationFrame']
    }

    if(!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime()
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall)
            }, timeToCall)
            lastTime = currTime + timeToCall
            return id
        }
    }
    if(!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id)
        }
    }
}())

function setColWidth() {
    const cols = document.querySelectorAll('[class*="col-"]')

    for(let i = 0; i < cols.length; i++) {
        const tmp = cols[i].getAttribute('class').split(' ')

        for(let j = 0; j < tmp.length; j++) {
            if(tmp[j].indexOf('col-') > -1) {
                const count = tmp[j].split('-')[1]
                cols[i].style.width = count + '%'
            }
        }
    }

    console.log(cols)
}
setColWidth()
