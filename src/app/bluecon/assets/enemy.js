import { drawVertices } from "../resources/utilities";
import { drawEnemyRight, drawEnemyLeft } from "./sprites/enemy"
import Asset from "./asset"

export default class Enemy extends Asset {
    constructor(body, range) {
        super(body)
        this.range = range;
        this.speed = 2;
        this.setInertia(Infinity);
        this.setVelocity({ x: this.speed, y: this.body.velocity.y })
    }

    run(p5) {
        drawVertices(p5, this.body.vertices)
        this.reverseGravity(this.getEngineGravity(), this.body)
        this.switchVelocity(this.initPosition.x, this.range, this.body.position.x, this.speed);
        this.updateInitPosition();
        this.draw(p5, this.body.position, this.body.velocity)
    }

    /**
     * Apply a contrary gravity force to the body
     * @param {Engine.gravity} gravity 
     * @param {Matter.body} body 
     */
    reverseGravity(gravity, body) {
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
    switchVelocity(xEnemyInit, range, xEnemyCurrent, speed) {
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
    draw = function (p5, position, velocity) {

        const yOffset = 3;

        p5.push();
        p5.translate(position.x, position.y + yOffset);
        if (velocity.x < 0) drawEnemyLeft(p5)
        else drawEnemyRight(p5)
        p5.pop()
    }
}