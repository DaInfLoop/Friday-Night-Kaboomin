import kaboom from "kaboom"
//import fs from "fs"
import json from "./spriteAtlasBF.json"
import menuJSON from "./spriteAtlasTitle.json"
import opponentJSON from "./spriteAtlasOpponent.json"

kaboom({
  width: 1224,
  height: 617,
  root: document.getElementById('cool')
})

class MousePos {
  constructor() {}
  get currentPos() {
    return mousePos()
  }
  set currentPos(a) {
    return mousePos()
  }
}

const mouse = new MousePos()

layers([
  "bg",
  "players",
  "fg",
  "ui"
], "players")

let inmenu = true

scene('cool stuff', () => {
// add a character to screen
inmenu = false

onKeyPress('backspace', () => {
  go('main')
  inmenu = true
})

const bf = add([
	// list of components
	sprite('bf'),
  layer("players"),
	pos(909, 272),
	area(),
  scale(4)
])

bf.play('idle')

const opponent = add([
	// list of components
	sprite('opponent'),
  layer("players"),
	pos(256, 293),
	area(),
  scale(4),
  origin('center'),
  { currentAnimation: "opponent", animations: ["opponent", "mad_opponent"] }
])

opponent.play('idle')

const bg = add([
  sprite('week6bg'),
  layer('bg'),
  scale(4),
  z(-999)
])

const keybindstext = add([
  pos(center().x, height() - 30),
  text("Current Keybinds: Arrow Keys (Left, Right, Up, Down)", { font: 'sinko' }),
  origin('center'),
  scale(2.75),
  opacity(1),
  layer('ui')
])

add([
  sprite('backspace'),
  pos(10,10),
  scale(0.5)
])

keybindstext.use(move(10, 0))

function fadeKeybinds() {
  let a = loop(0.1, () => {
    keybindstext.opacity = keybindstext.opacity
   // a()
    if (keybindstext.opacity == 0) {
      a()
    } 
  })
}

    const left = add([
      sprite("allnotpressed"),
      layer('ui'),
      pos((center().x - 150) + 400, center().y - 225),
      origin('center'),
      rotate(0),
    ])
    const up = add([
      sprite("allnotpressed"),
      layer('ui'),
      pos((center().x - 50) + 400, center().y - 225),
      origin('center'),
      rotate(90)
    ])
    const down = add([
      sprite("allnotpressed"),
      layer('ui'),
      pos((center().x + 50) + 400, center().y - 225),
      origin('center'),
      rotate(270)
    ])
    const right = add([
      sprite("allnotpressed"),
      layer('ui'),
      pos((center().x + 150) + 400, center().y - 225),
      origin('center'),
      rotate(180)
    ])

    const keybinds = {
      current: "ARROWS",
      ARROWS: {
        left: {
          hold: function() {
            return keyPress("left", () => {
              left.unuse(sprite("allnotpressed"))
              left.use(sprite("arrowleft_pressed"))
              bf.stop()
              opponent.stop()
              bf.play("left")
              opponent.play("left")
            })
          },
          release: function() {
            return keyRelease("left", () => {
              left.unuse(sprite("arrowleft_pressed"))
              left.use(sprite("allnotpressed"))
              bf.stop()
              opponent.stop()
              bf.play("idle")
              opponent.play("idle")
            })
          }
        },
        up: {
          hold: function() {
            return keyPress("up", () => {
              up.unuse(sprite("allnotpressed"))
              up.use(sprite("arrowup_pressed"))
              bf.stop()
              opponent.stop()
              bf.play('up')
              opponent.play('up')
            })
          },
          release: function() {
            return keyRelease("up", () => {
              up.unuse(sprite("arrowup_pressed"))
              up.use(sprite("allnotpressed"))
              bf.stop()
              opponent.stop()
              bf.play("idle")
              opponent.play("idle")
            })
          }
        },
        down: {
          hold: function() {
            return keyPress("down", () => {
              down.unuse(sprite("allnotpressed"))
              down.use(sprite("arrowdown_pressed"))
              bf.stop()
              opponent.stop()
              bf.play('down')
              opponent.play('down')
            })
          },
          release: function() {
            return keyRelease("down", () => {
              down.unuse(sprite("arrowdown_pressed"))
              down.use(sprite("allnotpressed"))
              bf.stop()
              opponent.stop()
              bf.play("idle")
              opponent.play("idle")
            })
          }
        },
        right: {
          hold: function() {
            return keyPress("right", () => {
              right.unuse(sprite("allnotpressed"))
              right.use(sprite("arrowright_pressed"))
              bf.stop()
              opponent.stop()
              bf.play("right")
              opponent.play("right")
            })
          },
          release: function() {
            return keyRelease('right', () => {
              right.unuse(sprite("arrowright_pressed"))
              right.use(sprite("allnotpressed"))
              bf.stop()
              opponent.stop()
              bf.play("idle")
              opponent.play("idle")
            })
          }
        }
      },
      WASD: {
        left: {
          hold: function() {
            return keyPress("a", () => {
              left.unuse(sprite("allnotpressed"))
              left.use(sprite("arrowleft_pressed"))
              bf.stop()
              opponent.stop()
              bf.play("left")
              opponent.play("left")
            })
          },
          release: function() {
            return keyRelease("a", () => {
              left.unuse(sprite("arrowleft_pressed"))
              left.use(sprite("allnotpressed"))
              bf.stop()
              opponent.stop()
              bf.play("idle")
              opponent.play("idle")
            })
          }
        },
        up: {
          hold: function() {
            return keyPress("w", () => {
              up.unuse(sprite("allnotpressed"))
              up.use(sprite("arrowup_pressed"))
              bf.stop()
              opponent.stop()
              bf.play('up')
              opponent.play('up')
            })
          },
          release: function() {
            return keyRelease("w", () => {
              up.unuse(sprite("arrowup_pressed"))
              up.use(sprite("allnotpressed"))
              bf.stop()
              opponent.stop()
              bf.play("idle")
              opponent.play("idle")
            })
          }
        },
        down: {
          hold: function() {
            return keyPress("s", () => {
              down.unuse(sprite("allnotpressed"))
              down.use(sprite("arrowdown_pressed"))
              bf.stop()
              opponent.stop()
              bf.play('down')
              opponent.play('down')
            })
          },
          release: function() {
            return keyRelease("s", () => {
              down.unuse(sprite("arrowdown_pressed"))
              down.use(sprite("allnotpressed"))
              bf.stop()
              opponent.stop()
              bf.play("idle")
              opponent.play("idle")
            })
          }
        },
        right: {
          hold: function() {
            return keyPress("d", () => {
              right.unuse(sprite("allnotpressed"))
              right.use(sprite("arrowright_pressed"))
              bf.stop()
              opponent.stop()
              bf.play("right")
              opponent.play("right")
            })
          },
          release: function() {
            return keyRelease('d', () => {
              right.unuse(sprite("arrowright_pressed"))
              right.use(sprite("allnotpressed"))

                bf.stop()
                opponent.stop()
                bf.play("idle")
                opponent.play("idle")
            })
          }
        }
      }
    }

    let DownHoldCanceller = keybinds.ARROWS.down.hold()
    let DownReleaseCanceller = keybinds.ARROWS.down.release()
    let UpHoldCanceller = keybinds.ARROWS.up.hold()
    let UpReleaseCanceller = keybinds.ARROWS.up.release()
    let LeftHoldCanceller = keybinds.ARROWS.left.hold()
    let LeftReleaseCanceller = keybinds.ARROWS.left.release()
    let RightHoldCanceller = keybinds.ARROWS.right.hold()
    let RightReleaseCanceller = keybinds.ARROWS.right.release()


    keyPress('space', () => {
      if (keybinds.current == "ARROWS") {
        DownHoldCanceller()
        DownReleaseCanceller()
        UpHoldCanceller()
        UpReleaseCanceller()
        LeftHoldCanceller()
        LeftReleaseCanceller()
        RightHoldCanceller()
        RightReleaseCanceller()
        // Set arrows to WASD
        DownHoldCanceller = keybinds.WASD.down.hold()
        DownReleaseCanceller = keybinds.WASD.down.release()
        UpHoldCanceller = keybinds.WASD.up.hold()
        UpReleaseCanceller = keybinds.WASD.up.release()
        LeftHoldCanceller = keybinds.WASD.left.hold()
        LeftReleaseCanceller = keybinds.WASD.left.release()
        RightHoldCanceller = keybinds.WASD.right.hold()
        RightReleaseCanceller = keybinds.WASD.right.release()
        keybinds.current = "WASD"
        keybindstext.text = "Current Keybinds: Keyboard Keys (WASD)"
        opponent.stop()
        opponent.use(sprite('mad_opponent'))
        opponent.play('idle')
      } else if (keybinds.current == "WASD") {
        DownHoldCanceller()
        DownReleaseCanceller()
        UpHoldCanceller()
        UpReleaseCanceller()
        LeftHoldCanceller()
        LeftReleaseCanceller()
        RightHoldCanceller()
        RightReleaseCanceller()
        // Set arrows to ARROWS
        DownHoldCanceller = keybinds.ARROWS.down.hold()
        DownReleaseCanceller = keybinds.ARROWS.down.release()
        UpHoldCanceller = keybinds.ARROWS.up.hold()
        UpReleaseCanceller = keybinds.ARROWS.up.release()
        LeftHoldCanceller = keybinds.ARROWS.left.hold()
        LeftReleaseCanceller = keybinds.ARROWS.left.release()
        RightHoldCanceller = keybinds.ARROWS.right.hold()
        RightReleaseCanceller = keybinds.ARROWS.right.release()
        keybinds.current = "ARROWS"
        keybindstext.text = "Current Keybinds: Arrow Keys (Left, Right, Up, Down)"
        opponent.stop()
        opponent.use(sprite('opponent'))
        opponent.play("idle")
      }
      keybindstext.opacity = 1
      wait(3, fadeKeybinds)
    })
    wait(3, fadeKeybinds)
})

