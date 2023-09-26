import LevelOneBodies from "./levelOneBodies";
import Player from "../assets/structures/player";
import Ground from "../assets/structures/ground";
import Enemy from "../assets/structures/enemy";
import Cloud from "../assets/drawings/cloud";
import Background from "../assets/drawings/background"
import Platform from "../assets/structures/platform"
import player from "../assets/player"

const LevelOneAssets = {

    background: [
        new Background()
    ],
    clouds: [
        new Cloud(200, 300, 40)
    ],
    grounds: [
        new Ground({ x: 100,  y: 600 }, { w: 500, h: 200 }),
        new Ground({ x: 1050, y: 600 }, { w: 800, h: 200 }),
        new Ground({ x: 1250, y: 400 }, { w: 800, h: 200 }),
    ],
    // platforms: [
    //     new Platform(LevelOneBodies.platforms[0]),
    //     new Platform(LevelOneBodies.platforms[1])
    // ],
    // enemies: [
    //     new Enemy(LevelOneBodies.enemies[0], 50, 1),
    //     new Enemy(LevelOneBodies.enemies[1], 20, 3)
    // ],
    //player: [new Player(player.main)],
}

export default LevelOneAssets
