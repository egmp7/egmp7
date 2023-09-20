import tools from "../globals/tools";

export default class Asset {
    constructor() {
        this.scrollPosition = tools.scroll.position;
        this.engineGravity = tools.physics.engine.gravity;
        this.collisions = tools.physics.collisions;
        this.control = tools.control;
    }
}