import Ground from "./assets/ground";
import Player from "./assets/player";
import Enemy from "./assets/enemy";


class Render {
    
    constructor() {
        this.elements = []
    }

    /**
     * Add elements for rendering with p5
     * @param {[]Matter.Body} elements 
     * @param {string} name 
     */
    add(elements, name) {
        if (!Array.isArray(elements)) {
            if (name === "player") this.elements.push(new Player(elements))
        }

        else {
            elements.forEach(element => {
                if (name === "grounds") this.elements.push(new Ground(element))
            });

            elements.forEach(element => {
                if (name === "enemies") this.elements.push(new Enemy(element , 50))
            });
        }
    }

    run(p5) {
        this.elements.forEach(element => {
            element.run(p5)
        });
    }
}

export default new Render