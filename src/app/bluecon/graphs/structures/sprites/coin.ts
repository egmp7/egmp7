import type P5 from "p5";

export default function drawCoin(p5:P5 ,size: number) {
    p5.fill(255, 230, 0);
    p5.ellipse(0, 0, size / 2, size);
    p5.fill(255, 180, 0);
    p5.ellipse(0, 0, size / 2.8, size / 1.2);
    p5.fill(255, 100, 0);
    p5.ellipse(0, 0, size / 5, size / 5);
}