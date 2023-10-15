import Utilities from "../../resources/utilities";
import { Body, Vector, Bodies } from "matter-js";
import { p5 } from "../../components/Sketch";
import Structure, { Area } from "../../abstract/structure";

export default class flagPole extends Structure {

    body: Body = this.createBody(this.initPosition, this.area);
    isVisible: boolean = false;
    isReached: boolean = false;

    constructor(position: Vector) {
        super(position, { w: 10, h: 400 });
    }

    createBody(position: Vector, area: Area): Body {
        return Bodies.rectangle(position.x, position.y, area.w, area.h, { isSensor: true, isStatic: true });
    }

    run(): void {
        if (!this.isReached) this.draw();
    }

    draw() {
        Utilities.drawVertices(p5, this.body.vertices);
    }

    setIsReached(bool: boolean) {
        this.isReached = bool;
    }
}