import Loader from "./Loader";
import { Collision, Pairs } from "matter-js";
//////////////////////////////////////////////////////////
import type Structure from "../abstract/structure";
import type Player from "../graphs/structures/player";
import type Coin from "../graphs/structures/coin";
import { type Structures } from "../constants/assetTypes";
//////////////////////////////////////////////////////////
interface PlayerCollision {
    ground: boolean;
    platform: boolean;
    enemy: boolean;
}
//////////////////////////////////////////////////////////
namespace Collisions {

    let playerCollision: PlayerCollision = {
        ground: false,
        platform: false,
        enemy: false
    };
    let structures: Structures;
    let player: Player;

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

    /**
     * Checks collision between a body and an Array of Structures
     * @param bodyA 
     * @param bodies 
     * @returns Structure
     */
    function whichCollision(bodyA: Matter.Body, bodies: Structure[]): Structure | null {
        for (let i = 0; i < bodies.length; i++) {
            if (Collision.collides(bodyA, bodies[i].body, Pairs.create({})))
                return bodies[i]
        }
        return null;
    }

    export function init(): void {
        structures = Loader.getStructures();
        player = Loader.getPlayer();
    }

    export function run(): void {

        // Player -> Grounds Collisions
        if (checkCollision(player.floorSensor, structures.grounds as Structure[]))
            playerCollision.ground = true;
        else playerCollision.ground = false;

        // player -> Platforms Collisions
        if (checkCollision(player.floorSensor, structures.platforms as Structure[]))
            playerCollision.platform = true;
        else playerCollision.platform = false;

        // Player -> Enemies Collisions
        if (checkCollision(player.body, structures.enemies as Structure[]))
            playerCollision.enemy = true;
        else playerCollision.enemy = false;

        // Player -> Coins Collisions
        var coin = whichCollision(player.body, structures.coins as Structure[]) as Coin 
        if (coin !== null ) {
            coin.setIsPicked(true);
        }
        
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