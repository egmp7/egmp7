import LevelOneAssets from "./levels/levelOneAssets";
import tools from "./globals/tools";

export default class Game {
    
    constructor() {
        tools.render.setAssets(LevelOneAssets)
    }
    run(p5) {
        tools.run(p5);
    }
}