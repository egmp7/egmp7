import { drawVertices } from "../resources/utilities";
import { Body, Vector } from "matter-js";
import { drawEnemyRight, drawEnemyLeft } from "./sprites/enemy"
import physics from "../globals/physics";

export default class Enemy {
    constructor(body, range) {
        this.body = body;
        this.xInit = body.position.x;
        this.range = range;
        this.speed = 2;
        Body.setInertia(body, Infinity)
        Body.setVelocity(body, { x: this.speed, y: this.body.velocity.y })
    }

    run(p5) {
        drawVertices(p5, this.body.vertices)
        this.reverseGravity(physics.engine.gravity, this.body)
        this.switchVelocity(this.xInit, this.range, this.body.position.x, this.speed);
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
        Body.applyForce(body, body.position, negativeGravity)
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
            Body.setVelocity(this.body, { x: -speed, y: this.body.velocity.y })
        if (xEnemyCurrent < xEnemyInit)
            Body.setVelocity(this.body, { x: speed, y: this.body.velocity.y })
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