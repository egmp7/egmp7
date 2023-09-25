import Render from "../tools/render";

namespace Tools {
  // Private
  let render = new Render;

  // function privateFunction(): void {
  //   console.log("This is a private function");
  // }

  // Public 
  export let publicVariable: string = "I'm public";

  export function addGraphsToRender(group:any): void {
    render.addGraphs(group);
  }
  export function run():void{
    render.run();
  }
}

export default Tools;  