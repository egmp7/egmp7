import { drawVertices } from "../../resources/utilities";
import Structure from "../structure";
import {
    frontAnimation,
    leftFallingAnimation,
    rightFallingAnimation,
    leftAnimation,
    rightAnimation,
    fallingAnimation
} from "../sprites/player"

export default class Player extends Structure {

    constructor(body) {
        super(body);
        this.xSpeed = 5;
        this.jumpForce = { x: 0, y: (-0.013 * this.body.mass) };
        this.doubleJumpProps = {
            speed: 4,
            jumpReset: false,
            isFirstJump: false
        }
    }

    run (p5) {

        drawVertices(p5, this.body.parts[1].vertices);
        this.draw(p5, this.body.position, this.control, this.collisions.isPlayerOnGround());
        this.moveSides({ x: this.xSpeed, y: this.body.velocity.y }, this.control);
        this.jump(this.jumpForce, this.control.jump, this.collisions.isPlayerOnGround());
        this.doubleJump(this.control.jump, !this.collisions.isPlayerOnGround(), this.doubleJumpProps.isFirstJump, this.doubleJumpProps.jumpReset);
    }

    /**
     * Move the player side ways
     * @param {Vector} velocity 
     * @param {Control.Object} control 
     */
    moveSides (velocity, control) {
        const velocityRight = { x: velocity.x, y: velocity.y }
        const velocityLeft = { x: -velocity.x, y: velocity.y }
        const velocityCenter = { x: 0, y: velocity.y }
        if (control.right) this.setVelocity(velocityRight);
        else if (control.left) this.setVelocity(velocityLeft);
        else this.setVelocity(velocityCenter);
    }

    /**
     * Makes the player Jump
     * @param {Vector} force 
     * @param {Boolean} isJump 
     * @param {Boolean} isOnGround 
     */
    jump (force, isJump, isOnGround) {
        if (isJump && isOnGround) this.applyForce(force)
    }

    /**
     * Calculates the velocity for the double jump
     * @returns Vector
     */
    calcDoubleJumpVelocity() {
        // calc velocity
        const speed = this.doubleJumpProps.speed;
        const bodyVelocity = this.body.velocity;

        if (bodyVelocity.y < 0)
            return { x: bodyVelocity.x, y: bodyVelocity.y - speed };
        else return { x: bodyVelocity.x, y: - bodyVelocity.y };
    }

    /**
     * Double Jump function
     * @param {Boolean*} isJumping 
     * @param {Boolean} isInAir 
     * @param {Boolean} isFirstJump 
     * @param {Boolean} jumpReset 
     */
    doubleJump(isJumping, isInAir, isFirstJump, jumpReset) {

        // check if it is the first jump
        if (isJumping && !isInAir)
            this.setIsFirstJump(true)

        // reset jump button
        if (!isJumping && isInAir)
            this.setJumpReset(true);
        else this.setJumpReset(false)

        // double jump
        if (isJumping && isInAir && isFirstJump && jumpReset) {
            this.setVelocity(this.calcDoubleJumpVelocity());
            this.setIsFirstJump(false)
        }
    }

    /**
     * 
     * @param {P5} p5 
     * @param {Vector} position 
     * @param {Control.Object} control 
     * @param {Boolean} isOnGround 
     */
    draw = function (p5, position, control, isOnGround) {
        const yOffset = -3
        p5.push()
        p5.translate(position.x, position.y + yOffset)
        p5.scale(1.7)
        if (control.left && !isOnGround) leftFallingAnimation(p5)
        else if (control.right && !isOnGround) rightFallingAnimation(p5)
        else if (control.left) leftAnimation(p5)
        else if (control.right) rightAnimation(p5)
        else if (!isOnGround) fallingAnimation(p5)
        else frontAnimation(p5)
        p5.pop()
    }

    setJumpReset(bool) {
        this.doubleJumpProps.jumpReset = bool;
    }

    setIsFirstJump(bool) {
        this.doubleJumpProps.isFirstJump = bool;
    }
}
