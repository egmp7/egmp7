import type Graph from "../globals/graph";

/**
 * Runner for the elements of the class Graph
 */
export default class Render {
    graphs: Graph[];

    constructor() {
        this.graphs =[];
    }
    run(): void {
        this.runAssets(this.graphs)
    }

    runAssets(graphs: Graph[]): void {

        graphs.forEach((graph: Graph)=>{
            if (graph.isVisible) graph.run()
        })
    }

    addGraphs(groupGraphs: any[]): void{
        groupGraphs.forEach((graphs:Graph[])=>{
            graphs.forEach((graph : Graph)=>{
                this.graphs.push(graph)
            })
            
        })
    }
}