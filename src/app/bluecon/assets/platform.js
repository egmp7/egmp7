import Structure from "./structure";
import { drawPlatform } from "./sprites/platform"

export default class Platform extends Structure {
    constructor(body) {
        super(body);
        this.setStatic(true);
    }
    run(p5) {
        this.draw(p5, this.body.vertices)
    }
    draw(p5, vertices) {
        drawPlatform(p5, vertices)
    }
}