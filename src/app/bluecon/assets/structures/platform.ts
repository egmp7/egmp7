import Structure from "../structure";
import { drawPlatform } from "../sprites/platform"
import type Matter from "matter-js"
import type P5 from "p5"

export default class Platform extends Structure {
    
    public isVisible: boolean = true;

    constructor(body: Matter.Body) {
        super(body);
        this.setStatic(true);
    }
    run(p5: P5) {
        this.draw(p5, this.body.vertices)
    }
    draw(p5: P5, vertices: Matter.Vector[]) {
        drawPlatform(p5, vertices)
    }
}