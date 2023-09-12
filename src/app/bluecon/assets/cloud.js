import scrollPos from "../globals/scrollPos";

export default class Cloud {
    constructor(x, y, size) {
        this.position = { x: x, y: y };
        this.speed = { x: -0.1, y: 0 };
        this.size = size;
    }

    run(p5) {
        this.draw(p5, this.position, - scrollPos.position.x, this.size);
        this.move();
    }

    draw(p5, position, scrollPos, size) {
        p5.push()
        p5.translate(
            position.x + scrollPos,
            position.y + p5.sin(p5.frameCount / 70) * 15)
        p5.fill(0, 255, 255);
        p5.ellipse(0, 0, size, size);
        p5.ellipse(- size / 2, 0, size / 3 * 2, size / 3 * 2);
        p5.ellipse(+ size / 2, 0, size / 3 * 2, size / 3 * 2);
        p5.pop()
    }

    move() {
        this.position.x += this.speed.x
    }
}