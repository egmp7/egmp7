import Asset from "./asset";
//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export default abstract class Drawing extends Asset {
    position: Matter.Vector;
    relativePosition: Matter.Vector;

    constructor(position: Matter.Vector) {
        super();
        this.position = {
            x: position.x,
            y: position.y
        };
        this.relativePosition = {
            x: position.x,
            y: position.y
        };
    }

    /**
 * Updates position of the body by adding the scroll position
 */
    updateRelativePosition() {
        this.relativePosition.x = this.position.x - this.scrollPosition.x;
        this.relativePosition.y = this.position.y - this.scrollPosition.y;
    }
}