import Utilities from "../../../resources/utilities";

import type P5 from "p5"

/**
 * Draws player animation
 * @param {P5} p5 
 */
export function fallingAnimation(p5: P5) {
    //body
    p5.fill(0, 0, 200)
    p5.triangle(- 10, - 15, + 10, - 15, 0, - 25);
    p5.rect(- 10, - 15, 20, 30);
    p5.ellipse(- 6, 15, 4, 6);
    p5.ellipse(+ 6, 15, 4, 6);
    //hands
    p5.stroke(0, 0, 200);
    p5.strokeWeight(5);
    p5.line(- 10, - 10, - 16 + Utilities.sinZeroToOne(6, 3, p5.frameCount), - 17);
    p5.line(+ 10, - 10, + 16 - Utilities.sinZeroToOne(6, 3, p5.frameCount), - 17);
    p5.strokeWeight(1);
    p5.noStroke();
    //eyes
    p5.fill(255, 255, 102)
    p5.ellipse(- 3, - 13, 5, 7)
    p5.ellipse(+ 3, - 13, 5, 7)
}

/**
 * Draws player animation
 * @param {P5} p5 
 */
export function frontAnimation(p5: P5) {
    p5.push()
    p5.translate(0, Utilities.sinMinusOneToOne(2, 10, p5.frameCount))
    // body
    p5.fill(0, 0, 200)
    p5.triangle(-10, -15, 10, -15, 0, -25);
    p5.rect(-10, -15, 20, 30);
    // eyes
    p5.fill(255, 255, 102);
    p5.ellipse(-3, -13, 5, 7);
    p5.ellipse(+3, -13, 5, 7);
    // legs
    p5.fill(0, 0, 200)
    p5.rect(-6, 15, 4, 8 + Utilities.sinZeroToOne(1, 6, p5.frameCount), 0, 0, 20);
    p5.rect(+2, 15, 4, 8 - Utilities.sinZeroToOne(1, 6, p5.frameCount), 0, 0, 20);
    p5.pop()
}

/**
 * Draws player animation
 * @param {P5} p5 
 */
export function leftAnimation(p5: P5) {
    p5.push()
    p5.translate(0, Utilities.sinMinusOneToOne(2, 4, p5.frameCount))
    //body
    p5.fill(0, 0, 200)
    p5.triangle(-7, -15, +7, -15, 0, -25);
    p5.rect(-7, -15, 14, 30);
    p5.ellipse(-3, 15, 4, 6);
    p5.ellipse(+5, 15, 4, 6);
    //eyes
    p5.fill(255, 255, 102);
    p5.ellipse(-3, -12, 5, 7);
    p5.pop()
}

/**
 * Draws player animation
 * @param {P5} p5 
 */
export function leftFallingAnimation(p5: P5) {
    //body
    p5.fill(0, 0, 200)
    p5.triangle(- 7, - 15, + 7, - 15, 0, - 25);
    p5.rect(- 7, - 15, 14, 30);
    p5.ellipse(- 3, 15, 4, 6);
    p5.ellipse(+ 5, 15, 4, 6);
    //hands
    p5.stroke(0, 0, 200);
    p5.strokeWeight(5);
    p5.line(+ 7, - 5, + 11, 2 + Utilities.sinZeroToOne(3, 2, p5.frameCount));
    p5.strokeWeight(1);
    p5.noStroke();
    //eyes
    p5.fill(255, 255, 102)
    p5.ellipse(- 3, - 12, 5, 7);
}

/**
 * Draws player animation
 * @param {P5} p5 
 */
export function rightAnimation(p5: P5) {
    p5.push()
    p5.translate(0, Utilities.sinMinusOneToOne(2, 4, p5.frameCount))
    //body
    p5.fill(0, 0, 200)
    p5.triangle(-7, -15, +7, -15, 0, -25);
    p5.rect(-7, -15, 14, 30);
    p5.ellipse(-3, 15, 4, 6);
    p5.ellipse(+5, 15, 4, 6);
    //eyes
    p5.fill(255, 255, 102);
    p5.ellipse(+3, -12, 5, 7);
    p5.pop()
}

/**
 * Draws player animation
 * @param {P5} p5 
 */
export function rightFallingAnimation(p5: P5) {
    //body
    p5.fill(0, 0, 200)
    p5.triangle(- 7, - 14, + 7, - 15, 0, - 25);
    p5.rect(- 7, - 15, 14, 30);
    p5.ellipse(- 3, 15, 4, 6);
    p5.ellipse(+ 5, 15, 4, 6);
    //hands
    p5.stroke(0, 0, 200);
    p5.strokeWeight(5);
    p5.line(- 7, - 5, - 11, 2 + Utilities.sinZeroToOne(3, 2, p5.frameCount));
    p5.strokeWeight(1);
    p5.noStroke();
    //eyes
    p5.fill(255, 255, 102)
    p5.ellipse(+ 3, - 12, 5, 7);
}