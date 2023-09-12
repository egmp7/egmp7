import { Composite, Engine } from "matter-js";
import LevelOneBodies from "./levels/levelOneBodies";
import LevelOneAssets from "./levels/levelOneAssets";
import player from "./assets/playerBody"
import physics from "./globals/physics";
import scrollPos from "./globals/scrollPos";
import Render from "./globals/render"
import Rules from "./globals/rules";

export default class Game {
    rules = new Rules;
    render = new Render;

    constructor() {
         // Add bodies to matter physic engine
         Composite.add(physics.engine.world, player.main);
         for (const bodies in LevelOneBodies) {
             Composite.add(physics.engine.world, LevelOneBodies[bodies])
         }
         // Add assets to render class
         for (const assets in LevelOneAssets) {
            this.render.add(LevelOneAssets[assets]);
        }
    }
    run(p5) {
        Engine.update(physics.engine);
        this.render.run(p5);
        this.rules.run();
        scrollPos.run();
        physics.run();
    }
}