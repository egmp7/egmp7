import LevelOneBodies from "./levelOneBodies";
import Player from "../assets/structures/player";
import Ground from "../assets/structures/ground";
import Enemy from "../assets/structures/enemy";
import Cloud from "../assets/drawings/cloud";
import Background from "../assets/drawings/background"
import Platform from "../assets/structures/platform"

const LevelOneAssets ={
    
    background:[
        new Background()
    ],
    clouds:[
        new Cloud(200,300,40)
    ],
    grounds : [
        new Ground(LevelOneBodies.grounds[0]),
        new Ground(LevelOneBodies.grounds[1]),
        new Ground(LevelOneBodies.grounds[2]),
    ],
    platforms:[
        new Platform(LevelOneBodies.platforms[0]),
        new Platform(LevelOneBodies.platforms[1])
    ],
    enemies: [
        new Enemy(LevelOneBodies.enemies[0],50),
        new Enemy(LevelOneBodies.enemies[1],20)
    ],
    player : new Player(),
}

export default LevelOneAssets
