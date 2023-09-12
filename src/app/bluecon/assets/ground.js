import { Body } from "matter-js";

export default class Ground {
    constructor(body) {
        this.body = body;
        Body.setStatic(body, true);
    }

    run(p5) {
        this.draw(p5, this.body.vertices)
    }
    draw(p5, vertices) {

        // green rectangle
        p5.fill(0, 155, 0)
        p5.beginShape();
        for (var i = 0; i < vertices.length; i++) {
            p5.vertex(vertices[i].x, vertices[i].y);
        }
        p5.endShape();

        // top
        const deep = 15;
        p5.fill(0, 174, 0)
        p5.beginShape();
        p5.vertex(vertices[0].x, vertices[0].y)
        p5.vertex(vertices[1].x, vertices[1].y)
        p5.vertex(vertices[1].x - deep, vertices[1].y + deep)
        p5.vertex(vertices[0].x + deep, vertices[0].y + deep)
        p5.vertex(vertices[0].x, vertices[0].y)
        p5.vertex(vertices[1].x, vertices[1].y)
        p5.endShape();

        // left side
        p5.fill(0, 140, 0)
        p5.beginShape();
        p5.vertex(vertices[0].x, vertices[0].y)
        p5.vertex(vertices[0].x + deep, vertices[0].y + deep)
        p5.vertex(vertices[3].x + deep, vertices[3].y )
        p5.vertex(vertices[3].x , vertices[3].y )
        p5.vertex(vertices[0].x, vertices[0].y)
        p5.endShape();

        // right side
        p5.beginShape();
        p5.vertex(vertices[1].x, vertices[1].y)
        p5.vertex(vertices[1].x - deep, vertices[1].y + deep)
        p5.vertex(vertices[2].x - deep, vertices[2].y )
        p5.vertex(vertices[2].x , vertices[2].y )
        p5.vertex(vertices[1].x, vertices[1].y)
        p5.endShape();

    }
}