import { Composite, Engine, Runner } from "matter-js";

export class Matter{
    constructor(){
        this.engine = Engine.create();
        const runner = Runner.create();
        Runner.run(runner, this.engine);
    }

    addElementsToEngine(element){
        Composite.add(this.engine.world, element);
    }

    getGravity(){
        return this.engine.gravity;
    }
} 