import type Structure from "../abstract/structure";
import type Drawing from "../abstract/drawing";
import type Graph from "../abstract/graph";

export interface Assets{
    structures: Structures,
    drawings: Drawings
}

export interface Structures {
    grounds: Structure[],
    platforms: Structure[],
    enemies: Structure[],
    coins: Structure[],
    player: Structure[],
}

export interface Drawings {
    background: Graph[],
    clouds: Drawing[]
}