import type Structure from "../abstract/structure";
import Loader, { type Structures } from "./Loader";
import { Collision, Pairs } from "matter-js";

interface PlayerCollision {
    ground: boolean;
    platform: boolean;
    enemy: boolean;
}

namespace Collisions {

    let playerCollision: PlayerCollision = {
        ground: false,
        platform: false,
        enemy: false
    };
    let structures: Structures;
    let player: Structure;

    /**
     * Checks for body collisions
     * @param {Matter.Body} player 
     * @param {Matter.Body[]} bodies 
     * @returns Boolean
     */
    function checkCollision(bodyA: Matter.Body, bodies: Structure[]): boolean {
        for (let i = 0; i < bodies.length; i++) {
            if (Collision.collides(bodyA, bodies[i].body, Pairs.create({})))
                return true;
        }
        return false;
    }

    export function setCollisionElements(): void {
        structures = Loader.getStructures();
        player = Loader.getPlayerStructure();
    }

    export function run(): void {

        // Player -> Grounds Collisions
        if (checkCollision(player.body.parts[2], structures.grounds as Structure[]))
            playerCollision.ground = true;
        else playerCollision.ground = false;

        // // player -> Platforms Collisions
        // if (checkCollision(this.player.floorSensor, this.bodies.platforms))
        //     this.playerCollisions.platform = true;
        // else this.playerCollisions.platform = false;

        // // Player -> Enemies Collisions
        // if (checkCollision(this.player.body, this.bodies.enemies))
        //     this.playerCollisions.enemy = true;
        // else this.playerCollisions.enemy = false;

    }

    /**
     * Returns true when the player collides with an enemy
     * @returns Boolean
     */
    export function isEnemyCollision(): boolean {
        return playerCollision.enemy;
    }


    /**
     * Returns true when the player is on ground or a platform
     * @returns Boolean 
     */
    export function isPlayerOnGround(): boolean {
        return playerCollision.ground || playerCollision.platform;
    }

}

export default Collisions;