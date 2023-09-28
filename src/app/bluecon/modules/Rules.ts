import Loader from "./Loader";
import Scroll from "./Scroll";
import Collisions from "./Collisions";
import Render from "./Render";
import Events from "./Events";
import { p5 } from "../components/Sketch";
import type Player from "../graphs/structures/player";
import type Status from "../graphs/status";
import type Button from "../abstract/button";
import type Menu from "../graphs/menu";
import { type Drawings, type Structures } from "../constants/assetTypes";

enum GameState {
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
        document.addEventListener('keydown', (event) => {
            if (gameState === GameState.Init && event.code === "Enter") startGame();
        });
    }

    export function run(): void {
        if (checkOffLimits(700, player.body.position)) restartGame();
        if (Collisions.isEnemyCollision()) restartGame();
        //if (status.lives < 0) gameOver();
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
    function restartGame(): void {
        status.setLives(status.lives -1);
        Scroll.restartScroll();
        player.setPosition(player.initPosition); // mode player to initial position
    }

    function initializeGraphs(): void {
        Render.setVisible(drawings.background, true);
        Render.setVisible(drawings.clouds, true);
        Render.setVisible(structures.grounds, true);
        Render.setVisible(structures.platforms, true);
        Render.setVisible(menu, true);
        p5.noLoop();
    }

    function startGame(): void {
        Render.setVisible(menu, false);
        Render.setVisible(player, true);
        Render.setVisible(status, true);
        Render.setVisible(buttons, true);
        Render.setVisible(structures.enemies, true);

        p5.loop();
    }
}

export default Rules