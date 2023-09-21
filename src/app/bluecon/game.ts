import player from "./assets/player";
import tools from "./globals/tools";
import LevelOneAssets from "./levels/levelOneAssets";
import LevelOneBodies from "./levels/levelOneBodies";

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
    run() {
        tools.run();
    }
}