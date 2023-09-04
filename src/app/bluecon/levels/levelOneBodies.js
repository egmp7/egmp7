import { Bodies } from "matter-js"

const groundOptions = { isStatic: true }
const enemies = {
    width: 20,
    height: 44,
    options: { inertia: Infinity }
}

const LevelOneBodies = {
    player:
        Bodies.rectangle(100, 200, 20, 50, { inertia: Infinity }),
    grounds: [
        Bodies.rectangle(0, 500, 200, 60, groundOptions),
        Bodies.rectangle(270, 500, 200, 60, groundOptions)
    ],
    enemies: [

        Bodies.rectangle(270, 300, enemies.width, enemies.height, enemies.options),
        Bodies.rectangle( 40, 300, enemies.width, enemies.height, enemies.options)
    ]
}

export default LevelOneBodies;


