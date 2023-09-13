/**
 * Draws a platform
 * @param {P5} p5 
 * @param {Array<Body.vertices>} vertices 
 */
export function drawPlatform(p5, vertices) {
    //red rectangle
    p5.push()
    p5.fill(255, 155, 0)
    p5.beginShape();
    for (var i = 0; i < vertices.length; i++) {
        p5.vertex(vertices[i].x, vertices[i].y);
    }
    p5.endShape();
    // yellow rectangle
    const deep = 3;
    p5.fill(255, 255, 0)
    p5.beginShape();
    p5.vertex(vertices[0].x + deep, vertices[0].y + deep)
    p5.vertex(vertices[1].x - deep, vertices[1].y + deep)
    p5.vertex(vertices[2].x - deep, vertices[2].y - deep)
    p5.vertex(vertices[3].x + deep, vertices[3].y - deep)
    p5.vertex(vertices[0].x + deep, vertices[0].y + deep)
    p5.endShape()
    p5.pop()
}