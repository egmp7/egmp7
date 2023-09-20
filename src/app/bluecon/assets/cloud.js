import Drawing from "./drawing";
import { drawCloud } from "./sprites/cloud";

export default class Cloud extends Drawing {
    constructor(x, y, size) {
        super({ x: x, y: y })
        this.speed = { x: -0.1, y: 0 };
        this.size = size;
    }

    run(p5) {
        this.draw(p5, this.relativePosition, this.size);
        this.updateRelativePosition()
        //this.move();
    }

    draw(p5, position, size) {
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