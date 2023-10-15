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
    private range: number;
    private speed: number;

    constructor(position: Matter.Vector, range: number, speed: number) {

        super(position, { w: 20, h: 44 })
        this.range = range;
        this.speed = speed;
        this.setVelocity({ x: 5, y: this.body.velocity.y })
    }

    createBody(position: Matter.Vector, area: Area): Matter.Body {
        return Bodies.rectangle(position.x, position.y, area.w, area.h, { isSensor: true, inertia: Infinity })
    }

    run(): void {
        //Utilities.drawVertices(p5, this.body.vertices);
        this.reverseGravity(Physics.getEngineGravity(), this.body);
        this.switchVelocity((this.initPosition.x + Scroll.getScrollOffset().x), this.body.position.x, this.range, this.speed);
        this.draw(this.body.position, this.body.velocity)
    }

    /**
     * Apply a contrary gravity force to the body
     * @param gravity 
     * @param body 
     */
    reverseGravity(gravity: Matter.Gravity, body: Matter.Body): void {
        const negativeGravity = {
            x: -gravity.x * gravity.scale * body.mass,
            y: -gravity.y * gravity.scale * body.mass
        }
        this.applyForce(negativeGravity)
    }

    /**
     * Switch x velocity
     * @param xEnemyInit 
     * @param xEnemyCurrent 
     * @param range 
     * @param speed 
     */
    switchVelocity(xEnemyInit: number, xEnemyCurrent: number, range: number, speed: number): void {
        if (range < 0) throw "error: range must not be less than 0";
        if (xEnemyCurrent > xEnemyInit + range)
            this.setVelocity({ x: -speed, y: this.body.velocity.y })
        if (xEnemyCurrent < xEnemyInit)
            this.setVelocity({ x: speed, y: this.body.velocity.y })
    }

    draw(position: Matter.Vector, velocity: Matter.Vector): void {
        const yOffset = 3;

        p5.push();
        p5.translate(position.x, position.y + yOffset);
        if (velocity.x < 0) drawEnemyLeft(p5)
        else drawEnemyRight(p5)
        p5.pop()
    }
}