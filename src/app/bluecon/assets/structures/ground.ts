import Structure from "../structure";
import { drawGround } from "../sprites/ground"
import type Matter from "matter-js";
import { globalP5 as p5 } from "../../globals/p5";


export default class Ground extends Structure {

    public isVisible: boolean = true;
    constructor(body: Matter.Body) {
        super(body);
        this.setStatic(true);
    }
    run(): void {
        this.draw(this.body.vertices);
    }
    draw(vertices: Matter.Vector[]): void {
        if (!p5) return;
        drawGround(p5, vertices)
    }
}