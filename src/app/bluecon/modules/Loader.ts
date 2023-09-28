import type Structure from "../abstract/structure";
import type Drawing from "../abstract/drawing";
import type Player from "../assets/structures/player";
import type Graph from "../abstract/graph";
import type Matter from "matter-js";
import type Status from "../graphs/status";
import { type Buttons } from "../constants/buttons";
import type Menu from "../graphs/menu";

export interface Structures {
    grounds: Graph[],
    platforms: Graph[],
    enemies: Graph[],
    player: Graph[],
}

export interface Drawings {
    background: Graph[],
    clouds: Graph[]
}

namespace Loader {
    let drawings: Drawings;
    let structures: Structures;
    let buttons: Buttons;
    let status: Status;
    let menu: Menu;

    ////////////////////////////////////////////////////////////////
    /**
     * Get all graphs in Loader 
     * @returns Graph[]
     */
    export function getAllGraphs(): Graph[] {
        let g: Graph[] = [];

        // add drawings

        for (const key in drawings) {
            drawings[key as keyof Drawings].forEach(drawing => {
                g.push(drawing);
            });
        }

        // add structures
        for (const key in structures) {
            structures[key as keyof Structures].forEach(structure => {
                g.push(structure);
            });
        }

        // add buttons
        for (const key in buttons) {
            g.push(buttons[key as keyof Buttons] as Graph);
        }

        // add status
        g.push(status);

        // add menu
        g.push(menu);

        return g;
    }

    export function getAllBodies(): Matter.Body[] {
        let b: Matter.Body[] = [];

        for (const key in structures) {
            const structuresArray = (structures[key as keyof Structures] as Structure[])
            structuresArray.forEach((structure) => {
                b.push(structure.body);
            });
        };

        return b;
    }

    export function getAllStructures(): Structure[] {
        let b: Structure[] = [];

        for (const key in structures) {
            const structuresArray = (structures[key as keyof Structures] as Structure[])
            structuresArray.forEach((structure) => {
                b.push(structure);
            });
        };

        return b;
    }

    export function getDrawings(): Drawings {
        return drawings;
    }

    export function getDrawingArray(): Drawing[] {
        let d: Drawing[] = [];

        for (const key in drawings) {
            if (key === "background") continue;
            const drawingsArray = (drawings[key as keyof Drawings] as Drawing[])
            drawingsArray.forEach((drawing) => {
                d.push(drawing);
            });
        };

        return d;
    }

    export function getStructures(): Structures {
        return structures;
    }
    export function getPlayer(): Player {
        return structures.player[0] as Player;
    }
    export function getStatus(): Status {
        return status as Status;
    }
    export function getButtons(): Buttons{
        return buttons;
    }

    ////////////////////////////////////////////////////////////////
    export function addDrawings(d: Drawings): void {
        drawings = { ...drawings, ...d };
    }
    export function addStructures(s: Structures): void {
        structures = { ...structures, ...s };
    }
    export function addButtons(b: Buttons): void {
        buttons = { ...buttons, ...b };
    }
    export function setMenu(m: Menu): void {
        menu = m;
    }
    export function setStatus(s: Status): void {
        status = s;
    }
}

export default Loader;