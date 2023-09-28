import Utilities from "../../resources/utilities";
import { p5 } from "../../components/Sketch";
import { Bodies } from "matter-js";
import { drawEnemyRight, drawEnemyLeft } from "./sprites/enemy"
import Structure, { Area } from "../../abstract/structure"
import Physics from "../../modules/Physics";
import Scroll from "../../modules/Scroll";
//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export default class Enemy extends Structure {

    public isVisible: boolean = false;
    public body: Matter.Body = this.createBody(this.initPosition, this.area);
    range: number;
    speed: number;

    constructor(position: Matter.Vector, area: Area, range: number, speed: number) {

        super(position, area)
        this.range = range;
        this.speed = speed;
        this.setInertia(Infinity);
        this.setVelocity({ x: 5, y: this.body.velocity.y })
    }

    createBody(position: Matter.Vector, area: Area): Matter.Body {
        return Bodies.rectangle(position.x, position.y, area.w, area.h, { isSensor: true })
    }

    run() {
        Utilities.drawVertices(p5, this.body.vertices);
        this.reverseGravity(Physics.getEngineGravity(), this.body);
        this.switchVelocity((this.initPosition.x + Scroll.getScrollOffset().x), this.body.position.x, this.range, this.speed);
        this.draw(this.body.position, this.body.velocity)
    }

    /**
     * Apply a contrary gravity force to the body
     * @param {Engine.gravity} gravity 
     * @param {Matter.body} body 
     */
    reverseGravity(gravity: Matter.Gravity, body: Matter.Body) {
        const negativeGravity = {
            x: -gravity.x * gravity.scale * body.mass,
            y: -gravity.y * gravity.scale * body.mass
        }
        this.applyForce(negativeGravity)
    }

    /**
     * Switches the speed when the enemy passes a threshold
     * @param {number} xEnemyInit 
     * @param {number} range 
     * @param {number} xEnemyCurrent
     * @param {number} speed 
     */
    switchVelocity(xEnemyInit: number, xEnemyCurrent: number, range: number, speed: number) {
        if (range < 0) throw "error: range must not be less than 0";
        if (xEnemyCurrent > xEnemyInit + range)
            this.setVelocity({ x: -speed, y: this.body.velocity.y })
        if (xEnemyCurrent < xEnemyInit)
            this.setVelocity({ x: speed, y: this.body.velocity.y })
    }

    /**
     * Draws an enemy
     * @param {SketchProps.p5} p5 
     * @param {Matter.Vector} position
     * @param {Matter.Vector} velocity 
     */
    draw(position: Matter.Vector, velocity: Matter.Vector) {
        const yOffset = 3;

        p5.push();
        p5.translate(position.x, position.y + yOffset);
        if (velocity.x < 0) drawEnemyLeft(p5)
        else drawEnemyRight(p5)
        p5.pop()
    }
}