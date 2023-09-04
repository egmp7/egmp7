import { Composite, Engine, Collision } from "matter-js";
import Render from "./render"
import LevelOne from "./levelOne";
import physics from "./physics";

export default class Game {
    constructor() {
        
        Composite.add(physics.engine.world,LevelOne.player)
        Composite.add(physics.engine.world,LevelOne.grounds)
        Composite.add(physics.engine.world,LevelOne.enemies)
        
        Render.add(LevelOne.player , "player")
        Render.add(LevelOne.grounds , "grounds")
        Render.add(LevelOne.enemies , "enemies")
        
    }

    run(p5) {
        p5.background(255);
        Engine.update(physics.engine)
        Render.run(p5);

        // this.checkCollisions()
    }

    checkCollisions() {
        // this.grounds.forEach(ground => {
        //     if (Collision.collides(this.player.matter, ground.matter)) console.log("ground collision")
        // });
    }
}