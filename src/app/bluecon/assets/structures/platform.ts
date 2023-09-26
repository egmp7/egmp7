//import { globalP5 as p5 } from "../../globals/p5";
import Structure from "./structure";
import { drawPlatform } from "./sprites/platform";
//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export default class Platform extends Structure {
    
    public isVisible: boolean = true;

    constructor(body: Matter.Body) {
        super(body);
        this.setStatic(true);
    }
    run() {
        this.draw(this.body.vertices)
    }
    draw(vertices: Matter.Vector[]) {
        if (!p5) return;
        drawPlatform(p5, vertices)
    }
}