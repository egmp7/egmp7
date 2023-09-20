import Asset from "./asset";

export default class Drawing extends Asset {
    constructor(position) {
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