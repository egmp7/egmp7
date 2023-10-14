import Utilities from "../../resources/utilities";
import { Body, Vector } from "matter-js";
import Structure, { Area } from "../../abstract/structure";
import Matter from "matter-js";
import { p5 } from "../../components/Sketch";

export default class Coin extends Structure {

    isVisible: boolean = false;
    body: Body = this.createBody(this.initPosition, this.area);
    isPicked: boolean = false;

    constructor(position: Matter.Vector, area: Area) {
        super(position, area)
    }

    createBody(position: Vector, area: Area): Body {
        return Matter.Bodies.rectangle(position.x, position.y, area.w, area.w, { isSensor: true, isStatic: true })
    }

    run(): void {
        this.draw(this.isPicked);
    }

    draw(isPicked: boolean): void {
        if (!isPicked) Utilities.drawVertices(p5, this.body.vertices)
    }

    setIsPicked(bool: boolean) {
        this.isPicked = bool;
    }
}