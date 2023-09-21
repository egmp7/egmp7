import { Collision } from "matter-js";
import Matter from "matter-js";
import type Bodies from "../types/bodies";
import type Player from "../types/player";

interface PlayerCollisions {
    ground: boolean;
    enemy: boolean;
    platform: boolean;
}

export default class Collisions {

    playerCollisions: PlayerCollisions;
    bodies: Bodies | null;
    player: Player | null;

    constructor() {
        this.playerCollisions = {
            ground: false,
            enemy: false,
            platform: false,
        }
        this.bodies = null;
        this.player = null;
    }

    run() {

        if (!this.player) return;
        if (!this.bodies) return;

        // Player -> Grounds Collisions
        if (this.checkCollision(this.player.floorSensor, this.bodies.grounds))
            this.playerCollisions.ground = true;
        else this.playerCollisions.ground = false;

        // player -> Platforms Collisions
        if (this.checkCollision(this.player.floorSensor, this.bodies.platforms))
            this.playerCollisions.platform = true;
        else this.playerCollisions.platform = false;

        // Player -> Enemies Collisions
        if (this.checkCollision(this.player.body, this.bodies.enemies))
            this.playerCollisions.enemy = true;
        else this.playerCollisions.enemy = false;
    }

    setBodies(bodies: Bodies) {
        this.bodies = bodies;
    }

    setPlayer(player: Player) {
        this.player = player
    }

    /**
     * Checks for body collisions
     * @param {Matter.Body} player 
     * @param {Matter.Body[]} bodies 
     * @returns Boolean
     */
    checkCollision(bodyA: Matter.Body, bodies: Matter.Body[]) {
        for (let i = 0; i < bodies.length; i++) {
            if (Collision.collides(bodyA, bodies[i], Matter.Pairs.create({})))
                return true;
        }
        return false;
    }

    /**
     * Returns true when the player collides with an enemy
     * @returns Boolean
     */
    isEnemyCollision() {
        return this.playerCollisions.enemy;
    }


    /**
     * Returns true when the player is on ground or a platform
     * @returns Boolean 
     */
    isPlayerOnGround() {
        return this.playerCollisions.ground || this.playerCollisions.platform;
    }
}