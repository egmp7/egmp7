import player from "./assets/playerBody";
import tools from "./globals/tools";
import LevelOneAssets from "./levels/levelOneAssets";
import LevelOneBodies from "./levels/levelOneBodies";

export default class Game {
    
    constructor() {
        tools.render.setAssets(LevelOneAssets);
        tools.collisions.setAssets(LevelOneBodies);
        tools.collisions.setPlayer(player);
    }
    run(p5) {
        tools.run(p5);
    }
}