import Loader from "./Loader";
//////////////////////////////////////////////////////////
import type Matter from "matter-js";
import type Player from "../assets/structures/player";
import Structure from "../abstract/structure";
//////////////////////////////////////////////////////////
namespace Scroll {
    let position: Matter.Vector = { x: 0, y: 0 }
    let player: Player;
    let allStructuresNoPlayer: Structure[]
    let scrollingSpeed = 6;
    const xRightLimit = 400;
    const xLeftLimit = 50;

    export function init() {
        allStructuresNoPlayer = Loader.getAllStructuresNoPlayer();
        player = Loader.getPlayer();
    }

    export function run() {

        // left canvas limit
        if (player.body.position.x < xLeftLimit) {
            updateScroll(scrollingSpeed);
            player.setPosition({ x: xLeftLimit, y: player.body.position.y });
        }
        // right canvas limit
        if (player.body.position.x > xRightLimit) {
            updateScroll(- scrollingSpeed);
            player.setPosition({ x: xRightLimit, y: player.body.position.y })
        }

        scrollStructures(allStructuresNoPlayer);
    }

    function scrollStructures(structures: Structure[]): void {
        structures.forEach((structure) => {
            structure.setPosition({
                x: structure.position.x + position.x,
                y: structure.body.position.y
            })
        })
    }

    function updateScroll(speed: number): void {
        position.x += speed;
        console.log(position)
    }
}

export default Scroll