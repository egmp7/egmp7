import type P5 from "p5"
import tools from "../globals/tools";
import Buttons from "./buttons";
import LeftButton from "./buttons/left";

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
            const touch = p5.touches[0];


            //if (tools.leftButton.isPressed) tools.control.setLeft(true);


            //if (Buttons.checkIfPressed(p5,leftButton.position,touch,leftButton.radius))
            //leftButton.click()
        }
    }
}