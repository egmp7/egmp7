import Loader, { type Structures } from "./Loader";
import Render from "./Render";
import Physics from "./Physics";
import LevelOneAssets from "../levels/levelOneAssets";
import Collisions from "./Collisions";
import Events from "./Events";
import Scroll from "./Scroll";
import Rules from "./Rules";
import Menu from "../graphs/menu";
import Status from "../graphs/status";
//////////////////////////////////////////////////////////
import type Graph from "../abstract/graph";
import { type Drawings } from "./Loader";
//////////////////////////////////////////////////////////
namespace Game {

    export function init(): void {

        Loader.addDrawings({ background: LevelOneAssets.background as Graph[] } as Drawings);
        Loader.addDrawings({ clouds: LevelOneAssets.clouds as Graph[] } as Drawings);
        
        Loader.addStructures({ grounds: LevelOneAssets.grounds as Graph[] } as Structures);
        Loader.addStructures({ platforms: LevelOneAssets.platforms as Graph[] } as Structures);
        Loader.addStructures({ enemies: LevelOneAssets.enemies as Graph[] } as Structures);
        Loader.addStructures({ player: LevelOneAssets.player as Graph[] } as Structures);

        Loader.setStatus(new Status())
        Loader.setMenu(new Menu())

        // testing
        console.log(Loader.getAllGraphs());
        console.log(Loader.getAllBodies());

        Render.addGraphs(Loader.getAllGraphs());
        Physics.addBodies(Loader.getAllBodies());

        Collisions.init();
        Scroll.init();
        Rules.init();
    }

    export function run(): void {
        Render.run();
        Physics.run();
        Collisions.run();
        Events.run();
        Scroll.run();
        Rules.run();
    }
}

export default Game;