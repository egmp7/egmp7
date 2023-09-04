import { Bodies } from "matter-js";
import { drawVertices } from "../resources/utilities";

export default class Ground{
    constructor(body){
        this.body = body 
    }

    run(p5){
        this.draw(p5)
    }
    draw(p5){
        drawVertices(p5, this.body.vertices)
    }
}