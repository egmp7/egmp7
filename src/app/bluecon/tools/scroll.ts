import { Body } from "matter-js"
import type Matter from "matter-js";
import type Bodies from "../types/bodies"
import type Player from "../types/player";

/**
 * Global, controls animation movement of player and all bodies
 * the position property is used to update the position of the assets
 */
export default class Scroll {
    position: Matter.Vector;
    bodies: Bodies | null
    player: Player | null
    constructor() {
        this.position = { x: 0, y: 0 }
        this.bodies = null;
        this.player = null;
    }
    run() {
        if (!this.player) return;
        
        this.checkScroll(this.player.main);
    }

    /**
     * Checks if the player is at the limits of the canvas
     * and scrolls if needs it
     * @param {Vector} playerPosition 
     */
    checkScroll(player: Matter.Body) {
        const xRightLimit = 400;
        const xLeftLimit = 50;
        const x = 6;
        // left canvas limit
        if (player.position.x < xLeftLimit)
            this.scroll(xLeftLimit, +x, player);
        // right canvas limit
        if (player.position.x > xRightLimit)
            this.scroll(xRightLimit, -x, player);
    }

    /**
     * Updates the scroll position, limits 
     * the movement of the player and scrolls
     * all the bodies by x distance
     * @param {number} limit 
     * @param {number} x 
     */
    scroll(limit: number, x: number, player: Matter.Body) {

        if (!this.bodies) return;

        // update scrolling position
        this.position.x -= x

        // set player position 
        Body.setPosition(player, {
            x: limit,
            y: player.position.y
        })

        // move all bodies
        this.scrollBodies(this.bodies, x)
    }

    /**
     * Reset the position of all the bodies and the scroll position
     */
    resetBodies() {

        if (!this.bodies) return;

        // reset all bodies position
        this.scrollBodies(this.bodies, this.position.x)
        // reset scroll position
        this.position.x = 0;
    }

    /**
     * Scrolls bodies by x distance
     * @param {Object} bodies 
     * @param {number} x 
     */
    scrollBodies(bodies: Bodies, x: number) {
        for (const property in bodies) {
            bodies[property as keyof Bodies].forEach(body => {
                Body.setPosition(body, {
                    x: body.position.x + x,
                    y: body.position.y
                })
            });
        }
    }

    setBodies(bodies: Bodies) {
        this.bodies = bodies;
    }

    setPlayer(player: Player) {
        this.player = player
    }
}