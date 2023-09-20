import scrollPos from "../globals/scrollPos";
import physics from "../globals/physics";

export default class Asset {
    constructor(body) {
        this.body = body;
        this.initPosition = {
            x: body.position.x,
            y: body.position.y
        }
    }

    /**
     * Vector sum of initial body position and scroll position 
     * @returns number
     */
    initPlusScrollPosition() {
        return {
            x: this.initPosition.x - scrollPos.position.x,
            y: this.initPosition.y - scrollPos.position.y
        }
    }

    /**
     * get the gravity value from the engine
     * @returns number
     */
    getEngineGravity() {
        return physics.engine.gravity
    }
}