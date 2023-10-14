import { p5 } from "../components/Sketch";
import Graph from "../abstract/graph";

export default class Status extends Graph {
    isVisible: boolean = false;
    score: number;
    lives: number;
    constructor() {
        super();
        this.score = 0;
        this.lives = 3;
    }

    run(): void {
        this.draw(this.score, this.lives);
    }

    draw(score: number, lives: number): void {

        // Draw Score
        p5.fill(250);
        p5.textSize(20);
        p5.textFont('Courier')
        p5.textAlign(p5.LEFT);
        p5.text('Lives: ', 50, 30);
        p5.text(`Score: ${score}`, 50, 55)

        // Draw Tokens:
        for (var i = 0; i < lives; i++) {
            var x = 120 + i * 23
            var y = 15

            p5.fill(0, 0, 200);
            p5.triangle(x, y, x + 20, y, x + 10, y + 20);
            p5.fill(255, 255, 102);
            p5.triangle(x + 8, y + 5, x + 12, y + 5, x + 10, y + 15);
        }
    }

    /**
     * Set the number of lives
     * @param value 
     */
    setLives(value: number) {
        this.lives = value;
    }

    /**
     * 
     * @param value Set the score
     */
    setScore(value: number) {
        this.score = value;
    }

    addCoin(): void {
        this.score += 100;
    }
}