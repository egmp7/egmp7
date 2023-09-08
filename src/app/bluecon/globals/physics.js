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

    checkLeftCollisions( player,  grounds ) {
        this.collisions.left = false
        grounds.forEach(ground => {
            if (Collision.collides( player, ground )) this.collisions.left = true
        });
    }

    checkRightCollisions( player,  grounds ) {
        this.collisions.right = false
        grounds.forEach(ground => {
            if (Collision.collides( player, ground )) this.collisions.right = true
        });
    }

    isPlayerCollidingLeft(){
        return this.collisions.left;
    }

    isPlayerCollidingRight(){
        return this.collisions.right;
    }
}

export default (new Physics)