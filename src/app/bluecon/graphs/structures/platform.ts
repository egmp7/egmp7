//import { globalP5 as p5 } from "../../globals/p5";
import Structure, { type Area } from "../../abstract/structure";
import { drawPlatform } from "./sprites/platform";
import { Bodies } from "matter-js";
import { p5 } from "../../components/Sketch";
//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export default class Platform extends Structure {

    public isVisible: boolean = false;
    public body: Matter.Body = this.createBody(this.initPosition, this.area);

    constructor(position: Matter.Vector, area: Area) {
        super(position, area);
        this.setStatic(true);
    }

    createBody(position: Matter.Vector, area: Area): Matter.Body {
        return Bodies.rectangle(position.x, position.y, area.w, area.h);
    }

    run() {
        this.draw(this.body.vertices)
    }
    draw(vertices: Matter.Vector[]) {
        drawPlatform(p5, vertices)
    }
}