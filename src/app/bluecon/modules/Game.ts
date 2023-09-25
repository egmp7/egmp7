import player from "../assets/player";
//import tools from "./globals/tools";
import Tools from "./Tools";
import LevelOneAssets from "../levels/levelOneAssets";
import LevelOneBodies from "../levels/levelOneBodies";

namespace Game {
    function load(): void {
        Tools.addGraphsToRender(LevelOneAssets.background);
    }

    export function init(): void {
        load();
    }

    export function run():void{
        Tools.run();
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