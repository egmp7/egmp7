import type Matter from "matter-js";
import type P5 from "p5";

export default class Utilities {
    static drawVertices(p5: P5, vertices: Matter.Vector[]): void {

        p5.fill(255, 0, 255)
        p5.beginShape();
        for (var i = 0; i < vertices.length; i++) {
            p5.vertex(vertices[i].x, vertices[i].y);
        }
        p5.endShape();
    }

    /**
     * Sin function to retrieve values between 0 to 1 times the magnitude
     * @param magnitude 
     * @param speed 
     * @param frameCount 
     * @returns 
     */
    static sinZeroToOne(magnitude: number, speed: number, frameCount: number): number {
        return magnitude * (Math.sin(frameCount / speed) + 1) / 2;
    }

    /**
     * Sin function to retrieve values between -1 to 1 times the magnitude
     * @param magnitude 
     * @param speed 
     * @param frameCount 
     * @returns 
     */
    static sinMinusOneToOne(magnitude: number, speed: number, frameCount: number): number {
        return magnitude * Math.sin(frameCount / speed);
    }

    static calculateDistance(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
}

export function classNames(...classes: any[]): string {
    return classes.filter(Boolean).join(' ')
}