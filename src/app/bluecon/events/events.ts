import type P5 from "p5"
import tools from "../globals/tools";

export default class Events {
    constructor(canvas: P5.Renderer, p5: P5) {

        canvas.mousePressed((event) => {
            if (!p5) return;
            console.log("Clicked on the canvas. Event:", p5.keyCode)
        })

        const leftKey = 37;
        const rightKey = 39;
        const spaceKey = 32;
        const enterKey = 13;

        p5.keyPressed = function () {

            if (p5.keyCode == leftKey) tools.control.setLeft(true);
            if (p5.keyCode == rightKey) tools.control.setRight(true);
            if (p5.keyCode == spaceKey) tools.control.setJump(true);

            // if ( keyCode == ENTER_KEY )
            //     MENU.click()

        }

        p5.keyReleased = function () {
            if (p5.keyCode == leftKey) tools.control.setLeft(false);
            if (p5.keyCode == rightKey) tools.control.setRight(false);
            if (p5.keyCode == spaceKey) tools.control.setJump(false);
        }

        p5.touchStarted = function () {
            console.log(p5.touches)
        }
    }
}