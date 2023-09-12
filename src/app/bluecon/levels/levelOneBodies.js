import { Bodies } from "matter-js"

const enemies = {
    width: 20,
    height: 44
}

const platformHeight = 10

const LevelOneBodies = {
    grounds: [
        Bodies.rectangle(100, 600, 500, 200),
        Bodies.rectangle(1050, 600, 800, 200),
        Bodies.rectangle(1250, 400, 800, 200)
    ],
    enemies: [

        Bodies.rectangle(270, 300, enemies.width, enemies.height),
        Bodies.rectangle(40, 300, enemies.width, enemies.height),
    ],
    platforms: [
        Bodies.rectangle(500, 500, 100, platformHeight),
        Bodies.rectangle(800, 400, 100, platformHeight)
    ],
}

export default LevelOneBodies;


