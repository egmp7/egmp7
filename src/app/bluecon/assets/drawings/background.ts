import { p5 } from "../../components/Sketch2";
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
        drawBackground(p5);
    }
}