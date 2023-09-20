/**
 * Draw enemy moving left
 * @param {P5} p5 
 */
export function drawEnemyLeft(p5){
    //body
    p5.fill(255, 0, 0);
    p5.triangle( - 7,  - 15,  + 7,  - 15, 0,  - 25);
    p5.rect( - 7,  - 15, 14, 30);
    p5.ellipse( - 3,  15, 4, 6);
    p5.ellipse( + 5,  15, 4, 6);
    //eyes
    p5.fill(255, 255, 102)
    p5.ellipse( - 3,  - 12, 5, 7)
}

/**
 * Draw enemy moving right
 * @param {P5} p5 
 */
export function drawEnemyRight(p5){
    //body
    p5.fill(255, 0, 0);
    p5.triangle( - 7,  - 15,  + 7,  - 15,0 ,  - 25);
    p5.rect( - 7,  - 15, 14, 30);
    p5.ellipse( - 3,   15, 4, 6);
    p5.ellipse( + 5,   15, 4, 6);
    //eyes
    p5.fill(255, 255, 102)
    p5.ellipse( + 3,  - 12, 5, 7)
}

