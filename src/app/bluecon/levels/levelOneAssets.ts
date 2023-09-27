import Player from "../assets/structures/player";
import Ground from "../assets/structures/ground";
import Enemy from "../assets/structures/enemy";
import Cloud from "../assets/drawings/cloud";
import Background from "../assets/drawings/background"
import Platform from "../assets/structures/platform"

const LevelOneAssets = {

    background: [
        new Background()
    ],
    clouds: [
        new Cloud(200, 300, 40)
    ],
    grounds: [
        new Ground({ x: 100, y: 600 }, { w: 1100, h: 200 }),
        new Ground({ x: 1050, y: 600 }, { w: 800, h: 200 }),
        new Ground({ x: 1250, y: 400 }, { w: 800, h: 200 }),
    ],
    platforms: [
        new Platform({ x: 500, y: 500 }, { w: 100, h: 10 }),
        new Platform({ x: 800, y: 400 }, { w: 100, h: 10 }),
    ],
    enemies: [
        new Enemy({x:500, y: 400},{w:20,h:44}, 100, 3),
        new Enemy({x:700, y: 200},{w:20,h:44}, 30, 1),
    ],
    player: [new Player({ x: 100, y: 300 }, { w: 36, h: 82 })],
}

export default LevelOneAssets
