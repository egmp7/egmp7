import Utilities from "../../resources/utilities";
import { Body, Vector } from "matter-js";
import Structure, { Area } from "../../abstract/structure";
import Matter from "matter-js";
import drawCoin from "./sprites/coin";
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
        if (!this.isPicked) this.draw(this.initPosition, this.area);
    }

    draw(position: Vector, area: Area): void {
        //Utilities.drawVertices(p5, this.body.vertices)

        const size = area.w * 2
        
        p5.push();
        p5.translate(position.x, position.y);
        drawCoin(p5,size);
        p5.pop();
    }

    setIsPicked(bool: boolean) {
        this.isPicked = bool;
    }
}