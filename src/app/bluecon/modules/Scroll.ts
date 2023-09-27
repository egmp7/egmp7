import Loader from "./Loader";
//////////////////////////////////////////////////////////
import type Matter from "matter-js";
import type Player from "../assets/structures/player";
import type Structure from "../abstract/structure";
//////////////////////////////////////////////////////////
namespace Scroll {
    let position: Matter.Vector = { x: 0, y: 0 }
    let player: Player;
    let allStructuresNoPlayer: Structure[]
    const xRightLimit = 400;
    const xLeftLimit = 50;

    export function init(){
        allStructuresNoPlayer = Loader.getAllStructuresNoPlayer();
        player = Loader.getPlayer();
    }

    export function run(){

    }
}

export default Scroll