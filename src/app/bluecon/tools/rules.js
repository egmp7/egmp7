import { Body } from "matter-js"

export default class Rules {
    constructor(collisions,scroll) {
        this.player;
        this.collisions = collisions;
        this.scroll = scroll;
        this.yLimit = 580;
        this.playerInitPosition = {
            x: 100,
            y: 200
        };
    }

    run() {
        this.checkOffLimits(this.yLimit,this.player.main.position);
        this.checkEnemyCollision(this.collisions.isEnemyCollision());
    }

    /**
     * Checks if player passed height of window
     * @param {number*} yLimit 
     * @param {Vector} playerPosition 
     */
    checkOffLimits(yLimit, playerPosition) {
        if (playerPosition.y > yLimit) this.restart();
    }

    /**
     * Restarts the game if player collides with enemy
     * @param {Boolean*} collision 
     */
    checkEnemyCollision(collision) {
        if (collision) this.restart();
    }

    /**
     * Restarts the game
     */
    restart(){
        this.scroll.resetBodies();  // move bodies to initial position
        Body.setPosition(this.player.main, this.playerInitPosition); // mode player to initial position
    }

    /**
     * Sets the player object
     * @param {Object} playerBody 
     */
    setPlayer(playerBody){
        this.player = playerBody;
    }
}