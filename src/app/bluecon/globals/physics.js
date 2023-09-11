import { Engine, Collision } from "matter-js";
import LevelOneBodies from "../levels/levelOneBodies";
import player from "../assets/playerBody"

class Physics {
    constructor() {
        this.engine = Engine.create();
        this.collisions = {
            ground: false
        }
    }

    run() {
        this.groundCollisions(player.floorSensor, LevelOneBodies.grounds)
    }

    groundCollisions(floorSensor, grounds) {
        this.collisions.ground = false
        grounds.forEach(ground => {
            if (Collision.collides(floorSensor, ground))
                this.collisions.ground = true
        });
    }

    isPlayerOnGround() {
        return this.collisions.ground;
    }
}

export default (new Physics)