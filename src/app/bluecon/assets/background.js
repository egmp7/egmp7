import { drawBackground } from "./animations/background"

export default class Background {
    constructor() {
    }
    run(p5) {
        this.draw(p5);
    }
    draw(p5) {
        drawBackground(p5);
    }
}