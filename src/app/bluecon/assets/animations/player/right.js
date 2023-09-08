export default function rightAnimation(p5) {

    // Position Animation
    const positionSpeed = 4;
    const ratioPosition =
        (p5.sin(p5.frameCount / positionSpeed)); // return (-1 to 1)
    const yMovement = ratioPosition * 2;

    p5.push()
    p5.translate(0, yMovement)
    //body
    p5.fill(0, 0, 200)
    p5.triangle(-7, -15, +7, -15, 0, -25);
    p5.rect(-7, -15, 14, 30);
    p5.ellipse(-3, 15, 4, 6);
    p5.ellipse(+5, 15, 4, 6);
    //eyes
    p5.fill(255, 255, 102);
    p5.ellipse(+3, -12, 5, 7);
    p5.pop()

}