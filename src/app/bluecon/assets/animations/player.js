export function fallingAnimation(p5) {

    // Hand Animation
    const handShakingSpeed = 3;
    const handLength = 6;
    const animationRatio =
        ((p5.sin(p5.frameCount / handShakingSpeed) + 1) / 2); // return (1 to 0)
    const leftHandXAnimation = (animationRatio) * handLength;
    const rightHandXAnimation = - (animationRatio) * handLength;


    //body
    p5.fill(0, 0, 200)
    p5.triangle( - 10,  - 15,  + 10,  - 15, 0,  - 25);
    p5.rect( - 10,  - 15, 20, 30);
    p5.ellipse( - 6,  15, 4, 6);
    p5.ellipse( + 6,  15, 4, 6);
    //hands
    p5.stroke(0, 0, 200);
    p5.strokeWeight(5);
    p5.line( - 10,  - 10,  - 16 + leftHandXAnimation,  - 17);
    p5.line( + 10,  - 10,  + 16 + rightHandXAnimation,  - 17);
    p5.strokeWeight(1);
    p5.noStroke();
    //eyes
    p5.fill(255, 255, 102)
    p5.ellipse( - 3,  - 13, 5, 7)
    p5.ellipse( + 3,  - 13, 5, 7)

}

export function frontAnimation(p5) {
    
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

export function leftAnimation(p5) {

    // Position Animation
    const positionSpeed = 4;
    const ratioPosition =
        (p5.sin(p5.frameCount / positionSpeed) ); // return (-1 to 1)
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
    p5.ellipse(-3, -12, 5, 7);
    p5.pop()

}

export function leftFallingAnimation(p5) {

    // Hand Animation
    const handShakingSpeed = 1.5;
    const handLength = 6;
    const animationRatio =
        ((p5.sin(p5.frameCount / handShakingSpeed) - 1) / 2); // return (-1 to 0)
    const handYAnimation = (animationRatio) * handLength;

    //body
    p5.fill(0, 0, 200)
    p5.triangle( - 7,  - 15,  + 7,  - 15, 0 ,  - 25);
    p5.rect( - 7,  - 15, 14, 30);
    p5.ellipse( - 3,  15, 4, 6);
    p5.ellipse( + 5,  15, 4, 6);
    //hands
    p5.stroke(0, 0, 200);
    p5.strokeWeight(5);
    p5.line( + 7,  - 5,  + 11,  2 + handYAnimation);
    p5.strokeWeight(1);
    p5.noStroke();
    //eyes
    p5.fill(255, 255, 102)
    p5.ellipse( - 3,  - 12, 5, 7);

}

export function rightAnimation(p5) {

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

export function rightFallingAnimation(p5) {

    // Hand Animation
    const handShakingSpeed = 1.5;
    const handLength = 6;
    const animationRatio =
        ((p5.sin(p5.frameCount / handShakingSpeed) - 1) / 2); // return (-1 to 0)
    const handYAnimation = (animationRatio) * handLength;

    //body
    p5.fill(0, 0, 200)
    p5.triangle( - 7,  - 14,  + 7,  - 15, 0 ,  - 25);
    p5.rect( - 7,  - 15, 14, 30);
    p5.ellipse( - 3,  15, 4, 6);
    p5.ellipse( + 5,  15, 4, 6);
    //hands
    p5.stroke(0, 0, 200);
    p5.strokeWeight(5);
    p5.line( - 7,  - 5,  - 11,  2 + handYAnimation);
    p5.strokeWeight(1);
    p5.noStroke();
    //eyes
    p5.fill(255, 255, 102)
    p5.ellipse( + 3,  - 12, 5, 7);

}