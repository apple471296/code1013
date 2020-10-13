basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(Y, X)
            basic.pause(500)
        }
    }
    basic.clearScreen()
})
