import { Body } from "matter-js";
import { drawVertices } from "../resources/utilities";
import Asset from "../asset"
import display from "../globals/display";

export default class Ground extends Asset{
    constructor(body){
        super(body)
        Body.setStatic(body,true);
    }

    run(p5){
        this.draw(p5)
    }
    draw(p5){
        drawVertices(p5, this.body.vertices)
    }
}