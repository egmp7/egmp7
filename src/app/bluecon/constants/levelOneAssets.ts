import Player from "../graphs/structures/player";
import Ground from "../graphs/structures/ground";
import Enemy from "../graphs/structures/enemy";
import Cloud from "../graphs/drawings/cloud";
import Background from "../graphs/drawings/background";
import Platform from "../graphs/structures/platform";
//////////////////////////////////////////////////////
import { Assets } from "./assetTypes"

const LevelOneAssets: Assets = {

    drawings:{
        background: [new Background()],
        clouds: [
            new Cloud(200, 300, 40),
        ]
    },

    structures:{
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
}

export default LevelOneAssets
