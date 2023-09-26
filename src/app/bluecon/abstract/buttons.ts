import Utilities from "../resources/utilities";
import { p5 } from "../components/Sketch2";
import type Matter from "matter-js";

export default abstract class Buttons {
    abstract isPressed: boolean;
    position: Matter.Vector;
    radius: number;

    constructor(position: Matter.Vector, radius: number) {
        this.position = position;
        this.radius = radius;
    }

     run(): void{
        //this.checkIfPressed()
     }

    draw(position: Matter.Vector, radius: number) {
        p5.translate(position.x,position.y)
        p5.fill(100);
        p5.ellipse(0, 0, radius * 2, radius * 2)
    }

    // click() {
    //     //const p5 = this.p5;
    //     const position = this.position;
    //     const radius = this.radius;

    //     p5.touches.forEach((touch: any) => {
    //         if (p5.dist(position.x, position.y, touch.x, touch.y) < radius)
    //             this.setIsPressed(true);
    //     })

    // }
    // release() {
    //     this.setIsPressed(false);
    //     //const p5 = this.p5;
    //     const position = this.position;
    //     const radius = this.radius;

    //     p5.touches.forEach((touch: any) => {
    //         if (p5.dist(position.x, position.y, touch.x, touch.y) < radius)
    //             this.setIsPressed(true);

    //     })
    // }

    // setIsPressed(bool: boolean) {
    //     this.isPressed = bool;
    // }


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