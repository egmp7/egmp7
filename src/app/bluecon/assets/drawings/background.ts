import { drawBackground } from "../sprites/background"
import type P5 from "p5"

export default class Background {
    constructor() {
    }
    run(p5:P5) {
        this.draw(p5);
    }
    draw(p5:P5) {
        drawBackground(p5);
    }
}