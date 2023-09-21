import Structure from "../structure";
import { drawGround } from "../sprites/ground"
import type Matter from "matter-js";
import type P5 from "p5"

export default class Ground extends Structure {
    constructor(body: Matter.Body) {
        super(body);
        this.setStatic(true);
    }
    run(p5: P5) {
        this.draw(p5, this.body.vertices);
    }
    draw(p5: P5, vertices: Matter.Vector[]) {
        drawGround(p5, vertices)
    }
}