import Matter from "matter-js"

namespace Physics {

    let engine = Matter.Engine.create();

    export function addBodies(bodies: Matter.Body[]) {
        Matter.Composite.add(engine.world, bodies);
    }

    export function run() {
        Matter.Engine.update(engine);
    }

    export function getEngineGravity(): Matter.Gravity {
        return engine.gravity;
    }

}

export default Physics