import { Composite, Engine, Collision } from "matter-js";
import LevelOneBodies from "./levels/levelOneBodies";
import LevelOneAssets from "./levels/levelOneAssets";
import render from "./globals/render"
import physics from "./globals/physics";

export default class Game {
    constructor() {
        
        Composite.add(physics.engine.world,LevelOneBodies.player)
        Composite.add(physics.engine.world,LevelOneBodies.grounds)
        Composite.add(physics.engine.world,LevelOneBodies.enemies)
        
        render.add(LevelOneAssets.grounds)
        render.add(LevelOneAssets.enemies)
        render.add(LevelOneAssets.player)
        
    }

    run(p5) {
        Engine.update(physics.engine)
        render.run(p5);
        physics.checkGroundCollisions(LevelOneBodies.player, LevelOneBodies.grounds)
    }
}