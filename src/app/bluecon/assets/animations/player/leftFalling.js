export default function leftFallingAnimation(p5) {

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
