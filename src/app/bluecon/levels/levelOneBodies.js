import { Bodies } from "matter-js"

const enemies = {
    width: 20,
    height: 44    
}

const LevelOneBodies = {
    player:
        Bodies.rectangle(0, 200, 36, 82),
    grounds: [
        Bodies.rectangle(100, 800, 500, 200),
        Bodies.rectangle(1050, 800, 800, 200)
    ],
    enemies: [

        Bodies.rectangle(270, 300, enemies.width, enemies.height),
        Bodies.rectangle( 40, 300, enemies.width, enemies.height)
    ]
}

export default LevelOneBodies;


