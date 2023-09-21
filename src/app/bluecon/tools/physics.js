import { Engine, Composite } from "matter-js";

/**
 * Access to the main engine from MatterJS
 */
export default class Physics {
    constructor() {
        this.engine = Engine.create();
        this.bodies;
        this.player;
    }

    addElementsToWorld() {
        Composite.add(this.engine.world, this.player.main);
        for (const bodies in this.bodies) {
            Composite.add(this.engine.world, this.bodies[bodies])
        }
    }

    run() {
        Engine.update(this.engine);
    }

    setBodies(bodies) {
        this.bodies = bodies;
    }

    setPlayer(player) {
        this.player = player;
    }
}