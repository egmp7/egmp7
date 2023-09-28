import Graph from "../abstract/graph";
import Status from "./status";
import Loader from "../modules/Loader";
import { p5 } from "../components/Sketch";

enum MenuType {
    Init,
    GameOver,
    Completed
}

export default class Menu extends Graph {

    position: Matter.Vector
    isVisible: boolean = true;
    type: MenuType;
    status: Status;

    constructor() {
        super();
        this.position = { x: 10, y: 10 };
        this.type = MenuType.Init;
        this.status = Loader.getStatus();
    }

    run(): void {
        this.draw(this.type, Loader.getStatus().score);
    }

    draw(type: MenuType, score: number): void {
        p5.fill(`rgba(0,0,0, 0.25)`); // background rectangle
        p5.rect(p5.width / 16 * 2, p5.height / 9 * 2, p5.width / 16 * 12, p5.height / 9 * 5)

        p5.textSize(24);   // text setup
        p5.textAlign(p5.CENTER);
        p5.fill(255);

        if (type === MenuType.Init) {
            p5.text("Tap 📱 or Press Enter 💻", p5.width / 2, p5.height / 2 + 10);
        }

        //Level Completed
        if (type === MenuType.Completed) {
            const offsetY = + 25
            p5.textSize(38);
            p5.text(`Level completed!`, p5.width / 2, p5.height / 2 - 58 + offsetY);
            p5.textSize(42);
            p5.text(`Your score is ${score}`, p5.width / 2, p5.height / 2 - 21 + offsetY)
            p5.textSize(32);
            p5.text(`Thank you for playing`, p5.width / 2, p5.height / 2 + 16 + offsetY)
            p5.textSize(24);
            p5.text("Tap 📱 or Press Enter 💻 to continue.", p5.width / 2, p5.height / 2 + 48 + offsetY);
        }
        // Game Over
        if (type === MenuType.GameOver) {
            const offsetY = + 40
            p5.textSize(38);
            p5.text("Game over ☠️", p5.width / 2, p5.height / 2 - 61 + offsetY);
            p5.textSize(42);
            p5.text(`Your score is ${score}`, p5.width / 2, p5.height / 2 - 21 + offsetY)
            p5.textSize(24);
            p5.text("Tap 📱 or Press Enter 💻 to continue.", p5.width / 2, p5.height / 2 + 16 + offsetY);
        }
    }
}