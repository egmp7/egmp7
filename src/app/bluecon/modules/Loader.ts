import type Structure from "../abstract/structure";
import type Player from "../assets/structures/player";
import type Graph from "../abstract/graph";
import type Matter from "matter-js";

interface Graphs {
    structures: Structures,
    drawings: Drawings,
    status: Graph,
    menu: Graph
}

export interface Structures {
    grounds: Graph[],
    player:Graph[],
}

export interface Drawings {
    background: Graph[],
    clouds: Graph[]
}

namespace Loader {
    let drawings: Drawings;
    let structures: Structures;
    let status: Graph;
    let menu: Graph;

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

        // add status
        //g.push(status);

        // add menu
        //g.push(menu);

        return g;
    }

    export function getAllBodies(): Matter.Body[] {
        let b: Matter.Body[] = [];

        for (const key in structures) {
            const structuresArray = (structures[key as keyof Structures] as Structure[])
            structuresArray.forEach((structure) => {
                b.push(structure.body)
            })
        }

        return b;
    }

    export function getDrawings(): Drawings {
        return drawings;
    }

    export function getStructures(): Structures {
        return structures;
    }

    export function addDrawings(d: Drawings): void {
        drawings = { ...drawings, ...d };
    }

    export function addStructures(s: Structures): void {
        structures = { ...structures, ...s };
    }

    export function addMenu(m: Graph): void {
        menu = m;
    }
    export function addStatus(s: Graph): void {
        status = s;
    }

    export function getPlayerStructure():Player{
        return structures.player[0] as Player;
    }

}

export default Loader;