import Loader from "./Loader";
import Render from "./Render";
import Physics from "./Physics";
import Collisions from "./Collisions";
import Events from "./Events";
import Scroll from "./Scroll";
import Rules from "./Rules";
//////////////////////////////////////////////////////////
import Menu from "../graphs/menu";
import Status from "../graphs/status";
import buttons from "../constants/buttons";
import levelOneAssets from "../constants/levelOneAssets";
//////////////////////////////////////////////////////////
namespace Game {

    export function init(): void {

        Loader.addDrawings(levelOneAssets.drawings);
        Loader.addStructures(levelOneAssets.structures);
        Loader.addButtons(buttons);
        Loader.setStatus(new Status())
        Loader.setMenu(new Menu())

        // testing
        console.log(Loader.getAllGraphs());
        console.log(Loader.getAllBodies());

        Render.addGraphs(Loader.getAllGraphs());
        Physics.addBodies(Loader.getAllBodies());

        Events.init();
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