let index = 0
while (true) {
    if (input.buttonIsPressed(Button.B)) {
        if (index < 5) {
            index += 1
            serial.writeValue("hangerő", index)
        }
    } else if (input.buttonIsPressed(Button.A)) {
        if (0 < index) {
            index += -1
        }
        serial.writeValue("hangerő", index)
    } else {
    	
    }
    if (index == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        music.ringTone(294)
    } else if (index == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            `)
        music.ringTone(330)
    } else if (index == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            `)
        music.ringTone(349)
    } else if (index == 4) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            # # # # .
            `)
        music.ringTone(392)
    } else if (index == 5) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
        music.ringTone(440)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.stopAllSounds()
    }
}
