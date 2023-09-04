import { Composite, Engine, Collision } from "matter-js";
import Physics from "./physics";
import Render from "./render"
import LevelOne from "./levelOne";

export class Game {
    constructor() {
        
        Composite.add(Physics.engine.world,LevelOne.player)
        Composite.add(Physics.engine.world,LevelOne.grounds)
        Composite.add(Physics.engine.world,LevelOne.enemies)
        
        Render.add(LevelOne.player , "player")
        Render.add(LevelOne.grounds , "grounds")
        Render.add(LevelOne.enemies , "enemies")
        
    }

    run(p5) {
        p5.background(255);
        Engine.update(Physics.engine)
        Render.run(p5);


        // this.player.run(p5)
        // this.grounds.forEach(ground => {
        //     ground.run(p5)
        // });

        // this.enemies.forEach(enemy => {
        //     enemy.run(p5)
        // });

        // this.checkCollisions()
    }

    addToMatterComposite() {
        // const composite = Composite.create()

        // Composite.add(composite, this.player.matter)

        // this.grounds.forEach(ground => {
        //     Composite.add(composite, ground.matter)
        // });
        
        // this.enemies.forEach(enemy => {
        //     Composite.add(composite, enemy.body)
        // });

        // return composite
    }

    checkCollisions() {
        // this.grounds.forEach(ground => {
        //     if (Collision.collides(this.player.matter, ground.matter)) console.log("ground collision")
        // });
    }
}