import { Composite, Engine } from "matter-js";
import LevelOneBodies from "./levels/levelOneBodies";
import LevelOneAssets from "./levels/levelOneAssets";
import render from "./globals/render"
import physics from "./globals/physics";
import Rules from "./globals/rules";
import ScrollPos from "./globals/scrollPos";

export default class Game {
    rules = new Rules;
    scrollPos = new ScrollPos;

    constructor() {

        // Add bodies to matter physic engine
        Composite.add(physics.engine.world, LevelOneBodies.player);
        Composite.add(physics.engine.world, LevelOneBodies.grounds);
        Composite.add(physics.engine.world, LevelOneBodies.enemies);

        // Add assets to render class
        render.add(LevelOneAssets.grounds);
        render.add(LevelOneAssets.enemies);
        render.add(LevelOneAssets.player);

    }

    run(p5) {
        Engine.update(physics.engine);
        render.run(p5);
        physics.run();
        this.rules.run();
        this.scrollPos.run();
    }
}