scene('main', () => {
  add([
    rect(width(), height()),
    color(0,0,0)
  ])

  const art = add([
    pos(width(), center().y/4),
    sprite('art'),
    origin('topright'),
    scale(0.450372)
  ])

  const logo = add([
    sprite("title"),
    pos(0, -75),
    scale(0.5)
  ])

  logo.play('bop')

  let curselection = 0

  const story = add([
    sprite('story mode: selected'),
    pos(255, 358),
    scale(0.5),
    origin('center'),
    { spritename: 'story mode' }
  ])

  const freeplay = add([
    sprite('freeplay: idle'),
    pos(255, 450),
    scale(0.5),
    origin('center'),
    { spritename: 'freeplay' }
  ])

  const buttons = [story, freeplay]

  onKeyPress('down', () => {
    let prevcurselection = curselection
    curselection = curselection + 1
    if (curselection == buttons.length) {
      curselection = 0
    }
    buttons[prevcurselection].use(sprite(`${buttons[prevcurselection].spritename}: idle`))
    buttons[curselection].use(sprite(`${buttons[curselection].spritename}: selected`))
  })

  onKeyPress('up', () => {
    let prevcurselection = curselection
    curselection = curselection - 1
    if (curselection == -1) {
      curselection = buttons.length - 1
    }
    buttons[prevcurselection].use(sprite(`${buttons[prevcurselection].spritename}: idle`))
    buttons[curselection].use(sprite(`${buttons[curselection].spritename}: selected`))
  })

  onKeyPress('enter', () => {
    if (curselection == 0) { // Story Mode
      go("cool stuff")
    }
  })
})

