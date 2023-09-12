export default class Background {
    constructor() {
    }
    run(p5) {
        this.draw(p5);
    }
    draw(p5) {
        p5.fill(100,155,255)
        p5.rect(0,0,p5.width,p5.height)
    }
}