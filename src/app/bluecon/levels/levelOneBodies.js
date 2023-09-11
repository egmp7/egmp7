import { Bodies, Body } from "matter-js"

const enemies = {
    width: 20,
    height: 44    
}

const playerRectangle = {x:50,y:200,w:36,h:82}

const playerBody = Bodies.rectangle(
    playerRectangle.x, 
    playerRectangle.y, 
    playerRectangle.w, 
    playerRectangle.h);

const playerFloorSensor = Bodies.circle(
    playerRectangle.x,
    playerRectangle.y + playerRectangle.h/2 ,
    2,  // radius
    {isSensor: true});

const LevelOneBodies = {
    player:Body.create({parts: [playerBody, playerFloorSensor],friction:0}),
    grounds: [
        Bodies.rectangle(100, 800, 500, 200),
        Bodies.rectangle(1050, 800, 800, 200),
        Bodies.rectangle(1250, 700, 800, 200)
    ],
    enemies: [

        Bodies.rectangle(270, 300, enemies.width, enemies.height),
        Bodies.rectangle( 40, 300, enemies.width, enemies.height)
    ]
}

export default LevelOneBodies;


