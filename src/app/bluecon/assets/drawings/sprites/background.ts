import type P5 from "p5"

/**
 * Draw Background
 * @param {P5} p5 
 */
export function drawBackground(p5: P5) {
    p5.fill(100, 155, 255)
    p5.rect(0, 0, p5.width, p5.height)
}