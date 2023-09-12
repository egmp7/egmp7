import { Composite, Engine } from "matter-js";
import LevelOneBodies from "./levels/levelOneBodies";
import LevelOneAssets from "./levels/levelOneAssets";
import player from "./assets/playerBody"
import Render from "./globals/render"
import physics from "./globals/physics";
import Rules from "./globals/rules";
import scrollPos from "./globals/scrollPos";

export default class Game {
    rules = new Rules;
    render = new Render;

    constructor() {

        // Add bodies to matter physic engine
        Composite.add(physics.engine.world, player.main);
        Composite.add(physics.engine.world, LevelOneBodies.grounds);
        Composite.add(physics.engine.world, LevelOneBodies.enemies);

        // Add assets to render class
        this.render.add(LevelOneAssets.clouds);
        this.render.add(LevelOneAssets.grounds);
        this.render.add(LevelOneAssets.enemies);
        this.render.add(LevelOneAssets.player);

    }

    run(p5) {
        Engine.update(physics.engine);
        physics.run();
        scrollPos.run();
        this.render.run(p5);
        this.rules.run();
    }
}