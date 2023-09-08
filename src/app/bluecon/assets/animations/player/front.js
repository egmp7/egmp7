export default function frontAnimation(p5) {
    
    // Leg Animation
    const legsGrowingSpeed = 6;
    const legLength = 1;
    const animationRatio =
        ((p5.sin(p5.frameCount / legsGrowingSpeed) - 1) / 2); // return (-1 to 0)
    const leftLegAnimation = (animationRatio) * legLength;
    const rightLegAnimation = -(1 + animationRatio) * legLength

    // Position Animation
    const positionSpeed = 10;
    const ratioPosition =
        (p5.sin(p5.frameCount / positionSpeed) ); // return (-1 to 1)
    const yMovement = ratioPosition * 2;

    p5.push()
    p5.translate(0, yMovement)

    // body
    p5.fill(0, 0, 200)
    p5.triangle(-10, -15, 10, -15, 0, -25);
    p5.rect(-10, -15, 20, 30);

    // eyes
    p5.fill(255, 255, 102);
    p5.ellipse(-3, -13, 5, 7);
    p5.ellipse(+3, -13, 5, 7);

    // legs
    p5.fill(0, 0, 200)
    p5.rect(-6, 15, 4, 8 + leftLegAnimation , 0, 0, 20);
    p5.rect(+2, 15, 4, 8 + rightLegAnimation , 0, 0, 20);
    p5.pop()
}