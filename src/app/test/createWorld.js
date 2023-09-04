import { Composite } from "matter-js";

export function createWorld(world) {
    const composite = Composite.create()

    Composite.add(composite,world.player.matter)

    world.grounds.forEach(ground => {
        Composite.add( composite, ground.matter)
    });
    //Composite.add(composite,world.grounds.matter)

    return composite
}