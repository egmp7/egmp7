import { drawPlatform } from "./sprites/platform"
import { Body } from "matter-js";

export default class Platform {
    constructor(body) {
        this.body = body;
        Body.setStatic(body, true);
    }
    run(p5) {
        this.draw(p5, this.body.vertices)
    }
    draw(p5, vertices) {
        drawPlatform(p5, vertices)
    }
}