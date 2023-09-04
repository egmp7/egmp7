import { Engine } from "matter-js";

class Physics{
    constructor(){
        this.engine = Engine.create();
    }
}

export default (new Physics)