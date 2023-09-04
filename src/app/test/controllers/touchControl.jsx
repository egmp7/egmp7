import dynamic from 'next/dynamic'
import { classNames } from '../resources/utilities.js';
import control from './control.js';
const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const buttonWidth = 50;
const buttonHeight = 50;

export default function TouchControl({ name , player }) {

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(buttonWidth, buttonHeight).parent(canvasParentRef)
        p5.ellipseMode(p5.CORNER);
        p5.noStroke();
        drawButtons(p5,name)
    }

    function touchStart() {
        if (name === "left") control.setLeft(true)
        if (name === "right") control.setRight(true)
        if (name === "jump") control.setJump(true)
    }

    function touchEnd() {
        if (name === "left") control.setLeft(false)
        if (name === "right") control.setRight(false)
        if (name === "jump") control.setJump(false)
    }

    return (
        <button
            className={classNames(
                name === "left" ? "top-[400px] left-[30px]" :
                name === "right" ? "top-[400px] left-[100px]" :
                name === "jump" ? "top-[400px] left-[250px]" :
                "", `absolute rounded-full w-[${buttonWidth}px] h-[${buttonHeight}px] `)}
            onTouchStart={e => touchStart()}
            onTouchEnd={e => touchEnd()}
            onContextMenu={(e) => e.preventDefault()}>
            <Sketch setup={setup} />
        </button>)
}

function drawButtons(p5, name) {
    if (name === "left") {
        p5.fill('rgba(255,255,255, 0.25)');
        p5.ellipse(0, 0, buttonWidth, buttonHeight)
        const size = buttonWidth / 2 - 10;
        p5.fill(0, 255, 0);
        p5.push();
        p5.translate(20, 25);
        p5.triangle(
            +size, +size,
            +size, -size,
            -size, 0);
        p5.pop();
    }

    if (name === "right") {
        p5.fill('rgba(255,255,255, 0.25)');
        p5.ellipse(0, 0, buttonWidth, buttonHeight)

        const size = buttonWidth / 2 - 10;
        p5.fill(0, 255, 0);
        p5.push();
        p5.translate(30, 25);
        p5.triangle(
            -size, -size,
            -size, +size,
            +size, 0);
        p5.pop();
    }

    if (name === "jump") {
        p5.fill('rgba(255,255,255, 0.25)');
        p5.ellipse(0, 0, buttonWidth, buttonHeight)

        const size = buttonWidth / 2 - 12;
        p5.fill(0, 255, 0);
        p5.push();
        p5.translate(26, 25);
        p5.strokeWeight(6)
        p5.stroke(0, 0, 180)
        p5.line(
            - size, - size,
            + size, + size)
        p5.line(
            + size, - size,
            - size, + size)
        p5.pop();
    }
}