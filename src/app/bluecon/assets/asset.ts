import tools from "../tools";
import Graph from "../globals/graph";
//////////////////////////////////////////////////////
import type Matter from "matter-js"
import type Control from "../tools/control";
import type Collisions from "../tools/collisions";
//////////////////////////////////////////////////////
export default abstract class Asset extends Graph {
    scrollPosition: Matter.Vector;
    engineGravity: Matter.Gravity
    control: Control;
    collisions: Collisions;

    constructor() {
        super();
        this.scrollPosition = tools.scroll.position;
        this.engineGravity = tools.physics.engine.gravity;
        this.control = tools.control;
        this.collisions = tools.collisions;
    }
}