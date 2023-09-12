import player from "../assets/playerBody"
import LevelOneBodies from "../levels/levelOneBodies"
import { Body } from "matter-js"

class ScrollPos {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
    run() {
        this.checkScroll(player.main.position, this.position);
    }

    checkScroll(playerPosition) {
        const xRightLimit = 400;
        const xLeftLimit = 50;
        const speed = 6;
        if (playerPosition.x < xLeftLimit)
            this.scroll(xLeftLimit, +speed);
        if (playerPosition.x > xRightLimit)
            this.scroll(xRightLimit, -speed);
    }

    scroll(limit, speed) {
        Body.setPosition(player.main, {
            x: limit,
            y: player.main.position.y
        })
        this.moveBodies(LevelOneBodies, speed)
        this.position.x -= speed
    }

    moveBodies(allBodies, speed) {

        for (const property in allBodies) {

            allBodies[property].forEach(body => {
                Body.setPosition(body, {
                    x: body.position.x + speed,
                    y: body.position.y
                })
            });
        }
    }

    resetBodies() {
        for (const property in LevelOneBodies) {

            LevelOneBodies[property].forEach(body => {
                Body.setPosition(body, {
                    x: body.position.x + this.position.x,
                    y: body.position.y
                })
            });
        }
        this.position.x = 0;
    }
}

export default new ScrollPos;