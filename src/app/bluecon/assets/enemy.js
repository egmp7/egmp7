import { drawVertices } from "../resources/utilities";
import { Body, Vector } from "matter-js";
import { drawEnemyRight, drawEnemyLeft } from "./sprites/enemy"
import physics from "../globals/physics";

export default class Enemy {
    constructor(body, range) {
        this.body = body;

        Body.setInertia(body, Infinity)
        this.x = body.position.x;
        this.range = range;
        this.currentX = body.position.x;
        this.inc = 1;
    }

    run(p5) {
        drawVertices(p5, this.body.vertices)
        this.reverseGravity(physics.engine.gravity, this.body)
        this.updateEnemyPosition(
            this.body,
            this.currentX,
            this.x,
            this.range,
            this.inc);

        this.draw(p5, this.body.position)
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
     * Moves the position of the body depending on the range
     * @param {Matter.Body} body 
     * @param {number} currentX 
     * @param {number} x 
     * @param {number} range 
     * @param {number} inc 
     */
    updateEnemyPosition = function (body, currentX, x, range, inc) {
        const speed = 2;
        this.setCurrentX(currentX + inc);

        if (currentX >= x + range) {
            Body.setVelocity(body, Vector.create(-speed, 0));
            this.setInc(-1);
        }
        else if (currentX < x) {
            Body.setVelocity(body, Vector.create(speed, 0));
            this.setInc(1);
        }
    }

    /**
     * Set Increment value
     * @param {number} value 
     */
    setInc(value) {
        this.inc = value;
    }
    /**
     * Set current x value
     * @param {number} value 
     */
    setCurrentX(value) {
        this.currentX = value;
    }

    /**
     * Draws an enemy
     * @param {SketchProps.p5} p5 
     * @param {Matter.Vector} position 
     */
    draw = function (p5, position) {

        const yOffset = 3;

        p5.push();
        p5.translate(position.x, position.y + yOffset);
        if (this.inc < 0) drawEnemyLeft(p5)
        else drawEnemyRight(p5)
        p5.pop()
    }
}