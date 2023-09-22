import Graph from "../globals/graph";
import { globalP5 as p5 } from "../globals/p5";

export default class Menu extends Graph {

    position: Matter.Vector
    isVisible: boolean = true;

    constructor() {
        super();
        this.position = { x: 10, y: 10 };
    }

    run(): void {
        this.draw(this.position);
    }

    draw(position: Matter.Vector): void {
        if (!p5) return;
        p5.fill(200, 0, 200)
        p5.rect(position.x, position.y, 200, 300)
    }
}