add([
  rect(width(), height()),
  color(202,255,77),
  z(-100),
])

const fakeloadingtext = add([
  text("Loading assets...", { font: 'sinko' }),
  scale(4),
  pos(center()),
  origin('center'),
])

const assetnum = 16

function wait(ms) {
  return new Promise(res => {
    setTimeout(res, ms)
  })
}

async function load() {
  fakeloadingtext.text = `Loading assets..\n\nLoading asset 1/${assetnum}`
  await wait(250)
  await loadSprite("loadingscreen", "sprites/Loading_screen.png")
  add([
    sprite("loadingscreen"),
    z(-99),
    pos(center().x, 0),
    origin('top')
  ])
  fakeloadingtext.moveTo(center().x, height() - 30)
  fakeloadingtext.text = `Loading assets... Loading asset 2/${assetnum}`
  await wait(250)
  await loadSpriteAtlas("sprites/bfPixel.png", json)
  fakeloadingtext.text = `Loading assets... Loading asset 3/${assetnum}`
  await wait(250)
  await loadSpriteAtlas("sprites/fnflogo.png", menuJSON)
  fakeloadingtext.text = `Loading assets... Loading asset 4/${assetnum}`
  await wait(250)
  await loadSpriteAtlas("sprites/senpaaaai.png", opponentJSON)
  fakeloadingtext.text = `Loading assets... Loading asset 5/${assetnum}`
  await wait(250)
  await loadSprite('story mode: idle', 'sprites/story-mode.png')
  fakeloadingtext.text = `Loading assets... Loading asset 6/${assetnum}`
  await wait(250)
  await loadSprite('freeplay: idle', 'sprites/freeplay.png')
  fakeloadingtext.text = `Loading assets... Loading asset 7/${assetnum}`
  await wait(250)
  await loadSprite('week6bg', 'sprites/bg/bg.png')
  fakeloadingtext.text = `Loading assets... Loading asset 8/${assetnum}`
  await wait(250)
  await loadSprite('story mode: selected', 'sprites/story-mode_selec.png')
  fakeloadingtext.text = `Loading assets... Loading asset 9/${assetnum}`
  await wait(250)
  await loadSprite('freeplay: selected', 'sprites/freeplay_selec.png')
  fakeloadingtext.text = `Loading assets... Loading asset 10/${assetnum}`
  await wait(250)
  await loadPedit('arrowdown_pressed', 'sprites/downpressed.pedit')
  fakeloadingtext.text = `Loading assets... Loading asset 11/${assetnum}`
  await wait(250)
  await loadPedit('arrowleft_pressed', 'sprites/leftpressed.pedit')
  fakeloadingtext.text = `Loading assets... Loading asset 12/${assetnum}`
  await wait(250)
  await loadPedit('arrowright_pressed', 'sprites/rightpressed.pedit')
  fakeloadingtext.text = `Loading assets... Loading asset 13/${assetnum}`
  await wait(250)
  await loadPedit('arrowup_pressed', 'sprites/uppressed.pedit')
  fakeloadingtext.text = `Loading assets... Loading asset 14/${assetnum}`
  await wait(250)
  await loadPedit('allnotpressed', 'sprites/allnotpressed.pedit')
  fakeloadingtext.text = `Loading assets... Loading asset 15/${assetnum}`
  await wait(250)
  await loadSprite('backspace', 'sprites/backspace.png')
  fakeloadingtext.text = `Loading assets... Loading asset 16/${assetnum}`
  await wait(250)
  await loadSprite('art', 'sprites/Funkin.png')
  fakeloadingtext.text = "Assets loaded successfully! Click anywhere to load game!"
  fakeloadingtext.scale = vec2(2.7, 2.7)
  onClick(() => {
    go('main')
  })
}

load()