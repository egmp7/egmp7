import { Bodies } from "matter-js"

const properties = {
    enemy: {
        width: 20,
        height: 44
    },
    platform: {
        height: 10
    }
}

const LevelOneBodies = {
    grounds: [
        Bodies.rectangle(100, 600, 500, 200),
        Bodies.rectangle(1050, 600, 800, 200),
        Bodies.rectangle(1250, 400, 800, 200)
    ],
    enemies: [

        Bodies.rectangle(270, 300, properties.enemy.width, properties.enemy.height),
        Bodies.rectangle(40, 300, properties.enemy.width, properties.enemy.height),
    ],
    platforms: [
        Bodies.rectangle(500, 500, 100, properties.platform.height),
        Bodies.rectangle(800, 400, 100, properties.platform.height)
    ],
}

export default LevelOneBodies;


