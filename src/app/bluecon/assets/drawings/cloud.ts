import Drawing from "../drawing";
import { drawCloud } from "../sprites/cloud";
import { globalP5 as p5 } from "../../globals/p5";
import type { Vector } from "matter-js";

export default class Cloud extends Drawing {

    public isVisible: boolean = true;

    size:number;
    speed: Vector;

    constructor(x: number, y: number, size: number) {
        super({ x: x, y: y })
        this.speed = { x: -0.1, y: 0 };
        this.size = size;
    }

    run(): void {
        this.draw(this.relativePosition, this.size);
        this.updateRelativePosition()
        //this.move();
    }

    draw(position: Vector, size: number):void {
        if (!p5) return;

        p5.push()
        p5.translate(
            position.x,
            position.y + p5.sin(p5.frameCount / 70) * 15)
        drawCloud(p5, size)
        p5.pop()
    }

    move(): void {
        this.position.x += this.speed.x
    }
}