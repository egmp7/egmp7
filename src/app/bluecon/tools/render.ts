import type Graph from "../globals/graph";

/**
 * Runner for the elements of the class Graph
 */
export default class Render {
    graphs: any;

    constructor() {
        this.graphs = {};
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
}