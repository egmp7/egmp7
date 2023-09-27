import { p5 } from "../../components/Sketch2";
import Graph from "../../abstract/graph";
import { drawBackground } from "./sprites/background";
//////////////////////////////////////////////////////
export default class Background extends Graph {
    public isVisible: boolean = true;

    constructor() {
        super();
    }
    run() {
        this.draw();
    }
    draw() {
        drawBackground(p5);
    }
}