import { Body } from "matter-js";
import Asset from "../asset";
//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export interface Area { w: number, h: number };
//////////////////////////////////////////////////////
export default abstract class Structure extends Asset {



    abstract body: Matter.Body;
    position: Matter.Vector;
    area: Area | undefined;
    initPosition: Matter.Vector;
    relativeInitPosition: Matter.Vector;
    initVelocity: Matter.Vector | undefined;

    constructor(position: Matter.Vector, area?: Area, velocity?: Matter.Vector) {
        super();
        this.position = position;
        this.area = area;
        this.initPosition = {
            x: position.x,
            y: position.y
        };
        this.relativeInitPosition = {
            x: position.x,
            y: position.y
        };

        this.initVelocity = velocity;
    }

    abstract createBody(): Body

    /* Initializes a body when game starts */
    initBody() {
        this.setPosition(this.initPosition);
        if (this.initVelocity) this.setVelocity(this.initVelocity)
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

    /**
     * Sets the position of a body
     * @param position 
     */
    setPosition(position: Matter.Vector): void {
        Body.setPosition(this.body, position);
    }
}