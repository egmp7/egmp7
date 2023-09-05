import { drawVertices } from "../resources/utilities";
import { Body, Vector } from "matter-js";
import display from "../globals/display";
import  physics  from "../globals/physics";

export default class Enemy {
    constructor(body, range) {
        this.body = body;
        display.scaleBodies(body);
        Body.setInertia(body, Infinity)
        this.x = body.position.x;
        this.range = range;
        this.currentX = body.position.x;
        this.inc = 1;
    }

    run(p5) {
        drawVertices(p5, this.body.vertices)
        this.reverseGravity( physics.engine.gravity , this.body )
        this.updateEnemyPosition(
            this.body, 
            this.currentX, 
            this.x, 
            this.range, 
            this.inc);
        
        //this.draw(p5,this.body.position)
    }

    /**
     * Apply a contrary gravity force to the body
     * @param {Engine.gravity} gravity 
     * @param {Matter.body} body 
     */
    reverseGravity( gravity, body ) {
        const negativeGravity = Vector.create(
            -gravity.x * gravity.scale * body.mass,
            -gravity.y * gravity.scale * body.mass)
        Body.applyForce(
            body,
            body.position,
            negativeGravity)
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
        this.setCurrentX (currentX + inc);

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
    setInc(value){
        this.inc = value;
    }
    /**
     * Set current x value
     * @param {number} value 
     */
    setCurrentX(value){
        this.currentX = value;
    }

    /**
     * Draws an enemy
     * @param {SketchProps.p5} p5 
     * @param {Matter.Vector} position 
     */
    draw = function (p5,position) {

        const yOffset = 3;

        p5.noStroke();
        p5.push();
        p5.translate(position.x,position.y + yOffset);

        if (this.inc > 0) {
            //body
            p5.fill(255, 0, 0);
            p5.triangle( - 7,  - 15,  + 7,  - 15,0 ,  - 25);
            p5.rect( - 7,  - 15, 14, 30);
            p5.ellipse( - 3,   15, 4, 6);
            p5.ellipse( + 5,   15, 4, 6);
            //eyes
            p5.fill(255, 255, 102)
            p5.ellipse( + 3,  - 12, 5, 7)
        }

        else {
            //body
            p5.fill(255, 0, 0);
            p5.triangle( - 7,  - 15,  + 7,  - 15, 0,  - 25);
            p5.rect( - 7,  - 15, 14, 30);
            p5.ellipse( - 3,  15, 4, 6);
            p5.ellipse( + 5,  15, 4, 6);
            //eyes
            p5.fill(255, 255, 102)
            p5.ellipse( - 3,  - 12, 5, 7)
        }

        p5.pop()
    }
}