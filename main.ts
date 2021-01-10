input.onPinPressed(TouchPin.P0, function () {
    soundExpression.slide.play()
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    Count += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    basic.showString("TRY AGAIN!")
    Count = 0
    basic.pause(100)
})
let Count = 0
music.setBuiltInSpeakerEnabled(true)
Count = 0
basic.showString("STEADY!")
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.showNumber(Count)
    basic.pause(2000)
    if (Count >= 3) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        Count = 0
        basic.showString("TRY AGAIN!")
    }
})
