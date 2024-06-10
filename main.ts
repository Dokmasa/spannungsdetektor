let VOLT = 0
basic.forever(function () {
    VOLT = pins.analogReadPin(AnalogPin.P0) / (1023 * 3.3)
    music.setVolume(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 255))
})
