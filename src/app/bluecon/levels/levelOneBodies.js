import { Bodies, Body } from "matter-js"

const enemies = {
    width: 20,
    height: 44    
}

const playerPosition = {x:50,y:200}
const playerHeight = 82;
const playerWidth = 36;

const playerBody = Bodies.rectangle(
    playerPosition.x, 
    playerPosition.y, 
    playerWidth, 
    playerHeight);
const playerFloorSensor = Bodies.circle(
    playerPosition.x,
    playerPosition.y + playerHeight/2 ,
    2,
    {isSensor: true});
const playerLeftSensor = Bodies.circle(
    playerPosition.x - playerWidth/2,
    playerPosition.y + playerHeight/2 - 4,
    2,
    {isSensor: true});
const playerRightSensor = Bodies.circle(
    playerPosition.x + playerWidth/2,
    playerPosition.y + playerHeight/2 - 4,
    2,
    {isSensor: true});

const LevelOneBodies = {
    player:Body.create({parts: [playerBody, playerFloorSensor,playerLeftSensor,playerRightSensor]}),
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


