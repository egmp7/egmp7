import Physics from "./physics"
import Scroll from "./scrollPos"
import Rules from "./rules"
import Render from "./render"
import Control from "./control"

class Tools {
    constructor() {
        this.physics = new Physics();
        this.scroll = new Scroll();
        this.rules = new Rules(this.physics, this.scroll);
        this.render = new Render();
        this.control = new Control();
    }
    run(p5) {
        this.physics.run();
        this.scroll.run();
        this.rules.run();
        this.render.run(p5);
    }
}

export default new Tools