import Buttons from "../abstract/buttons";
import { p5 } from "../components/Sketch2";
import type Matter from "matter-js";

export default class Left extends Buttons {

    isPressed: boolean = false;

    constructor(position: Matter.Vector, radius: number) {
        super(position, radius)
    }

    run(): void {
        this.draw(this.position, this.radius);
        //this.checkIfPressed()
    }

    draw(position: Matter.Vector, radius: number): void {
    
        p5.fill('rgba(255,255,255, 0.25)');
        p5.translate(position.x, position.y);

        p5.ellipse(0, 0, radius * 2, radius * 2)

        const size = radius - 30;
        const xOffset = - 6;
        p5.fill(0, 255, 0)
        p5.triangle(
            + size + xOffset, + size,
            + size + xOffset, - size,
            - size + xOffset, 0)

    }

    // checkIfPressed = function () {
    //     if (this.isPressed)
    //         PLAYER_CONTROLLER.setMoveLeft(true)
    //     else
    //         PLAYER_CONTROLLER.setMoveLeft(false)
    // }
}