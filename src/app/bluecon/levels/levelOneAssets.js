import LevelOneBodies from "./levelOneBodies";
import Player from "../assets/player";
import Ground from "../assets/ground";
import Enemy from "../assets/enemy";
import Cloud from "../assets/cloud";
import Background from "../assets/background"

const LevelOneAssets ={
    player : new Player(),
    grounds : [
        new Ground(LevelOneBodies.grounds[0]),
        new Ground(LevelOneBodies.grounds[1]),
        new Ground(LevelOneBodies.grounds[2]),
    ],
    enemies: [
        new Enemy(LevelOneBodies.enemies[0],50),
        new Enemy(LevelOneBodies.enemies[1],20)
    ],
    clouds:[
        new Cloud(200,300,40)
    ],
    background:[
        new Background()
    ]
}

export default LevelOneAssets
