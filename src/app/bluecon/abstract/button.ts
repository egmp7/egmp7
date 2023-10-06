import Utilities from "../resources/utilities";
import { p5 } from "../components/Sketch";
import Graph from "./graph";
import type Matter from "matter-js";

export default abstract class Button extends Graph {
    abstract isPressed: boolean;
    position: Matter.Vector;
    radius: number;

    constructor(position: Matter.Vector, radius: number) {
        super()
        this.position = position;
        this.radius = radius;
    }

    run(): void {
        this.draw(this.position, this.radius);
        //this.checkTouches(this.position, p5.touches, this.radius);
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
    isTouch(): boolean {

        const position = this.position;
        const radius = this.radius;
        const touches: any[] = p5.touches;
        let t = false;

        touches.forEach((touch) => {

            if (Utilities.calculateDistance(
                position.x,
                position.y,
                touch.x,
                touch.y) < radius)
                t = true;
        })
        return t;
    }

    isClick(): boolean {
        const position = this.position;
        const radius = this.radius;
        const mousePos = {x: p5.mouseX, y: p5.mouseY}

        let c = false;

        if (Utilities.calculateDistance(
            position.x,
            position.y,
            mousePos.x,
            mousePos.y) < radius)
            c = true;

        return c;
    }

    setIsPressed(bool: boolean): void {
        this.isPressed = bool;
    }
}