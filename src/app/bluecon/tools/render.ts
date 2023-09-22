import type Graph from "../globals/graph";

interface Graphs{
    player: Graph[],
    background: Graph[]
    menu: Graph[],
    enemies: Graph[],
    grounds: Graph[],
    clouds: Graph[],
    platforms: Graph[],
    status: Graph[],
}

/**
 * Runner for the elements of the class Graph
 */
export default class Render {
    graphs: Graphs | null;

    constructor() {
        this.graphs = null;
    }
    run(): void {
        this.runGraphs(this.graphs)
    }

    runGraphs(graphs: any): void {

        for (const group in graphs) {
            graphs[group as keyof Graph[]].forEach((graph: Graph) => {
                if (graph.isVisible) graph.run()
            })
        }
    }

    addGraphs(group: any): void {
        this.graphs = { ...this.graphs, ...group }
    }

    /**
     * Shows and runs a group of graphs
     * @param group 
     */
    showGroup(group: Graph[]): void {
        group.forEach((graph: Graph)=>{
            graph.setIsVisible(true);
        })
    }

    /**
     * Hides and stops running a group of graphs
     * @param group 
     */
    hideGroup(group: Graph[]): void {
        group.forEach((graph: Graph)=>{
            graph.setIsVisible(false);
        })
    }
}