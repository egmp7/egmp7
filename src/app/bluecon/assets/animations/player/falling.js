export default function fallingAnimation(p5) {

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