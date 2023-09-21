import type P5 from "p5";
import type Matter from "matter-js";

export function drawVertices(p5: P5, vertices: Matter.Vector[]) {
    p5.fill(255, 0, 255)
    p5.beginShape();
    for (var i = 0; i < vertices.length; i++) {
        p5.vertex(vertices[i].x, vertices[i].y);
    }
    p5.endShape();
}

export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

/**
 * Sin function to retrieve values between 0 to 1 times the magnitude
 * @param {P5} p5 
 * @param {number} magnitude 
 * @param {number} speed 
 * @returns 
 */
export function sinZeroToOne(p5: P5, magnitude: number, speed: number) {
    return magnitude * (p5.sin(p5.frameCount / speed) + 1) / 2;
}

/**
 * Sin function to retrieve values between -1 to 1 times the magnitude
 * @param {P5} p5 
 * @param {number} magnitude 
 * @param {number} speed 
 * @returns 
 */
export function sinMinusOneToOne(p5: P5, magnitude: number, speed: number) {
    return magnitude * p5.sin(p5.frameCount / speed);
}