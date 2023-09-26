import player from "../assets/player";
//import tools from "./globals/tools";
import Tools from "./Tools";
import Render from "./Render";
import Physics from "./Physics";
import Loader, { Structures } from "./Loader";
import LevelOneAssets from "../levels/levelOneAssets";
import Collisions from "./Collisions";
import LevelOneBodies from "../levels/levelOneBodies";
import Graph from "../globals/graph";
import { Drawings } from "./Loader";

namespace Game {

    export function init(): void {
        // Render.addGraphs(LevelOneAssets.background);
        // Render.addGraphs(LevelOneAssets.clouds);
        // Render.addGraphs(LevelOneAssets.grounds);
        // Render.addGraphs(LevelOneAssets.player);

        Loader.addDrawings({ background: LevelOneAssets.background as Graph[] } as Drawings);
        Loader.addDrawings({ clouds: LevelOneAssets.clouds as Graph[] } as Drawings);
        
        Loader.addStructures({ grounds: LevelOneAssets.grounds as Graph[] } as Structures)
        Loader.addStructures({ player: LevelOneAssets.player as Graph[] } as Structures)

        console.log(Loader.getDrawings());
        console.log(Loader.getStructures());
        console.log(Loader.getAllGraphs());

        Render.addGraphs(Loader.getAllGraphs());


        Physics.addBodies(Loader.getAllBodies());
        Collisions.setCollisionElements();
    }

    export function run(): void {
        Render.run();
        Physics.run();
        Collisions.run();
    }
}

export default Game;

// export default class Game {

//     constructor() {

//         tools.addGraphsToRender(LevelOneAssets);
//         // tools.render.addGraphs({ menu: [tools.menu] });
//         // tools.render.addGraphs({ status: [tools.status] });
//         // tools.collisions.setBodies(LevelOneBodies);
//         // tools.collisions.setPlayer(player);
//         // tools.scroll.setBodies(LevelOneBodies);
//         // tools.scroll.setPlayer(player);
//         // tools.rules.setPlayer(player);
//         // tools.physics.setBodies(LevelOneBodies);
//         // tools.physics.setPlayer(player);
//         // tools.physics.addElementsToWorld();
//     }
//     run() {
//         tools.run();
//     }
// }