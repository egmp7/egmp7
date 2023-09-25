import type Graph from "../globals/graph";

namespace Render {

    // Private
    let graphs: Graph[];

    /** Executes the run method from a Graph if visible */
    function displayGraphs(): void {
        graphs.forEach((graph: Graph) => {
            if (graph.isVisible) graph.run()
        })
    }

    // Public
    export function addGraphs(graph: Graph): void {
        graphs.push(graph);
    }

    export function run(): void {
        displayGraphs();
    }

}

export default Render;