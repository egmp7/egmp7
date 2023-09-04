import { Engine, Runner } from "matter-js";

class Physics{
    constructor(){
        this.engine = Engine.create();
        const runner = Runner.create();
        Runner.run(runner, this.engine);
    }
}

export default (new Physics)