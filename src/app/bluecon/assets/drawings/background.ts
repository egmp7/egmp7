import Graph from "../graph";
import { drawBackground } from "../sprites/background";
import { globalP5 as p5 } from "../../globals/p5";

export default class Background extends Graph {
    public isVisible: boolean = true;

    constructor() {
        super();
    }
    run() {
        this.draw();
    }
    draw() {
        if (!p5) return;
        drawBackground(p5);
    }
}