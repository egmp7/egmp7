import scroll from "../globals/scrollPos";
import physics from "../globals/physics";

export default class Asset {
    constructor(){
        this.scrollPosition = scroll.position;
        this.engineGravity = physics.engine.gravity;
    }
}