import { Body } from "matter-js";
import Graph from "./graph";
//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export interface Area { w: number, h: number };
//////////////////////////////////////////////////////
export default abstract class Structure extends Graph {

    abstract body: Matter.Body;
    area: Area;
    initPosition: Matter.Vector;
    initVelocity: Matter.Vector | undefined;

    constructor(position: Matter.Vector, area: Area, velocity?: Matter.Vector) {
        super();
        this.initPosition = position;
        this.area = area;
        this.initVelocity = velocity;
    }

    abstract createBody(position: Matter.Vector, area: Area): Body

    /* Initializes a body when game starts */
    initBody() {
        this.setPosition(this.initPosition);
        if (this.initVelocity) this.setVelocity(this.initVelocity)
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

    getInitPosition(): Matter.Vector {
        return this.initPosition;
    }

    translate(offset: Matter.Vector): void {
        Body.translate(this.body, offset);
    }
}