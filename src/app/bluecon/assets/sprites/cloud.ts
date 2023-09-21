import type P5 from "p5"

/**
 * Draw clouds
 * @param {P5} p5 
 * @param {number} size 
 */
export function drawCloud(p5: P5, size: number) {
    p5.fill(255);
    p5.ellipse(0, 0, size, size);
    p5.ellipse(- size / 2, 0, size / 3 * 2, size / 3 * 2);
    p5.ellipse(+ size / 2, 0, size / 3 * 2, size / 3 * 2);
}