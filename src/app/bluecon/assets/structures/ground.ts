import { p5 } from "../../components/Sketch2"
import Structure, { type Area } from "../../abstract/structure";
import { drawGround } from "./sprites/ground"
import { Bodies } from "matter-js";
//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export default class Ground extends Structure {

    public isVisible: boolean = true;
    public body: Matter.Body = this.createBody(this.position, this.area);
    area: Area;

    constructor(position: Matter.Vector, area: Area) {
        super(position, area);
        this.area = area;
        this.setStatic(true);
    }

    createBody(position: Matter.Vector, area: Area): Matter.Body {
        return Bodies.rectangle(
            position.x,
            position.y,
            area.w,
            area.h)
    }

    run(): void {
        this.draw(this.body.vertices);
    }
    draw(vertices: Matter.Vector[]): void {
        drawGround(p5, vertices)
    }
}