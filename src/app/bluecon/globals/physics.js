import { Engine, Collision } from "matter-js";

class Physics {
    constructor() {
        this.engine = Engine.create();
        this.collisions = {
            ground: false,
            left: false,
            right: false
        }
    }

    checkGroundCollisions( player,  grounds ) {
        this.collisions.ground = false
        grounds.forEach(ground => {
            if (Collision.collides( player, ground )) this.collisions.ground = true
        });
    }

    isPlayerOnGround(){
        return this.collisions.ground;
    }
}

export default (new Physics)