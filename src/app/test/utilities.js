export function drawVertices(p5, vertices) {
    p5.fill(255, 0, 0)
    p5.beginShape();
    for (var i = 0; i < vertices.length; i++) {
        p5.vertex(vertices[i].x, vertices[i].y);
    }
    p5.endShape();
}

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}