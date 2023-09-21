import player from "./assets/player";
import tools from "./tools";
import LevelOneAssets from "./levels/levelOneAssets";
import LevelOneBodies from "./levels/levelOneBodies";
import type P5 from "p5";

export default class Game {
    
    constructor() {

        tools.render.setAssets(LevelOneAssets);
        tools.collisions.setBodies(LevelOneBodies);
        tools.collisions.setPlayer(player);
        tools.scroll.setBodies(LevelOneBodies);
        tools.scroll.setPlayer(player);
        tools.rules.setPlayer(player);
        tools.physics.setBodies(LevelOneBodies);
        tools.physics.setPlayer(player);
        tools.physics.addElementsToWorld();
    }
    run(p5:P5) {
        tools.run(p5);
    }
}