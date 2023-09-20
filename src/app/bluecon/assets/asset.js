import scroll from "../globals/scrollPos";
import physics from "../globals/physics";
import { Body } from "matter-js"

export default class Asset {
    constructor(body) {
        this.body = body;
        this.initPosition = {
            x: body.position.x,
            y: body.position.y
        }
    }

    /**
     * Updates the initial position of the body by adding the scroll position
     */
    updateInitPosition() {
        this.initPosition.x -= scroll.position.x
        this.initPosition.y -= scroll.position.y
    }

    /**
     * get the gravity value from the engine
     * @returns number
     */
    getEngineGravity() {
        return physics.engine.gravity
    }

    /**
     * Set Inertia of body
     * @param {number} value 
     */
    setInertia(value) {
        Body.setInertia(this.body, value);
    }

    /**
     * Set Velocity of body
     * @param {Vector} velocity 
     */
    setVelocity(velocity) {
        Body.setVelocity(this.body, velocity);
    }

    /**
     * Apply a force to body
     * @param {Vector} force 
     */
    applyForce(force) {
        Body.applyForce(this.body, this.body.position, force)
    }
}