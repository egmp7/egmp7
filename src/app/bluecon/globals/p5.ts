import type P5 from "p5";

export var globalP5: P5 | null;

export function setGlobalP5(p5: P5) {
    globalP5 = p5;
}