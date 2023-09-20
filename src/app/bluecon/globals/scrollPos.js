import player from "../assets/playerBody"
import LevelOneBodies from "../levels/levelOneBodies"
import { Body } from "matter-js"

/**
 * Global, controls animation movement of player and all bodies
 * the position property is used to update the position of the assets
 */
export default class Scroll {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
    run() {
        this.checkScroll(player.main.position);
    }

    /**
     * Checks if the player is at the limits of the canvas
     * and scrolls if needs it
     * @param {Vector} playerPosition 
     */
    checkScroll(playerPosition) {
        const xRightLimit = 400;
        const xLeftLimit = 50;
        const x = 6;
        // left canvas limit
        if (playerPosition.x < xLeftLimit)
            this.scroll(xLeftLimit, +x);
        // right canvas limit
        if (playerPosition.x > xRightLimit)
            this.scroll(xRightLimit, -x);
    }

    /**
     * Updates the scroll position, limits 
     * the movement of the player and scrolls
     * all the bodies by x distance
     * @param {number} limit 
     * @param {number} x 
     */
    scroll(limit, x) {

        // update scrolling position
        this.position.x -= x

        // set player position 
        Body.setPosition(player.main, {
            x: limit,
            y: player.main.position.y
        })

        // move all bodies
        this.scrollBodies(LevelOneBodies, x)
    }

    /**
     * Reset the position of all the bodies and the scroll position
     */
    resetBodies() {

        // reset all bodies position
        this.scrollBodies(LevelOneBodies, this.position.x)
        // reset scroll position
        this.position.x = 0;
    }

    /**
     * Scrolls bodies by x distance
     * @param {Object} bodies 
     * @param {number} x 
     */
    scrollBodies(bodies, x) {
        for (const property in bodies) {
            bodies[property].forEach(body => {
                Body.setPosition(body, {
                    x: body.position.x + x,
                    y: body.position.y
                })
            });
        }
    }
}