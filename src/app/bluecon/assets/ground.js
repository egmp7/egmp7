import { Body } from "matter-js";
import { drawVertices } from "../resources/utilities";
import display from "../globals/display";

export default class Ground{
    constructor(body){
        this.body = body
        display.scaleBodies(body);
        Body.setStatic(body,true);
    }

    run(p5){
        this.draw(p5)
    }
    draw(p5){
        drawVertices(p5, this.body.vertices)
    }
}