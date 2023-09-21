import Physics from "../tools/physics";
import Scroll from "../tools/scroll";
import Rules from "../tools/rules";
import Render from "../tools/render";
import Control from "../tools/control";
import Collisions from "../tools/collisions"
import Menu from "../tools/menu";

class Tools {

    physics: Physics;
    scroll: Scroll;
    render: Render;
    control: Control;
    collisions: Collisions;
    rules: Rules;
    menu: Menu;

    constructor() {
        this.physics = new Physics();
        this.scroll = new Scroll();
        this.render = new Render();
        this.control = new Control();
        this.collisions = new Collisions();
        this.menu = new Menu();
        this.rules = new Rules(this.collisions, this.scroll, this.control, this.menu);
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