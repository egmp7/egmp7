import type Graph from "../abstract/graph";

namespace Render {

    // Private
    let graphs: Graph[] = [];

    /**
     * Executes the run method from a Graph if visible
     * @param graphsArray 
     */
    function displayGraphs(graphsArray: Graph[]): void {
        graphsArray.forEach((graph: Graph) => {
            if (graph.isVisible) graph.run()
        })
    }

    // Public
    /**
     * Pushes Graph elements from graphsArray attribute to graph Array private variable
     * @param graphsArray 
     */
    export function addGraphs(graphsArray: Graph[]): void {
        graphsArray.forEach((graph) => {
            graphs.push(graph);
        })

    }

    export function run(): void {
        displayGraphs(graphs);
    }

}

export default Render;