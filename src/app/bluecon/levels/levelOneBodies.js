import { Bodies, Body } from "matter-js"

const enemies = {
    width: 20,
    height: 44    
}

const playerBody = Bodies.rectangle(50, 200, 36, 82);
const playerFloorSensor = Bodies.circle(50,241,2,{disSensor: true});

const LevelOneBodies = {
    player:Body.create({parts: [playerBody, playerFloorSensor]}),
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


