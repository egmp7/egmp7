import { drawVertices } from "../resources/utilities";
import { Body, Vector } from "matter-js";
import control from "../globals/control";
import physics from "../globals/physics";
import {
    frontAnimation,
    leftFallingAnimation,
    rightFallingAnimation,
    leftAnimation,
    rightAnimation,
    fallingAnimation
} from "./animations/player"

export default class Player {

    constructor(body) {
        this.body = body
    }

    canDoubleJump = { isInAir: false, isFirstJump: false };

    run = function (p5) {
        //drawVertices(p5, this.body.vertices);
        this.draw(p5, this.body.position);
        //drawVertices(p5, this.body.vertices);
        this.moveSides();
        this.jump();
        this.doubleJump();
    }

    moveSides = function () {
        const speed = 5;
        const velocityRight = Vector.create(speed, this.body.velocity.y)
        const velocityLeft = Vector.create(-speed, this.body.velocity.y)
        if (control.right) Body.setVelocity(this.body, velocityRight);
        else if (control.left) Body.setVelocity(this.body, velocityLeft);
        else Body.setVelocity(this.body, {x:0,y:this.body.velocity.y});
    }

    jump = function () {
        const force = (-0.013 * this.body.mass);
        if (control.jump && physics.isPlayerOnGround())
            Body.applyForce(this.body, this.body.position, { x: 0, y: force })
    }

    doubleJump = function () {

        // calc velocity
        const speed = - 2;
        var velocity;
        if (this.body.velocity.y < 0) velocity = Vector.create(this.body.velocity.x, this.body.velocity.y + speed);
        else velocity = Vector.create(this.body.velocity.x, - this.body.velocity.y);

        // double jump
        if (control.jump && this.canDoubleJump.isInAir && this.canDoubleJump.isFirstJump) {
            Body.setVelocity(this.body, velocity);
            this.canDoubleJump.isFirstJump = false;
        }

        // check if player is in the air
        this.canDoubleJump.isInAir = false;
        if (!control.jump && !physics.isPlayerOnGround())
            this.canDoubleJump.isInAir = true;

        // check if it is the first jump
        if (control.jump && physics.isPlayerOnGround())
            this.canDoubleJump.isFirstJump = true;
    }

    draw = function (p5, position) {
        const yOffset = -3
        p5.push()
        p5.translate(position.x, position.y + yOffset)
        p5.scale(1.7)

        if (control.left && !physics.isPlayerOnGround()) leftFallingAnimation(p5)
        else if (control.right && !physics.isPlayerOnGround()) rightFallingAnimation(p5)
        else if (control.left) leftAnimation(p5)
        else if (control.right) rightAnimation(p5)
        else if (!physics.isPlayerOnGround()) fallingAnimation(p5)
        else frontAnimation(p5)

        p5.pop()
    }
}
