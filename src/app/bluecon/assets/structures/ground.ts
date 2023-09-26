import { p5 } from "../../components/Sketch2"
import Structure from "./structure";
import { drawGround } from "./sprites/ground"
import { Bodies } from "matter-js";
//////////////////////////////////////////////////////
import type { Area } from "./structure";
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export default class Ground extends Structure {

    public isVisible: boolean = true;
    public body: Matter.Body = this.createBody();

    constructor(position: Matter.Vector, area: Area) {
        super(position, area);
        this.setStatic(true);
    }

    createBody(): Matter.Body {
        return Bodies.rectangle(this.position.x, this.position.y, 50, 50)
    }

    run(): void {
        this.draw(this.body.vertices);
    }
    draw(vertices: Matter.Vector[]): void {
        drawGround(p5, vertices)
    }
}