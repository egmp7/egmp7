import Loader from "./Loader";
import Scroll from "./Scroll";
import Collisions from "./Collisions";
import Render from "./Render";
import type Player from "../graphs/structures/player";
import type Status from "../graphs/status";
import type Button from "../abstract/button";
import type Menu from "../graphs/menu";
import {type Drawings, type Structures } from "../constants/assetTypes";

enum GameState{
    Init,
    Pause,
    Running,
    Win,
    Over
}

namespace Rules {

    let player: Player;
    let status: Status;
    let menu: Menu;
    let buttons: Button[];
    let structures: Structures;
    let drawings: Drawings
    let gameState: GameState;

    export function init(): void {
        player = Loader.getPlayer();
        status = Loader.getStatus();
        menu = Loader.getMenu();
        buttons = Loader.getButtonsArray();
        structures = Loader.getStructures();
        drawings = Loader.getDrawings();
        gameState = GameState.Init;

        initializeGraphs();
    }

    export function run():void{
        if(checkOffLimits(700,player.body.position)) restart();
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

    function initializeGraphs(): void {
        Render.setVisible(drawings.background,true);
        Render.setVisible(drawings.clouds,true);
        Render.setVisible(structures.grounds, true);
        Render.setVisible(structures.platforms, true);
        Render.setVisible(menu, true);
    }
}

export default Rules