import scroll from "../globals/scrollPos";
import physics from "../globals/physics";
import control from "../globals/control";

export default class Asset {
    constructor() {
        this.scrollPosition = scroll.position;
        this.engineGravity = physics.engine.gravity;
        this.collisions = physics.collisions;
        this.control = control
    }
}