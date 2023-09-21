import { Body } from "matter-js";
import Asset from "../asset";
//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export default abstract class Structure extends Asset {

    body: Matter.Body;
    initPosition: Matter.Vector;
    relativeInitPosition: Matter.Vector;

    constructor(body: Matter.Body) {
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
    setInertia(value: number) {
        Body.setInertia(this.body, value);
    }

    /**
     * Set Velocity of body
     * @param {Matter.Vector} velocity 
     */
    setVelocity(velocity: Matter.Vector) {
        Body.setVelocity(this.body, velocity);
    }

    /**
     * Set static body
     * @param {boolean} bool 
     */
    setStatic(bool: boolean) {
        Body.setStatic(this.body, bool);
    }

    /**
     * Apply a force to body
     * @param {Matter.Vector} force 
     */
    applyForce(force: Matter.Vector) {
        Body.applyForce(this.body, this.body.position, force)
    }
}