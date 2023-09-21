import { globalP5 as p5 } from "../../globals/p5";
import Asset from "../asset";
import { drawBackground } from "./sprites/background";
//////////////////////////////////////////////////////
export default class Background extends Asset {
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