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
    flagPole: boolean;
    coin: null | Coin;
}
//////////////////////////////////////////////////////////
/**
 * Module in charge of checking collision between 
 * the player and other structures
 */
namespace Collisions {

    let player: Player;
    let structures: Structures;
    let playerCollision: PlayerCollision = {
        ground: false,
        platform: false,
        enemy: false,
        flagPole: false,
        coin: null,
    };

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

        // Player -> flagPole Collisions
        if (checkCollision(player.body, structures.flagPole as Structure[]))
            playerCollision.flagPole = true;
        else playerCollision.flagPole = false;

        // Player -> Coins Collisions
        playerCollision.coin = whichCollision(player.body, structures.coins as Structure[]) as Coin
    }

    /**
     * Returns the collision state between the player to the enemies
     * @returns boolean
    */
    export function isEnemyCollision(): boolean {
        return playerCollision.enemy;
    }

    /**
     * Returns the collision state between the player to the grounds and the platforms
     * @returns boolean
    */
    export function isPlayerOnGround(): boolean {
        return playerCollision.ground || playerCollision.platform;
    }

    /**
     * Returns the collision state between the player and the flagPole
     * @returns boolean
    */
    export function isPlayerOnFlagPole(): boolean {
        return playerCollision.flagPole;
    }

    /**
     * Returns a coin if the collision between the player and a coin exists
     * @returns Coin | null
    */
    export function isPlayerOnCoin(): Coin | null {
        return playerCollision.coin;
    }


    /**
     * Checks collisions between a body and an array of Structures
     * @param bodyA 
     * @param bodies 
     * @returns 
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
     * @returns Structure | null
     */
    function whichCollision(bodyA: Matter.Body, bodies: Structure[]): Structure | null {
        for (let i = 0; i < bodies.length; i++) {
            if (Collision.collides(bodyA, bodies[i].body, Pairs.create({})))
                return bodies[i]
        }
        return null;
    }
}

export default Collisions;