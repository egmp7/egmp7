import Loader from "./Loader";
import Scroll from "./Scroll";
import Collisions from "./Collisions";
import Render from "./Render";
import AudioPlayer from "./AudioPlayer";
import { p5 } from "../components/Sketch";
import { MenuType } from "../graphs/menu";
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
    let loopFlag:boolean = false;

    export function init(): void {
        player = Loader.getPlayer();
        status = Loader.getStatus();
        menu = Loader.getMenu();
        buttons = Loader.getButtonsArray();
        structures = Loader.getStructures();
        drawings = Loader.getDrawings();

        initializeGraphs();
        document.addEventListener('keydown', (event) => {
            if ((gameState === GameState.Init || gameState === GameState.Over) && event.code === "Enter") runGame();
        });
        document.addEventListener('mousedown', (event) => {
            if ((gameState === GameState.Init || gameState === GameState.Over)) runGame();
        });
    }

    export function run(): void {
        if (gameState !== GameState.Running) loopFlag = true;
        else loopFlag = false;
        if (checkOffLimits(700, player.body.position)) deathByFall();
        if (Collisions.isEnemyCollision()) deathByEnemy();
        if (status.lives < 0) gameOver();
        if (loopFlag) p5.noLoop();
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

    function deathByFall(){
        AudioPlayer.canyonFallPlay();
        restartGame();
    }

    function deathByEnemy(){
        AudioPlayer.enemyPlay();
        restartGame();
    }

    /**
     * Restarts the game
     */
    function restartGame(): void {
        status.setLives(status.lives - 1);
        Scroll.restartScroll();
        player.setPosition(player.initPosition); // mode player to initial position
    }

    function initializeGraphs(): void {
        Render.setVisible(drawings.background, true);
        Render.setVisible(drawings.clouds, true);
        Render.setVisible(structures.grounds, true);
        Render.setVisible(structures.platforms, true);
        Render.setVisible(menu, true);
        menu.setType(MenuType.Init)
        gameState = GameState.Init;
    }

    function runGame(): void {
        Render.setVisible(menu, false);
        Render.setVisible(player, true);
        Render.setVisible(status, true);
        Render.setVisible(buttons, true);
        Render.setVisible(structures.coins, true);
        Render.setVisible(structures.enemies, true);
        AudioPlayer.init();
        gameState = GameState.Running;
        p5.loop();
    }

    function gameOver(): void {
        Render.setVisible(menu, true);
        Render.setVisible(player, false);
        Render.setVisible(status, false);
        Render.setVisible(buttons, false);
        Render.setVisible(structures.enemies, false);
        menu.setType(MenuType.GameOver);
        status.setLives(3);
        gameState = GameState.Over;
    }
}

export default Rules