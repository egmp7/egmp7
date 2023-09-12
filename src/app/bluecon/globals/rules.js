import player from "../assets/playerBody"
import physics from "./physics"
import { Body } from "matter-js"

class Rules {
    constructor() {

        this.playerInitPosition = {
            x: 100,
            y: 200
        }
    }

    run() {
        this.checkOffLimits()
        this.checkEnemyCollision()
    }

    checkOffLimits() {
        const yLimit = 580;
        if (player.main.position.y > yLimit)
            Body.setPosition(player.main, this.playerInitPosition)
    }
    checkEnemyCollision() {
        if (physics.isEnemyCollision())
            Body.setPosition(player.main, this.playerInitPosition)
    }
}

export default Rules