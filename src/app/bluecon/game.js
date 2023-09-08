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
        physics.checkGroundCollisions(LevelOneBodies.player.parts[2], LevelOneBodies.grounds)
        physics.checkLeftCollisions(LevelOneBodies.player.parts[3], LevelOneBodies.grounds)
        physics.checkRightCollisions(LevelOneBodies.player.parts[4], LevelOneBodies.grounds)
    }
}