import { Body, Vector } from "matter-js"

class Display {
    constructor() {
        if (typeof window !== "undefined") {
            const windowWidth = window.innerWidth
            this.scale;
            console.log(windowWidth)

            if (windowWidth <= 440) this.scale = 0.2;
            else if (windowWidth <= 768) this.scale = 0.4;
            else if (windowWidth <= 1024) this.scale = 0.5;
            else if (windowWidth <= 1280) this.scale = 0.6;
            else this.scale = 1;
        }
    }

    scaleBodies( body ){
        const position = Vector.create(
            body.position.x * this.scale,
            body.position.y * this.scale )
        Body.scale(body, this.scale,this.scale)
        Body.setPosition(body, position)
    }
}

export default new Display