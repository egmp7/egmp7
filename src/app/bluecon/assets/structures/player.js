import { drawVertices } from "../../resources/utilities";
import Structure from "../structure";
import player from "../playerBody";
import {
    frontAnimation,
    leftFallingAnimation,
    rightFallingAnimation,
    leftAnimation,
    rightAnimation,
    fallingAnimation
} from "../sprites/player"

export default class Player extends Structure {

    constructor() {
        super(player.main);
    }

    canDoubleJump = { isInAir: false, isFirstJump: false };

    run = function (p5) {

        //drawVertices(p5, this.body.vertices);
        this.draw(p5, this.body.position);
        this.moveSides();
        this.jump();
        this.doubleJump();
    }

    moveSides = function () {
        const speed = 5;
        const velocityRight = { x: speed, y: this.body.velocity.y }
        const velocityLeft = { x: -speed, y: this.body.velocity.y }
        const xVelocityZero = { x: 0, y: this.body.velocity.y }
        if (this.control.right) this.setVelocity(velocityRight);
        else if (this.control.left) this.setVelocity(velocityLeft);
        else this.setVelocity(xVelocityZero);
    }

    jump = function () {
        const force = { x: 0, y: (-0.013 * this.body.mass) };
        if (this.control.jump && this.isPlayerOnGround())
            this.applyForce(force)
    }

    doubleJump = function () {

        // calc velocity
        const speed = - 2;
        var velocity;
        if (this.body.velocity.y < 0)
            velocity = { x: this.body.velocity.x, y: this.body.velocity.y + speed };
        else velocity = { x: this.body.velocity.x, y: - this.body.velocity.y };

        // double jump
        if (this.control.jump && this.canDoubleJump.isInAir && this.canDoubleJump.isFirstJump) {
            this.setVelocity(velocity);
            this.canDoubleJump.isFirstJump = false;
        }

        // check if player is in the air
        this.canDoubleJump.isInAir = false;
        if (!this.control.jump && !this.isPlayerOnGround())
            this.canDoubleJump.isInAir = true;

        // check if it is the first jump
        if (this.control.jump && this.isPlayerOnGround())
            this.canDoubleJump.isFirstJump = true;
    }

    draw = function (p5, position) {
        const yOffset = -3
        p5.push()
        p5.translate(position.x, position.y + yOffset)
        p5.scale(1.7)
        if (this.control.left && !this.isPlayerOnGround()) leftFallingAnimation(p5)
        else if (this.control.right && !this.isPlayerOnGround()) rightFallingAnimation(p5)
        else if (this.control.left) leftAnimation(p5)
        else if (this.control.right) rightAnimation(p5)
        else if (!this.isPlayerOnGround()) fallingAnimation(p5)
        else frontAnimation(p5)
        p5.pop()
    }
}
