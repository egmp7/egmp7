import { Composite, Collision } from "matter-js";
import { Matter } from "./matter";
import { level1 } from "./level1";

export class Game {
    constructor() {
        this.player = level1.player;
        this.grounds = level1.grounds;
        this.enemies = level1.enemies;
        this.matter = new Matter()
        this.matter.addElementsToEngine(this.addToMatterComposite())
    }

    run(p5) {
        this.player.run(p5)
        this.grounds.forEach(ground => {
            ground.run(p5)
        });

        this.checkCollisions()
    }

    addToMatterComposite() {
        const composite = Composite.create()

        Composite.add(composite, this.player.matter)

        this.grounds.forEach(ground => {
            Composite.add(composite, ground.matter)
        });

        return composite
    }

    checkCollisions() {
        this.grounds.forEach(ground => {
            if (Collision.collides(this.player.matter, ground.matter)) console.log("ground collision")
        });
    }
}