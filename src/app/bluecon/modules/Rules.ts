import { p5 } from "../components/Sketch2";
import Loader from "./Loader";
import Scroll from "./Scroll";
import Collisions from "./Collisions";
import type Player from "../assets/structures/player";


namespace Rules {

    let player: Player;

    export function init(): void {
        player = Loader.getPlayer();
    }

    export function run():void{
        if(checkOffLimits(p5.height,player.body.position)) restart();
        if (Collisions.isEnemyCollision()) restart();
    }

    /**
         * Checks if player passed height of window
         * @param {number} yLimit 
         * @param {Matter.Vector} playerPosition 
         */
    function checkOffLimits(yLimit: number, playerPosition: Matter.Vector): boolean {
        if (playerPosition.y > yLimit) return true
        return false;
    }

    /**
     * Restarts the game
     */
    function restart(): void {
        //if (!this.player) return;
        // this.status.setLives(this.status.lives - 1);
        // this.scroll.resetBodies();  // move bodies to initial position
        Scroll.restartScroll();
        player.setPosition(player.initPosition); // mode player to initial position
    }

}

export default Rules