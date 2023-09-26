import { drawVertices } from "../../resources/utilities";
import { p5 } from "../../components/Sketch2";
import Structure from "./structure";
import { Bodies, Body } from "matter-js";
import {
    frontAnimation,
    leftFallingAnimation,
    rightFallingAnimation,
    leftAnimation,
    rightAnimation,
    fallingAnimation
} from "./sprites/player"
//////////////////////////////////////////////////////
import type Matter from "matter-js";
import type Control from "../../tools/control";
//////////////////////////////////////////////////////
interface DoubleJump {
    speed: number;
    jumpReset: boolean;
    isFirstJump: boolean;
}
//////////////////////////////////////////////////////
export default class Player extends Structure {

    public isVisible: boolean = true;
    public body: Body = this.createBody();

    xSpeed: number;
    jumpForce: Matter.Vector;
    doubleJumpProps: DoubleJump;

    constructor(position: Matter.Vector) {
        super(position);
        this.xSpeed = 5;
        this.jumpForce = { x: 0, y: (-0.013 * this.body.mass) };
        this.doubleJumpProps = {
            speed: 4,
            jumpReset: false,
            isFirstJump: false
        }
    }

    createBody(): Matter.Body {
        const area = { w: 36, h: 82 }

        const body = Bodies.rectangle(
            this.position.x,
            this.position.y,
            area.w,
            area.h);

        const floorSensor = Bodies.circle(
            this.position.x,
            this.position.y + area.h / 2,
            2,  // radius
            { isSensor: true });

        const main = Body.create({
            parts: [body, floorSensor],
            friction: 0,
            inertia: Infinity
        });

        return main;
    }

    run() {

        drawVertices(this.body.parts[1].vertices);
        this.draw(this.body.position, this.control, this.collisions.isPlayerOnGround());
        this.moveSides({ x: this.xSpeed, y: this.body.velocity.y }, this.control);
        this.jump(this.jumpForce, this.control.jump, this.collisions.isPlayerOnGround());
        this.doubleJump(this.control.jump, !this.collisions.isPlayerOnGround(), this.doubleJumpProps.isFirstJump, this.doubleJumpProps.jumpReset);
    }

    /**
     * Move the player side ways
     * @param {Vector} velocity 
     * @param {Control.Object} control 
     */
    moveSides(velocity: Matter.Vector, control: Control) {
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
    jump(force: Matter.Vector, isJump: boolean, isOnGround: boolean) {
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
     * @param {Boolean} isJumping 
     * @param {Boolean} isInAir 
     * @param {Boolean} isFirstJump 
     * @param {Boolean} jumpReset 
     */
    doubleJump(isJumping: boolean, isInAir: boolean, isFirstJump: boolean, jumpReset: boolean) {

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
     * @param {Control} control 
     * @param {Boolean} isOnGround 
     */
    draw(position: Matter.Vector, control: Control, isOnGround: boolean): void {
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

    setJumpReset(bool: boolean) {
        this.doubleJumpProps.jumpReset = bool;
    }

    setIsFirstJump(bool: boolean) {
        this.doubleJumpProps.isFirstJump = bool;
    }
}
