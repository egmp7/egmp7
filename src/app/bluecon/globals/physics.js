import { Engine, Collision } from "matter-js";
import LevelOneBodies from "../levels/levelOneBodies";
import player from "../assets/playerBody"

/**
 * Controls collisions and has access to the main engine from MatterJS
 */
export default class Physics {
    constructor() {
        this.engine = Engine.create();
        this.collisions = {
            ground: false,
            enemy: false,
            platform: false,
        }
    }

    run() {

        if (this.checkCollision(player.floorSensor, LevelOneBodies.grounds))
            this.collisions.ground = true;
        else this.collisions.ground = false;

        if (this.checkCollision(player.floorSensor, LevelOneBodies.platforms))
            this.collisions.platform = true;
        else this.collisions.platform = false;

        if (this.checkCollision(player.body, LevelOneBodies.enemies))
            this.collisions.enemy = true;
        else this.collisions.enemy = false;

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
}