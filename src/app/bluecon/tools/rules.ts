import { Body } from "matter-js"
//////////////////////////////////////////////////
import type Matter from "matter-js";
import type Player from "../types/player";
import type Collisions from "./collisions";
import type Scroll from "./scroll";
import type Control from "./control";
import type Menu from "./menu"
//////////////////////////////////////////////////
export default class Rules {
    player: Player | null;
    collisions: Collisions;
    scroll: Scroll;
    yLimit: number;
    playerInitPosition: Matter.Vector;
    control: Control;
    menu: Menu;

    constructor(collisions: Collisions, scroll: Scroll, control:Control, menu: Menu) {
        this.player = null;
        this.collisions = collisions;
        this.scroll = scroll;
        this.control = control
        this.menu = menu;
        this.yLimit = 580;
        this.playerInitPosition = {
            x: 100,
            y: 200
        };
    }

    run(): void {
        if (!this.player) return;
        this.checkOffLimits(this.yLimit, this.player.main.position);
        this.checkEnemyCollision(this.collisions.isEnemyCollision());
        this.checkControl();
    }

    checkControl(){
        console.log(this.menu.isVisible)
        if (this.control.jump) this.menu.setIsVisible(false)
    }

    /**
     * Checks if player passed height of window
     * @param {number} yLimit 
     * @param {Matter.Vector} playerPosition 
     */
    checkOffLimits(yLimit: number, playerPosition: Matter.Vector): void {
        if (playerPosition.y > yLimit) this.restart();
    }

    /**
     * Restarts the game if player collides with enemy
     * @param {Boolean} collision 
     */
    checkEnemyCollision(collision: Boolean) {
        if (collision) this.restart();
    }

    /**
     * Restarts the game
     */
    restart() {
        if (!this.player) return;
        this.scroll.resetBodies();  // move bodies to initial position
        Body.setPosition(this.player.main, this.playerInitPosition); // mode player to initial position
    }

    /**
     * Sets the player object
     * @param {Player} playerBody 
     */
    setPlayer(player: Player) {
        this.player = player;
    }
}