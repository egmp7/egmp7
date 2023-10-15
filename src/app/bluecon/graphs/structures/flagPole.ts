import Utilities from "../../resources/utilities";
import { Body, Vector, Bodies } from "matter-js";
import { p5 } from "../../components/Sketch";
import Structure, { Area } from "../../abstract/structure";

export default class flagPole extends Structure {

    body: Body = this.createBody(this.initPosition,this.area);
    isVisible: boolean = false;

    constructor(position: Vector) {
        super(position, { w: 20, h: 10 });
    }

    createBody(position: Vector, area: Area): Body {
        return Bodies.rectangle(position.x, position.y, area.w, area.h);
    }

    run(): void {
        this.draw();
    }

    draw(){
        Utilities.drawVertices(p5,this.body.vertices);
    }
}