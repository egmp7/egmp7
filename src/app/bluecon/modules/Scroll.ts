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
    let allStructures: Structure[];
    let allDrawings: Drawing[];
    let scrollingSpeed = 6;
    const xRightLimit = 400;
    const xLeftLimit = 50;

    export function init() {
        allStructures = Loader.getAllStructures();
        allDrawings = Loader.getDrawingArray();
        player = Loader.getPlayer();
    }

    export function run() {

        // left canvas limit
        if (player.body.position.x < xLeftLimit) {
            updateScroll(scrollingSpeed);
            scrollStructures(+ scrollingSpeed);
            player.setPosition({ x: xLeftLimit, y: player.body.position.y });
        }
        // right canvas limit
        if (player.body.position.x > xRightLimit) {
            updateScroll(-scrollingSpeed);
            scrollStructures(- scrollingSpeed);
            player.setPosition({ x: xRightLimit, y: player.body.position.y });
        }

        scrollDrawings();
    }

    export function getScrollOffset(): Matter.Vector {
        return offset;
    }

    function scrollStructures(speed: number): void {
        allStructures.forEach((structure) => {
            structure.translate({
                x: speed,
                y: offset.y
            });
        });
    }

    function scrollDrawings(): void {
        allDrawings.forEach((drawing) => {
            const drawingInitPos = drawing.getInitPosition()
            drawing.setRelativePosition({
                x: drawingInitPos.x + offset.x,
                y: drawingInitPos.y
            });
        });
    }

    export function restartScroll(): void {
        allStructures.forEach((structure) => {
            structure.translate({
                x: - offset.x,
                y: - offset.y
            });
        });
        offset = { x: 0, y: 0 }
    }

    function updateScroll(speed: number): void {
        offset.x += speed;
    }
}

export default Scroll