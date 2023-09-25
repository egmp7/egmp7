import { p5 } from "../../components/Sketch2"
import Structure from "./structure";
import { drawGround } from "./sprites/ground"
//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
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
        drawGround(p5, vertices)
    }
}