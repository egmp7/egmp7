import { Collision } from "matter-js";

export default class Collisions {
    constructor() {
        this.collisions = {
            ground: false,
            enemy: false,
            platform: false,
        }
        this.bodies;
        this.player;
    }

    run() {

        // Player -> Grounds Collisions
        if (this.checkCollision(this.player.floorSensor, this.bodies.grounds))
            this.collisions.ground = true;
        else this.collisions.ground = false;

        // player -> Platforms Collisions
        if (this.checkCollision(this.player.floorSensor, this.bodies.platforms))
            this.collisions.platform = true;
        else this.collisions.platform = false;

        // Player -> Enemies Collisions
        if (this.checkCollision(this.player.body, this.bodies.enemies))
            this.collisions.enemy = true;
        else this.collisions.enemy = false;
    }

    setBodies(bodies) {
        this.bodies = bodies;
    }

    setPlayer(playerBody) {
        this.player = playerBody
    }

    /**
     * Checks for body collisions
     * @param {Body} player 
     * @param {Array<Body>} bodies 
     * @returns Boolean
     */
    checkCollision(player, bodies) {
        for (let i = 0; i < bodies.length; i++) {
            if (Collision.collides(player, bodies[i]))
                return true;
        }
        return false;
    }

    /**
     * Returns true when the player collides with an enemy
     * @returns Boolean
     */
    isEnemyCollision() {
        return this.collisions.enemy;
    }


    /**
     * Returns true when the player is on ground or a platform
     * @returns Boolean 
     */
    isPlayerOnGround() {
        return this.collisions.ground || this.collisions.platform;
    }
}