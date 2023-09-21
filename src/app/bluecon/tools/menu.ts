//import { p5Object as p5 } from "../globals/p5";
import type P5 from "p5"

export default class Menu {
    //isVisible: boolean = true;
    position: Matter.Vector
    constructor() {
        this.position = { x: 10, y: 0 };
    }
    run() {
        this.draw(this.position);
    }

    draw(position: Matter.Vector) {
        // if (!p5) return;
        // p5.fill(200,0,200)
        // p5.rect(position.x,position.y,200,300)
    }
}