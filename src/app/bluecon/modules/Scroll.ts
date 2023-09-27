import Loader from "./Loader";
//////////////////////////////////////////////////////////
import type Matter from "matter-js";
import type Player from "../assets/structures/player";
import type Structure from "../abstract/structure";
import type Drawing from "../abstract/drawing";
//////////////////////////////////////////////////////////
namespace Scroll {
    let offset: Matter.Vector = { x: 0, y: 0 };
    let player: Player;
    let allStructuresNoPlayer: Structure[];
    let allDrawings: Drawing[];
    let scrollingSpeed = 6;
    const xRightLimit = 400;
    const xLeftLimit = 50;

    export function init() {
        allStructuresNoPlayer = Loader.getAllStructuresNoPlayer();
        allDrawings = Loader.getDrawingArray();
        player = Loader.getPlayer();
    }

    export function run() {

        // left canvas limit
        if (player.body.position.x < xLeftLimit) {
            updateScroll(xLeftLimit);
            scrollStructures(allStructuresNoPlayer, scrollingSpeed);
            player.setPosition({ x: xLeftLimit, y: player.body.position.y });
        }
        // right canvas limit
        if (player.body.position.x > xRightLimit) {
            updateScroll(xRightLimit);
            scrollStructures(allStructuresNoPlayer, - scrollingSpeed);
            player.setPosition({ x: xRightLimit, y: player.body.position.y });
        }

        scrollDrawings(allDrawings);
    }

    function scrollStructures(structures: Structure[], speed: number): void {
        structures.forEach((structure) => {
            structure.translate({
                x: speed,
                y: offset.y
            });
        });
    }

    function scrollDrawings(drawings: Drawing[]): void {
        drawings.forEach((drawing) => {
            const drawingInitPos = drawing.getInitPosition()
            drawing.setRelativePosition({
                x: drawingInitPos.x + offset.x,
                y: drawingInitPos.y
            });
        });
    }

    function updateScroll(limit: number): void {
        offset.x = player.body.position.x - limit;
    }
}

export default Scroll