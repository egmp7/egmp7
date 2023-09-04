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
        
        render.add(LevelOneAssets.player)
        render.add(LevelOneAssets.grounds)
        render.add(LevelOneAssets.enemies)
        
    }

    run(p5) {
        Engine.update(physics.engine)
        render.run(p5);

        // this.checkCollisions()
    }

    checkCollisions() {
        // this.grounds.forEach(ground => {
        //     if (Collision.collides(this.player.matter, ground.matter)) console.log("ground collision")
        // });
    }
}