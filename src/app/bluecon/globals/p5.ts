import type P5 from "p5";

export var globalP5: P5 | null;

export function setGlobalP5(p5: P5) {
    globalP5 = p5;
}


export class P5Globals{
    canvas: P5.Renderer;
    constructor(canvas: P5.Renderer){
        this.canvas = canvas;
        this.canvas.mousePressed((event) => {
            if (!globalP5) return;
            console.log("Clicked on the canvas. Event:", globalP5.keyCode)
          })
    }
}
export var canvas: P5.Renderer | null;