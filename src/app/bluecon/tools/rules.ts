import { Body } from "matter-js"
//////////////////////////////////////////////////
import type Matter from "matter-js";
import type Player from "../types/player";
import type Collisions from "./collisions";
import type Scroll from "./scroll";
import type Control from "./control";
import type Menu from "../graphs/menu"
import type Render from "./render";
import type Structure from "../abstract/structure";
import type Status from "../graphs/status";
//////////////////////////////////////////////////
export default class Rules {
    player: Player | null;
    collisions: Collisions;
    scroll: Scroll;
    yLimit: number;
    playerInitPosition: Matter.Vector;
    control: Control;
    menu: Menu;
    render: Render;
    status: Status;
    isGamePlaying: boolean;

    constructor(collisions: Collisions, scroll: Scroll, control: Control, menu: Menu, render: Render, status: Status) {
        this.player = null;
        this.collisions = collisions;
        this.scroll = scroll;
        this.control = control
        this.menu = menu;
        this.render = render;
        this.status = status;
        this.yLimit = 580;
        this.isGamePlaying = false;
        this.playerInitPosition = {
            x: 100,
            y: 200
        };
    }

    run(): void {
        if (!this.player) return;
        // player passed limits
        if (this.checkOffLimits(this.yLimit, this.player.main.position)) this.restart();
        // player collide with an enemy
        if (this.collisions.isEnemyCollision()) this.restart();
        // check if user starts the game
        if (this.checkControl()) this.initGame(this.render, this.render.graphs);
        // check if game over
        if (this.checkGameOver(this.status.lives)) this.gameOver(this.render, this.render.graphs);
    }

    /**
     * Checks if user presses jump to start the game
     * @returns 
     */
    checkControl(): boolean {
        if (!this.render.graphs) return false;
        if (this.control.jump && !this.isGamePlaying) return true;
        return false;
    }

    /**
     * Game initializer 
     * @returns void
     */
    initGame(render: Render, graphs: any) {

        render.hideGroup(graphs.menu);
        render.showGroup(graphs.player);
        render.showGroup(graphs.enemies);
        render.showGroup(graphs.status);
        this.startGroup(graphs.player as Structure[]);
        this.startGroup(graphs.enemies as Structure[]);
        this.setIsGamePlaying(true);
    }

    /**
     * Game over
     * @param render 
     * @param graphs 
     */
    gameOver(render: Render, graphs: any){
        render.showGroup(graphs.menu);
        render.hideGroup(graphs.player);
        render.hideGroup(graphs.enemies);
        render.hideGroup(graphs.status);
        this.status.setLives(3);
        this.setIsGamePlaying(false);
    }

    /**
     * Structure initializer
     * @param group 
     */
    startGroup(group: Structure[]): void {
        group.forEach((structure: Structure) => {
            structure.initBody();
        })
    }

    /**
     * Checks if player passed height of window
     * @param {number} yLimit 
     * @param {Matter.Vector} playerPosition 
     */
    checkOffLimits(yLimit: number, playerPosition: Matter.Vector): boolean {
        if (playerPosition.y > yLimit) return true
        return false;
    }

    /**
     * Restarts the game
     */
    restart(): void {
        if (!this.player) return;
        this.status.setLives(this.status.lives - 1);
        this.scroll.resetBodies();  // move bodies to initial position
        Body.setPosition(this.player.main, this.playerInitPosition); // mode player to initial position
    }

    /**
     * Checks the number of lives
     * @param lives 
     * @returns 
     */
    checkGameOver(lives: number): boolean {
        if (lives < 0) return true;
        return false;
    }

    /**
     * Sets the player object
     * @param {Player} playerBody 
     */
    setPlayer(player: Player): void {
        this.player = player;
    }

    /**
     * Sets is Game Playing attribute
     * @param bool 
     */
    setIsGamePlaying(bool: boolean): void {
        this.isGamePlaying = bool;
    }
}