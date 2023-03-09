let scrollPos;
let floorPos_y;
let player;
let levelAssets;

function setup()
{
    deviceOrientation = "landscape";
    createCanvas($( window ).width(), $( window ).height());
	scrollPos = 0;
    floorPos_y = height * 3/4;;
    player = new Player (width/2,floorPos_y);
    levelAssets = initLevel1();
}

function draw()
{
	drawBackground();
    push();
    translate(scrollPos,0);
    levelAssets.forEach((asset)=>{
        asset.draw();
    })    
    pop();
    player.draw()    
}


// Function to draw the Background
function drawBackground (){
    background(100, 155, 255); // fill the sky blue
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground 
}

// Function to draw lives tokens and Score
// function drawStatus (){
    
//     // Draw Score
//     fill(250);
//     textSize(20);
//     textFont('Courier')
//     textAlign(LEFT);
//     text('Lives: ',50,30);
//     text('Score: '+game_score,50,55)
    
//     // Draw Tokens:
//     for(var i=0;i<lives;i++){
//         var x = 120 + i*23
//         var y = 15
        
//         fill(0,0,200);
//         triangle(x,y,x+20,y,x+10,y+20);
//         fill(255,255,102);
//         triangle(x+8,y+5,x+12,y+5,x+10,y+15);
//     }
    
// }




// Function to draw Start Level, Level Completed or Game Over
// function drawGameEvents(){
//    textAlign(CENTER);
//     fill(255);
//     // Start Level
//     if(gameStart == false){
//         text("Press Enter to start",width/2,height/2);
//         return true;
//     }
//     //Level Completed
//     else if(flag_pole.isReached == true){
//         text("Level complete. Press Enter to continue.",width/2,height/2);
//         return true;
//     }
//     // Game Over
//     else if(lives<1){
//         text("Game over. Press Enter to continue.",width/2,height/2);
//         return true;
//     }
// }


