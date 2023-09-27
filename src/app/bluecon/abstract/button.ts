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
        if (p5.touches.length === 0) this.isPressed = false;
        p5.touches.forEach((touch: any) => {
            if (
                this.checkIfPressed(
                    { x: this.position.x, y: this.position.y },
                    { x: touch.x, y: touch.y },
                    this.radius)
            ) this.isPressed = true; 
            else this.isPressed = false;
        })
    }

    draw(position: Matter.Vector, radius: number) {
        p5.push();
        p5.translate(position.x, position.y);
        p5.fill(100);
        p5.ellipse(0, 0, radius * 2, radius * 2);
        p5.pop();
    }

    /**
     * Checks if a touch is close to the position by a radius distance
     * @param p5 
     * @param position 
     * @param touch 
     * @param radius 
     * @returns boolean
     */
    checkIfPressed(p1: Matter.Vector, p2: Matter.Vector, radius: number): boolean {
        if (Utilities.calculateDistance(p1.x, p1.y, p2.x, p2.y) < radius) return true
        return false;
    }
}