import Utilities from "../../resources/utilities";
import Collisions from "../../modules/Collisions";
import Events from "../../modules/Events";
import Structure from "../../abstract/structure";
import AudioPlayer from "../../modules/AudioPlayer";
import { p5 } from "../../components/Sketch";
import { Bodies, Body, Vector } from "matter-js";
import { frontAnimation, leftFallingAnimation, rightFallingAnimation, leftAnimation, rightAnimation, fallingAnimation } from "./sprites/player"
//////////////////////////////////////////////////////
import type Matter from "matter-js";
import type { Area } from "../../abstract/structure";
//////////////////////////////////////////////////////
interface DoubleJump {
    speed: number;
    jumpReset: boolean;
    isFirstJump: boolean;
}
//////////////////////////////////////////////////////
export default class Player extends Structure {

    public isVisible: boolean = false;
    public body: Body = this.createBody(this.initPosition, this.area);
    public floorSensor: Body;

    private xSpeed: number;
    private jumpForce: Matter.Vector;
    private doubleJumpProps: DoubleJump;

    constructor(position: Matter.Vector,) {
        super(position, { w: 36, h: 82 });
        this.xSpeed = 5;
        this.jumpForce = { x: 0, y: (-0.028 * this.body.mass) };
        this.floorSensor = this.body.parts[2];
        this.doubleJumpProps = {
            speed: 4,
            jumpReset: false,
            isFirstJump: false
        }
    }

    createBody(position: Matter.Vector, area: Area): Body {
        const body = Bodies.rectangle(
            position.x,
            position.y,
            area.w,
            area.h);

        const floorSensor = Bodies.circle(
            position.x,
            position.y + area.h / 2,
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

        //Utilities.drawVertices(p5, this.body.vertices);
        this.draw(this.body.position, Collisions.isPlayerOnGround(), Events.control.right, Events.control.left);
        this.moveSides({ x: this.xSpeed, y: this.body.velocity.y }, Events.control.right, Events.control.left);
        this.jump(this.jumpForce, Events.control.jump, Collisions.isPlayerOnGround());
        this.doubleJump(Events.control.jump, !Collisions.isPlayerOnGround(), this.doubleJumpProps.isFirstJump, this.doubleJumpProps.jumpReset);
    }

    private moveSides(velocity: Matter.Vector, isRight: boolean, isLeft: boolean): void {
        const velocityRight = { x: velocity.x, y: velocity.y }
        const velocityLeft = { x: -velocity.x, y: velocity.y }
        const velocityCenter = { x: 0, y: velocity.y }
        if (isRight) this.setVelocity(velocityRight);
        else if (isLeft) this.setVelocity(velocityLeft);
        else this.setVelocity(velocityCenter);
    }

    private jump(force: Matter.Vector, isJump: boolean, isOnGround: boolean): void {
        if (isJump && isOnGround) {
            this.applyForce(force)
            AudioPlayer.jumpPlay();
        }
    }

    private calcDoubleJumpVelocity(): Vector {
        // calc velocity
        const speed = this.doubleJumpProps.speed;
        const bodyVelocity = this.body.velocity;

        if (bodyVelocity.y < 0)
            return { x: bodyVelocity.x, y: bodyVelocity.y - speed };
        else return { x: bodyVelocity.x, y: - bodyVelocity.y };
    }

    private doubleJump(isJumping: boolean, isInAir: boolean, isFirstJump: boolean, jumpReset: boolean): void {

        // check if it is the first jump
        if (isJumping && !isInAir)
            this.setIsFirstJump(true);

        // reset jump button
        if (!isJumping && isInAir)
            this.setJumpReset(true);
        else this.setJumpReset(false);

        // double jump
        if (isJumping && isInAir && isFirstJump && jumpReset) {
            this.setVelocity(this.calcDoubleJumpVelocity());
            this.setIsFirstJump(false);
            AudioPlayer.jumpPlay();
        }
    }

    private draw(position: Matter.Vector, isOnGround: boolean, isRight: boolean, isLeft: boolean): void {
        const yOffset = -3

        p5.push()
        p5.translate(position.x, position.y + yOffset)
        p5.scale(1.7)
        if (isLeft && !isOnGround) leftFallingAnimation(p5)
        else if (isRight && !isOnGround) rightFallingAnimation(p5)
        else if (isLeft) leftAnimation(p5)
        else if (isRight) rightAnimation(p5)
        else if (!isOnGround) fallingAnimation(p5)
        else frontAnimation(p5)
        p5.pop()
    }

    private setJumpReset(bool: boolean): void {
        this.doubleJumpProps.jumpReset = bool;
    }

    private setIsFirstJump(bool: boolean): void {
        this.doubleJumpProps.isFirstJump = bool;
    }
}
