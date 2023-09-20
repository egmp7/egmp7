import { Composite, Engine } from "matter-js";
import LevelOneBodies from "./levels/levelOneBodies";
import LevelOneAssets from "./levels/levelOneAssets";
import player from "./assets/playerBody"
import tools from "./globals/tools";
import Render from "./globals/render"

export default class Game {
    render = new Render;

    constructor() {
         // Add bodies to matter physic engine
         Composite.add(tools.physics.engine.world, player.main);
         for (const bodies in LevelOneBodies) {
             Composite.add(tools.physics.engine.world, LevelOneBodies[bodies])
         }
         // Add assets to render class
         for (const assets in LevelOneAssets) {
            this.render.add(LevelOneAssets[assets]);
        }
    }
    run(p5) {
        Engine.update(tools.physics.engine);
        this.render.run(p5);
        tools.run(p5);
    }
}