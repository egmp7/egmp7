import Physics from "../tools/physics";
import Scroll from "../tools/scroll";
import Rules from "../tools/rules";
import Render from "../tools/render";
import Control from "../tools/control";
import Collisions from "../tools/collisions"
import Menu from "../tools/menu";
import Status from "../tools/status";
import { globalP5 } from "./p5";
import LeftButton from "../events/buttons/left";

class Tools {

    physics: Physics;
    scroll: Scroll;
    render: Render;
    control: Control;
    collisions: Collisions;
    rules: Rules;
    menu: Menu;
    status: Status;
    leftButton: LeftButton | undefined;

    constructor() {
        this.physics = new Physics();
        this.scroll = new Scroll();
        this.render = new Render();
        this.control = new Control();
        this.collisions = new Collisions();
        this.status = new Status;
        this.menu = new Menu(this.status);
        this.rules = new Rules(this.collisions, this.scroll, this.control, this.menu, this.render, this.status);
        
        
        const p5 = globalP5;
        if (!p5) return;
        const midY = (p5.height / 24 * 19) + (p5.height - (p5.height / 24 * 19)) / 2
        this.leftButton = new LeftButton(p5, { x: 60, y: midY });
        
    }
    run() {
        this.physics.run();
        this.scroll.run();
        this.rules.run();
        this.render.run();
        this.collisions.run();
    }
}

export default new Tools