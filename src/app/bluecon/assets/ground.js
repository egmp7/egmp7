import { Body } from "matter-js";
import { drawGround } from "./sprites/ground"

export default class Ground {
    constructor(body) {
        this.body = body;
        Body.setStatic(body, true);
    }
    run(p5) {
        this.draw(p5, this.body.vertices)
    }
    draw(p5, vertices) {
        drawGround(p5, vertices)
    }
}