import { globalP5 as p5 } from "../globals/p5";
import type Matter from "matter-js";

/**
 * 
 * @param vertices 
 * @returns 
 */
export function drawVertices(vertices: Matter.Vector[]): void {
    if (!p5) return;

    p5.fill(255, 0, 255)
    p5.beginShape();
    for (var i = 0; i < vertices.length; i++) {
        p5.vertex(vertices[i].x, vertices[i].y);
    }
    p5.endShape();
}

export function classNames(...classes: any[]): string {
    return classes.filter(Boolean).join(' ')
}

/**
 * Sin function to retrieve values between 0 to 1 times the magnitude
 * @param {number} magnitude 
 * @param {number} speed 
 * @returns 
 */
export function sinZeroToOne(magnitude: number, speed: number): number {
    if (!p5) return 0;
    return magnitude * (p5.sin(p5.frameCount / speed) + 1) / 2;
}

/**
 * Sin function to retrieve values between -1 to 1 times the magnitude
 * @param {number} magnitude 
 * @param {number} speed 
 * @returns 
 */
export function sinMinusOneToOne(magnitude: number, speed: number): number {
    if (!p5) return 0;
    return magnitude * p5.sin(p5.frameCount / speed);
}