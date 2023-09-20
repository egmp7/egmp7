import { Body } from "matter-js";
import Asset from "./asset";

export default class Structure extends Asset {
    
    constructor(body) {
        super();
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

    /**
     * Updates the initial position of the body by adding the scroll position
     */
    updateRelativeInitPosition() {
        this.relativeInitPosition.x = this.initPosition.x - this.scrollPosition.x
        this.relativeInitPosition.y = this.initPosition.y - this.scrollPosition.y
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