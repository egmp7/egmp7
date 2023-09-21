import { Engine, Composite } from "matter-js";
import type Matter from "matter-js";
import type Bodies from "../types/bodies";
import type Player from "../types/player";

/**
 * Access to the main engine from MatterJS
 */
export default class Physics {
    engine: Matter.Engine;
    bodies: Bodies | null;
    player: Player | null;
    constructor() {
        this.engine = Engine.create();
        this.bodies = null;
        this.player = null;
    }

    addElementsToWorld() {
        if (this.player == null) return;
        if (this.bodies == null) return;

        Composite.add(this.engine.world, this.player.main);
        for (const bodies in this.bodies) {
            Composite.add(this.engine.world, this.bodies[bodies as keyof Bodies])
        }
    }

    run() {
        Engine.update(this.engine);
    }

    setBodies(bodies: Bodies) {
        this.bodies = bodies;
    }

    setPlayer(player: Player) {
        this.player = player;
    }
}