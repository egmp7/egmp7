import player from "../assets/playerBody"
//import physics from "./physics"
//import scrollPos from "./scrollPos"
import { Body } from "matter-js"

export default class Rules {
    constructor(physics,scroll) {
        this.physics = physics;
        this.scroll = scroll;
        this.playerInitPosition = {
            x: 100,
            y: 200
        };
    }

    run() {
        //console.log('rules')
        this.checkOffLimits();
        this.checkEnemyCollision();
    }

    checkOffLimits() {
        const yLimit = 580;
        if (player.main.position.y > yLimit) this.restart();
    }

    checkEnemyCollision() {
        if (this.physics.isEnemyCollision()) this.restart();
    }

    restart(){
        this.scroll.resetBodies();
        Body.setPosition(player.main, this.playerInitPosition);
    }
}