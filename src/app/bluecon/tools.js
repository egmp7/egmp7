import Physics from "./tools/physics";
import Scroll from "./tools/scroll";
import Rules from "./tools/rules";
import Render from "./tools/render";
import Control from "./tools/control";
import Collisions from "./tools/collisions"

class Tools {
    constructor() {
        this.physics = new Physics();
        this.scroll = new Scroll();
        this.render = new Render();
        this.control = new Control();
        this.collisions = new Collisions();
        this.rules = new Rules(this.collisions, this.scroll);
    }
    run(p5) {
        this.physics.run();
        this.scroll.run();
        this.rules.run();
        this.render.run(p5);
        this.collisions.run();
    }
}

export default new Tools