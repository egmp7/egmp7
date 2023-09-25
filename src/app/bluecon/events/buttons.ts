import type Matter from "matter-js";
import type P5 from "p5";

export default abstract class Buttons {
    position: Matter.Vector;
    name: string;
    radius: number = 50;
    isPressed: boolean = false;
    p5: P5

    constructor(p5: P5, position: Matter.Vector, name: string) {

        this.position = position;
        this.name = name;
        this.p5 = p5;
    }

    abstract run(): void;

    // draw = function () {
    // this.checkIfPressed()
    // fill(0)
    // ellipse(this.x, this.y, this.radius * 2, this.radius * 2)
    // }

    click() {
        const p5 = this.p5;
        const position = this.position;
        const radius = this.radius;

        p5.touches.forEach((touch: any) => {
            if (p5.dist(position.x, position.y, touch.x, touch.y) < radius)
                this.setIsPressed(true);
        })

    }
    release() {
        this.setIsPressed(false);
        const p5 = this.p5;
        const position = this.position;
        const radius = this.radius;

        p5.touches.forEach((touch: any) => {
            if (p5.dist(position.x, position.y, touch.x, touch.y) < radius)
                this.setIsPressed(true);

        })
    }

    setIsPressed(bool: boolean) {
        this.isPressed = bool;
    }


    /**
     * Checks if a touch is close to the position by a radius distance
     * @param p5 
     * @param position 
     * @param touch 
     * @param radius 
     * @returns boolean
     */
    static checkIfPressed(p5: P5, position: Matter.Vector, touch: any, radius: number): boolean {
        if (p5.dist(position.x, position.y, touch.x, touch.y) < radius)
            return true
        return false;
    }
}