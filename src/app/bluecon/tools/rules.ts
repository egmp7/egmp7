import { Body } from "matter-js"
//////////////////////////////////////////////////
import type Matter from "matter-js";
import type Player from "../types/player";
import type Collisions from "./collisions";
import type Scroll from "./scroll";
import type Control from "./control";
import type Menu from "./menu"
import type Render from "./render";
import type Structure from "../assets/structures/structure";
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
    isGamePlaying: boolean;

    constructor(collisions: Collisions, scroll: Scroll, control: Control, menu: Menu, render: Render) {
        this.player = null;
        this.collisions = collisions;
        this.scroll = scroll;
        this.control = control
        this.menu = menu;
        this.render = render;
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
        if (this.checkControl()) this.initGame(this.render,this.render.graphs);
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
        this.startGroup(graphs.player as Structure[]);
        this.startGroup(graphs.enemies as Structure[]);
        this.setIsGamePlaying(true);
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
        this.scroll.resetBodies();  // move bodies to initial position
        Body.setPosition(this.player.main, this.playerInitPosition); // mode player to initial position
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