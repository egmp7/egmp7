import Asset from "./asset";
import { drawGround } from "./sprites/ground"

export default class Ground extends Asset {
    constructor(body) {
        super(body);
        this.setStatic(true);
    }
    run(p5) {
        this.draw(p5, this.body.vertices);
    }
    draw(p5, vertices) {
        drawGround(p5, vertices)
    }
}