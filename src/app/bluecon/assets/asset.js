import scroll from "../globals/scrollPos";
import physics from "../globals/physics";
import { Body } from "matter-js"

export default class Asset {
    /**
     * @param {Matter.Body} body 
     * @param {Vector} position 
     */
    constructor(body, position) {
        // Asset is a Body
        if (body != undefined) {
            this.body = body;
            this.initPosition = {
                x: body.position.x,
                y: body.position.y
            };
            this.relativeInitPosition = {
                x: body.position.x,
                y: body.position.y
            };
        }
        // Asset is a P5 element
        else {
            this.position = {
                x: position.x,
                y: position.y
            };
            this.relativePosition = position;
        }
    }

    /**
     * Updates the initial position of the body by adding the scroll position
     */
    updateRelativeInitPosition() {
        this.relativeInitPosition.x = this.initPosition.x - scroll.position.x
        this.relativeInitPosition.y = this.initPosition.y - scroll.position.y
    }

    /**
     * Updates position of the body by adding the scroll position
     */
    updateRelativePosition() {
        this.relativePosition.x = this.position.x - scroll.position.x;
        this.relativePosition.y = this.position.y - scroll.position.y;
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
     * Set static body
     * @param {boolean} bool 
     */
    setStatic(bool) {
        Body.setStatic(this.body, bool);
    }

    /**
     * Apply a force to body
     * @param {Vector} force 
     */
    applyForce(force) {
        Body.applyForce(this.body, this.body.position, force)
    }
}