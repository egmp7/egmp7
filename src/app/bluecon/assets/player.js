import { Bodies, Body, Vector } from "matter-js";
import { drawVertices } from "../resources/utilities";
import control from "../globals/control";
import display from "../globals/display";
import frontAnimation from "./animations/player/front"
import leftAnimation from "./animations/player/left"
import rightAnimation from "./animations/player/right"
import leftFallingAnimation from "./animations/player/leftFalling"
import rightFallingAnimation from "./animations/player/rightFalling"
import fallingAnimation from "./animations/player/falling"
import physics from "../globals/physics";


export default class Player {
    constructor(body) {
        this.body = body
        display.scaleBodies(body)
        Body.setInertia(body, Infinity)
    }

    run = function (p5) {
        drawVertices(p5, this.body.vertices);
        this.draw(p5, this.body.position);
        //drawVertices(p5, this.body.vertices);
        this.moveSides();
        this.jump();
    }

    moveSides = function () {
        const speed = 5;
        const velocityRight = Vector.create(speed, this.body.velocity.y)
        const velocityLeft = Vector.create(-speed, this.body.velocity.y)
        if (control.right) Body.setVelocity(this.body, velocityRight);
        if (control.left) Body.setVelocity(this.body, velocityLeft);
    }

    jump = function () {
        const speed = 6;
        if (control.jump && physics.isPlayerOnGround()) Body.setVelocity(this.body, Vector.create(this.body.velocity.x, -speed))
    }

    draw = function (p5, position) {
        const yOffset = -3
        p5.push()
        p5.translate(position.x, position.y + yOffset * display.scale)
        p5.scale(1.7 * display.scale)

        if (control.left && !physics.isPlayerOnGround()) leftFallingAnimation(p5)
        else if (control.right && !physics.isPlayerOnGround()) rightFallingAnimation(p5)
        else if (control.left) leftAnimation(p5)
        else if (control.right) rightAnimation(p5)
        else if (!physics.isPlayerOnGround()) fallingAnimation(p5)
        else frontAnimation(p5)

        p5.pop()
    }
}
