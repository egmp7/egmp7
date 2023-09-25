import Render from "./Render";

namespace Tools {
  // Private


  // Public 

  export function addGraphsToRender(group:any): void {
    Render.addGraphs(group);
  }
  export function run():void{
    Render.run();
  }
}

export default Tools;  