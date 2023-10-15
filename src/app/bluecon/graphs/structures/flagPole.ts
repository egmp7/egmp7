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
        this.draw(this.body.position, this.isReached);
    }

    draw(position: Vector, isReached: boolean) {

        //Utilities.drawVertices(p5, this.body.vertices);

        p5.fill(250, 0, 0);
        p5.push();
        p5.translate(position.x, position.y)
        if (isReached) p5.rect(6, - 70, 30, 20);
        else p5.rect(6, - 30, 30, 20);
        p5.fill(60);
        p5.rect(0, - 70, 6, 70)
        p5.pop();
    }

    setIsReached(bool: boolean) {
        this.isReached = bool;
    }
}