import Button from "../abstract/button";
import { p5 } from "../components/Sketch2";
import type Matter from "matter-js";

export default class Left extends Button {

    isPressed: boolean = false;

    constructor(position: Matter.Vector, radius: number) {
        super(position, radius)
    }

    draw(position: Matter.Vector, radius: number): void {

        p5.push()
        p5.fill('rgba(255,255,255, 0.25)');
        p5.translate(position.x, position.y);

        p5.ellipse(0, 0, radius * 2, radius * 2)

        p5.strokeWeight(6)
        p5.stroke(0, 0, 180)
        
        const size = radius - 32;
        p5.line(- size, - size, + size, + size)
        p5.line(+ size, - size, - size, + size)
        p5.noStroke()
        p5.pop()

    }
}