import Matter from "matter-js"

namespace Physics {

    let engine = Matter.Engine.create();

    export let engineGravity = engine.gravity;

    export function addBodies(bodies: Matter.Body[]) {
        Matter.Composite.add(engine.world, bodies);
    }

    export function run (){
        Matter.Engine.update(engine);
    }

}

export default Physics