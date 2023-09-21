import tools from "../tools";
import type Matter from "matter-js"
import type Control from "../tools/control";
import type Collisions from "../tools/collisions";

export default abstract class Graph {
    scrollPosition: Matter.Vector;
    engineGravity: Matter.Gravity
    control: Control;
    collisions: Collisions;

    abstract isVisible: boolean;

    constructor() {
        this.scrollPosition = tools.scroll.position;
        this.engineGravity = tools.physics.engine.gravity;
        this.control = tools.control;
        this.collisions = tools.collisions;
    }

    abstract run(): void;

    setIsVisible(bool: boolean):void {
        this.isVisible = bool;
    }
}