import Graph from "./graph";//////////////////////////////////////////////////////
import type Matter from "matter-js";
//////////////////////////////////////////////////////
export default abstract class Drawing extends Graph {
    initPosition: Matter.Vector;
    relativePosition: Matter.Vector;

    constructor(position: Matter.Vector) {
        super();
        this.initPosition = position;
        this.relativePosition = position;
    }

    setRelativePosition(position:Matter.Vector){
        this.relativePosition = position;
    }

    getInitPosition(): Matter.Vector{
        return this.initPosition;
    }
}