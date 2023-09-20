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
        this.xSpeed = 5;
        this.jumpForce = { x: 0, y: (-0.013 * this.body.mass) };
        this.doubleJumpSpeed = 2;
    }

    canDoubleJump = { isInAir: false, isFirstJump: false };

    run = function (p5) {

        //drawVertices(p5, this.body.vertices);
        this.draw(p5, this.body.position, this.control, this.isPlayerOnGround());
        this.moveSides({ x: this.xSpeed, y: this.body.velocity.y }, this.control);
        this.jump(this.jumpForce, this.control.jump, this.isPlayerOnGround());
        this.doubleJump(this.control.jump, this.canDoubleJump.isInAir, this.canDoubleJump.isFirstJump);
    }

    /**
     * Move the player side ways
     * @param {Vector} velocity 
     * @param {Control.Object} control 
     */
    moveSides = function (velocity, control) {
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
    jump = function (force, isJump, isOnGround) {
        if (isJump && isOnGround) this.applyForce(force)
    }

    /**
     * Calculates the velocity for the double jump
     * @returns Vector
     */
    calcDoubleJumpVelocity() {
        // calc velocity
        const speed = this.doubleJumpSpeed;
        const bodyVelocity = this.body.velocity;

        if (bodyVelocity.y < 0)
            return { x: bodyVelocity.x, y: bodyVelocity.y - speed };
        else return { x: bodyVelocity.x, y: - bodyVelocity.y };
    }

    doubleJump = function (isJumping, isInAir, isFirstJump) {

        // double jump
        if (isJumping && isInAir && isFirstJump) {
            this.setVelocity(this.calcDoubleJumpVelocity());
            this.setIsFirstJump(false)
        }

        // check if player is in the air
        this.setIsInAir(false)
        if (!isJumping && !this.isPlayerOnGround())
            this.setIsInAir(true);

        // check if it is the first jump
        if (isJumping && this.isPlayerOnGround())
            this.setIsFirstJump(true)
    }

    setIsInAir(bool) {
        this.canDoubleJump.isInAir = bool;
    }

    setIsFirstJump(bool) {
        this.canDoubleJump.isFirstJump = bool;
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
}
