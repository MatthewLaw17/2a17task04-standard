let x = 0
input.onButtonPressed(Button.A, function () {
    x = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x, 0)
        x += 1
        basic.pause(200)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
