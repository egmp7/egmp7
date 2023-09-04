import { Bodies } from "matter-js";
import { drawVertices } from "../resources/utilities";

export class Ground{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.matter = Bodies.rectangle(x,y,width,height,{ isStatic: true }) 
    }

    run(p5){
        this.draw(p5)
    }
    draw(p5){
        drawVertices(p5, this.matter.vertices)
    }
}