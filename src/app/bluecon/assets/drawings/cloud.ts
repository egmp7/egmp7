import Drawing from "../drawing";
import { drawCloud } from "../sprites/cloud";
import type { Vector } from "matter-js";
import type P5 from "p5"

export default class Cloud extends Drawing {

    size:number;
    speed: Vector;

    constructor(x: number, y: number, size: number) {
        super({ x: x, y: y })
        this.speed = { x: -0.1, y: 0 };
        this.size = size;
    }

    run(p5:P5) {
        this.draw(p5, this.relativePosition, this.size);
        this.updateRelativePosition()
        //this.move();
    }

    draw(p5: P5, position: Vector, size: number) {
        p5.push()
        p5.translate(
            position.x,
            position.y + p5.sin(p5.frameCount / 70) * 15)
        drawCloud(p5, size)
        p5.pop()
    }

    move() {
        this.position.x += this.speed.x
    }
}