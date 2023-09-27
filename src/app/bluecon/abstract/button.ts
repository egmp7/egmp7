import Utilities from "../resources/utilities";
import { p5 } from "../components/Sketch2";
import type Matter from "matter-js";

export default abstract class Button {
    abstract isPressed: boolean;
    position: Matter.Vector;
    radius: number;

    constructor(position: Matter.Vector, radius: number) {
        this.position = position;
        this.radius = radius;
    }

    run(): void {
        this.draw(this.position, this.radius);
        this.checkTouches(this.position, p5.touches, this.radius);

    }

    draw(position: Matter.Vector, radius: number) {
        p5.push();
        p5.translate(position.x, position.y);
        p5.fill(100);
        p5.ellipse(0, 0, radius * 2, radius * 2);
        p5.pop();
    }

    /**
     * Checks if a touch is close to the position by a radius distance and sets is pressed
     * @param position 
     * @param touches 
     * @param radius 
     */
    checkTouches(position: Matter.Vector, touches: any[], radius: number) {

        this.setIsPressed(false);
        touches.forEach((touch) => {

            if (Utilities.calculateDistance(
                position.x,
                position.y,
                touch.x,
                touch.y) < radius)
                this.setIsPressed(true);
        })

    }

    setIsPressed(bool: boolean): void {
        this.isPressed = bool;
    }
}