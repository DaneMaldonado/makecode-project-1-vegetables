namespace SpriteKind {
    export const Location = SpriteKind.create()
    export const VegLettuceKind = SpriteKind.create()
    export const VegTomatoKind = SpriteKind.create()
    export const ClearItems = SpriteKind.create()
    export const VegPotatoeKind = SpriteKind.create()
    export const VegCarrotKind = SpriteKind.create()
}
function VegTomato2 () {
    VegTomato = sprites.create(img`
        . . . . . 7 . e c 7 . . . . . . 
        . . . . e 7 7 c 7 7 e e . . . . 
        . . c e e e 7 c 7 e 2 2 e e . . 
        . c e e 2 2 2 c 6 e e 2 2 2 e . 
        . c e 2 2 2 2 c c 2 4 5 4 2 e . 
        c e e 2 2 2 2 2 2 2 4 5 5 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e 2 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e 2 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.VegTomatoKind)
    tiles.placeOnTile(VegTomato, tiles.getTileLocation(10, 9))
    VegTomato.scale = 0.75
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    VegHero,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f e e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f e e e e e e e f e f 
        f f f e e e e f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        . 4 f b b b b b f e 4 e 
        . 4 f d d d d d e d d 4 
        . e f f f f f f e e 4 . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f b b b b b f 4 . 
        4 d d e d d d d d f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    scene.cameraFollowSprite(VegHero)
})
function VegPotatoeOnMeal () {
    VegPotatoOnMeal2 = sprites.create(img`
        ................................................................................
        ................................................................................
        ...................................555...........555............................
        ...................................555...........555...........555..............
        .......................555.........eee...........eee......eeeeeee5..............
        ................555....5eeee.......eeee..........eee...eeeeeeeeee5..............
        ................eee....5eeee.......eeee........eeeee..eeeeeeeeeee...............
        ..........555...eee.....eeee....eeeeeee.....eeeee444.eeeeeeee...................
        ..........5eeee.eeeeeeeeeeeeeeeeeeeeeee.eeee555e4444eeeeee555...................
        ..........5eeeee4444eeee555eeeeeeeeeee555eee555e4444eeeee.555...........555.....
        ...........eeeee4444eeee555eeeee555eee555eeeeee44444555ee5eee......eeeeeee5.....
        ............555e4444....eee5eeee5eeeeeeeee..ee44444eee5ee5eee...444eeeeeee5.....
        .....555....5ee44444...e444ee.ee5eeee.eee...e44444444e5ee444e..4444eeeeeee......
        .....eee....5ee4444555e4444e..eeeeee444444ee4444444444eee444e.44444eee..........
        55...eee.....ee44445eee4444eee4444e4444444444444444444444444ee444445............
        e444.4444444444444444444444444444444444444444444444444444444444444e5............
        e4444444444444444444444444444444444444444444444eeeee4444444444444e55............
        e4444444444444444444444444444444444eeeee44444455eee...eee4444444ee55............
        .ee444444.....44444444444444444e4444ee.e44444e55......eeeee44444ee55............
        ..e444444...ee44444444444444444e4444e..e4444ee55.....eeeeee44444e.........555...
        ....4444e..eeeeeeee4444444eeeee5e444e..e4444ee5......e555eee444444.......eee5...
        ...e4444...5eeee..ee4444ee5eeee5e444e..e4444ee5......eee5eeee444444....eeeee5...
        ...44444...5eee...5e444eee5.eee55444...e4444eee....e444e5ee.ee444444..eeeeee....
        ...4444....555....5eee.e555eeee..444...e444eeeee..e4444eeee..e4444444eeeeeee....
        ...444444..........eee.eeeeeeee..444..eeee.eeeeeeee4444e55.....ee44444eeee......
        ...4444444........eeee..eeeeee5..444..eeee..eeee4444444e........e44444444.......
        ....444444........eeee...eeeee5..444.eeeee...eee444444ee.........e44444444......
        .....e4444.......eeeee.....eee..4444.eeee....eee444444ee........eee444444444....
        .......eee.......eeee......555..4444.eeee...eeeeeeeeeeee........eeee.e4444444...
        .......555.......eeee......555..4444.eee....eeee.eeeeeee........eeee..e444444e..
        .......555.......eee............4444.eee....eeee..eeeeeeee......555.....e4444e5.
        .................eee............eeee.555....555.....eeeeee5..............e444e5.
        `, SpriteKind.Food)
    tiles.placeOnTile(VegPotatoOnMeal2, tiles.getTileLocation(5, 3))
    VegPotatoOnMeal2.scale = 1.1
}
function VegBread () {
    VegBread1 = sprites.create(img`
        ........................................................................................................................
        ........................................................................................................................
        ..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...................
        ..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..................
        ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............
        .......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............
        .......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........
        .......................eeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444444eeeeeeeeeeeeeee.........
        ......................eeeeeeeeeeeee44444444444444444444444444444444444444444444444444444444444444eeeeeeeeeeeeeee........
        ......................eeeeeeeeee444444444444444444444444444444444444444444444444444444444444444444eeeeeeeeeeeeee........
        ......................eeeeeeeee444444444444444444444444444444444444444444444444444444444444444444444444eeeeeeeee........
        ....................eeeeeeeeee4444444444444444444444444444444d444444444444444444444444444444444444444444eeeeeeee........
        ....................eeeeeeeee4444444444444444444444444444444444444444444444444444444444444444444444444444eeeeeee........
        ....................eeeeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................eeeee444444444444444444444444444444444444444444444444444444444444444444d44444444444444444444........
        ....................eeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................eeeee444444444444444444444444444444444444444444444444444d44444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................4444444444d444444444444444d444444444444444444d4444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................444444444444444444444444444444444444444444444444444444444444d44444444444444444444444d4444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................4444444444444444444444444444444444444444444444444444444444444444444444444d444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................4444444444444d444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444d44444444444444444444444444........
        ....................44444444444444444444444444d44444444444444444444d44444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................eeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444........
        ....................eeeeee4444444444444444444444444444444444444444444444444444d4444444444444444444444444444eeeee........
        ....................eeeeeeee44444444444444444444444444444444444444444444444444444444444444d4444444444444444eeeee........
        ....................eeeeeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444eeeee........
        ....................eeeeeeeeee444444444444444444d444444444444444444444444444444444444444444444444444444444eeeeee........
        .....................eeeeeeeeeee44444444444444444444444444444444d4444444444444444444444444444444444444444eeeeeee........
        .....................eeeeeeeeeeee44444444444444444444444444444444444444444444444444444444444444444444444eeeeeeee........
        .......................eeeeeeeeeeeee4444444444444444444444444444444444444444444444444444444444444444444eeeeeeeee........
        ........................eeeeeeeeeeeeee444444444444444444444444444444444444444444444444444444444444444eeeeeeeeeee........
        .........................eeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444444444444eeeeeeeeeeee.........
        ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........
        ............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........
        ...............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............
        .................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............
        .....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................
        ........................................................................................................................
        ........................................................................................................................
        `, SpriteKind.VegPotatoeKind)
    tiles.placeOnTile(VegBread1, tiles.getTileLocation(5, 3))
    VegBread1.scale = 1
}
function VegLettuce () {
    VegLettuce1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        7 7 7 . . . . . . . . . . . . . 
        7 7 7 7 7 7 7 . . . . . . . . . 
        7 7 7 d d 7 7 7 7 7 . . . . . . 
        7 7 7 7 7 7 7 7 7 7 7 . . . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 d d 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . 7 7 7 7 7 
        . . . . . . . . . . . 7 7 7 7 7 
        . . . . . . . . . . . . . 7 7 7 
        . . . . . . . . . . . . . 7 7 7 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.VegLettuceKind)
    tiles.placeOnTile(VegLettuce1, tiles.getTileLocation(10, 10))
    VegLettuce1.scale = 0.75
}
function VegLettuceOnMeal () {
    VegLettuceOnMeal1 = sprites.create(img`
        ..........777...77.77.....777...77.77.....777...77.77.....777...77.77...........
        .........77777777777777..77777777777777..77777777777777..77777777777777.........
        ........77ddd7777777777777ddd7777777777777ddd7777777777777ddd77777777777........
        ........777777777ddd7777777777777ddd7777777777777ddd7777777777777ddd7777........
        ........7777777777777777777777777777777777777777777777777777777777777777........
        ........7777777777777777777777777777777777777777777777777777777777777777........
        ........777ddd7777777777777ddd7777777777777ddd7777777777777ddd7777777777........
        ........77777777777dd77777777777777dd77777777777777dd77777777777777dd777........
        ........7777777777777777777777777777777777777777777777777777777777777777........
        ........7777777777777777777777777777777777777777777777777777777777777777........
        .........7777777..77777..7777777..77777..7777777..77777..7777777..77777.........
        ..........777...77.77.....777...77.77.....777...77.77.....777...77.77...........
        .........77777777777777..77777777777777..77777777777777..77777777777777.........
        ........77ddd7777777777777ddd7777777777777ddd7777777777777ddd77777777777........
        ........777777777ddd7777777777777ddd7777777777777ddd7777777777777ddd7777........
        ........7777777777777777777777777777777777777777777777777777777777777777........
        ........7777777777777777777777777777777777777777777777777777777777777777........
        ........777ddd7777777777777ddd7777777777777ddd7777777777777ddd7777777777........
        ........77777777777dd77777777777777dd77777777777777dd77777777777777dd777........
        ........7777777777777777777777777777777777777777777777777777777777777777........
        ........7777777777777777777777777777777777777777777777777777777777777777........
        .........7777777..77777..7777777..77777..7777777..77777..7777777..77777.........
        `, SpriteKind.Food)
    tiles.placeOnTile(VegLettuceOnMeal1, tiles.getTileLocation(5, 3))
    VegLettuceOnMeal1.scale = 1.25
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    VegChangeCameraPers()
})
function SpawnVegHero () {
    VegHero = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    VegHero.scale = 0.9
    tiles.placeOnTile(VegHero, tiles.getTileLocation(5, 17))
    scene.cameraFollowSprite(VegHero)
    controller.moveSprite(VegHero)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.VegPotatoeKind, function (sprite, otherSprite) {
    VegPotatoeOnMeal()
})
function VegCarrotOnMeal () {
    VegCarrotOnMeal1 = sprites.create(img`
        .................................................
        .................................................
        .................................................
        .................................................
        ...eeeeeeeeeeeeeeeee.........eeeeeeeeeeeeeeeee...
        .eee444444114441114eee.....eee444444114441114eee.
        ee4444444444444444444ee...ee4444444444444444444ee
        e444444444444444444444e...e444444444444444444444e
        e444444444444444444444e...e444444444444444444444e
        ee4444444444444444444ee...ee4444444444444444444ee
        .eee444444444444444eee.....eee444444444444444eee.
        ...eeeeeeeeeeeeeeeee.........eeeeeeeeeeeeeeeee...
        .................................................
        ...eeeeeeeeeeeeeeeee.........eeeeeeeeeeeeeeeee...
        .ee4444444114441114eee.....eee444444114441114eee.
        ee4444444444444444444ee...ee4444444444444444444ee
        e444444444444444444444e...e444444444444444444444e
        e444444444444444444444e...e444444444444444444444e
        ee4444444444444444444ee...ee4444444444444444444ee
        .eee444444444444444eee.....eee444444444444444eee.
        ...eeeeeeeeeeeeeeeee.........eeeeeeeeeeeeeeeee...
        .................................................
        .................................................
        .................................................
        .................................................
        `, SpriteKind.VegCarrotKind)
    tiles.placeOnTile(VegCarrotOnMeal1, tiles.getTileLocation(4, 3))
    VegCarrotOnMeal1.scale = 1.25
}
function VegTomatoOnMeal () {
    TomatoOnMeal1 = sprites.create(img`
        ................................................................
        ......2222...................2222...............................
        ....22222222...............22222222.............................
        ...222e22e2222............222e22e2222...........................
        ...22e22e22e22............22e22e22e22...........................
        ..22ee2ee2e2222..........22ee2ee2e2222..........................
        .222e.2e.2e.222.........222e.2e.2e.222..........................
        .222e.2e.2e.222.........222e.2e.2e.222..........................
        .222e.2e.2e.222.........222e.2e.2e.222..........................
        .222e.2e.2e2222.........222e.2e.2e2222..........................
        .222ee2ee22e242.........222ee2ee22e242..........................
        .e222e22ee2224..........e222e22ee2224...........................
        ..ee2ee2e22242...........ee2ee2e22242...........................
        ...e222222442.............e222222442......2222..................
        ....2ee4442e.....222.......2ee4442e.......2222..................
        ......2eeee....2222222.......2eeee......22222222................
        ..............222e2e2222...............222ee2e2222..............
        ..............22e2e22e22...............22e22e22e22..............
        .............22ee2e2e222.............222e.22.2e.22..............
        ............222e.2.2e.22.............222e.22.2e.22..............
        ............222e.2.2e.22.............222e.22.2e.22..............
        ............222e.2.2e222.............222e.22.2e.22..............
        ............222ee2e22e24.............222e.22.2e222..............
        ............e222e2ee2224.............e222e22ee2224..............
        .............ee2eee22242..............ee2eeee22242..............
        ..............e22222442................e222222442...............
        ...............2ee442e..................2eee442e................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `, SpriteKind.Food)
    tiles.placeOnTile(TomatoOnMeal1, tiles.getTileLocation(5, 3))
    TomatoOnMeal1.scale = 1.25
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    VegHero,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    scene.cameraFollowSprite(VegHero)
})
function VegChangeCameraPers () {
    VegChangeCamera = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    VegChangeCamera.x = 96
    VegChangeCamera.y = 60
    scene.cameraFollowSprite(VegChangeCamera)
}
function VegCallVeg () {
    VegBread()
    VegLettuce()
    VegTomato2()
    VegPotatoes()
    VegCarrot()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    VegHero,
    [img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    scene.cameraFollowSprite(VegHero)
})
function VegCarrot () {
    VegCarrot1 = sprites.create(img`
        .............777
        ............7777
        ............7777
        ..........447777
        .........444777.
        ........4444444.
        .......444d4444.
        .......44d44444.
        ......444444444.
        ......44444444..
        .....44444444...
        .....4444444....
        ....44444444....
        ...444d4444.....
        ...44d44444.....
        ..44444444......
        ..44444444......
        .44444444.......
        .4444444........
        .4444444........
        .444444.........
        .44444..........
        ................
        `, SpriteKind.VegCarrotKind)
    tiles.placeOnTile(VegCarrot1, tiles.getTileLocation(10, 12))
    VegCarrot1.scale = 0.5
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    VegHero,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        e f e 4 d b b d d e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 b f 4 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
    scene.cameraFollowSprite(VegHero)
})
function VegTitleReplacement () {
    for (let value of tiles.getTilesByType(assets.tile`VegSpawnHeroTile`)) {
        VegRocks = sprites.create(img`
            . . b d b . . . . . b b b b . . 
            . c b d d b . . . b b d d d b . 
            . b c c b . . . b c d d d d b . 
            . . . . . . b b c c b d b b b . 
            . . . . . b d d b c c b b b c . 
            . . b b b c d d b b c c c c . . 
            . b d d d b c b b c . . . . . . 
            c b d d d d c c c c . b b b . . 
            c c b b b b c c c . b d d d b . 
            . c c c b b . . b c b b d d b b 
            . b b . . . . . b c c b b b b . 
            b d d b b . . . . . c c c b . . 
            b b d d b c . . b b b b b b b . 
            . b c c c b . b d d d b b c b . 
            . . . . . . b d d d b c c b . . 
            . . . . . . b b b c c c b . . . 
            `, SpriteKind.Location)
        tiles.placeOnTile(VegRocks, value)
    }
}
function VegPotatoes () {
    VegPotatoe = sprites.create(img`
        . 4 4 4 4 4 4 . 
        4 4 1 4 1 1 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        . 4 4 4 4 4 4 . 
        `, SpriteKind.VegPotatoeKind)
    tiles.placeOnTile(VegPotatoe, tiles.getTileLocation(10, 11))
    VegPotatoe.scale = 1.25
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.VegLettuceKind, function (sprite, otherSprite) {
    VegLettuceOnMeal()
})
function ClearItems2 () {
    VegClearItems = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . d d 5 1 1 1 1 1 1 1 5 d d . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.VegLettuceKind)
    tiles.placeOnTile(VegClearItems, tiles.getTileLocation(8, 8))
    VegClearItems.scale = 0.75
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.VegCarrotKind, function (sprite, otherSprite) {
    VegCarrotOnMeal()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.VegTomatoKind, function (sprite, otherSprite) {
    VegTomatoOnMeal()
})
let VegClearItems: Sprite = null
let VegPotatoe: Sprite = null
let VegRocks: Sprite = null
let VegCarrot1: Sprite = null
let VegChangeCamera: Sprite = null
let TomatoOnMeal1: Sprite = null
let VegCarrotOnMeal1: Sprite = null
let VegLettuceOnMeal1: Sprite = null
let VegLettuce1: Sprite = null
let VegBread1: Sprite = null
let VegPotatoOnMeal2: Sprite = null
let VegHero: Sprite = null
let VegTomato: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
VegTitleReplacement()
SpawnVegHero()
VegCallVeg()
