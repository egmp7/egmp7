let LEVEL_ONE;
let PLAYER;
let PLAYER_CONTROLLER;
let BUTTONS = [];


function setup()
{
    //deviceOrientation = "landscape";
    createCanvas($( window ).width(), $( window ).height());
    PLAYER = new PlayerDraw;
    PLAYER_CONTROLLER = new PlayerController (width/2,height/2);
    LEVEL_ONE = new LevelOne;
    BUTTONS.push(new LeftButton     ( 60 , height - 60 ))
    BUTTONS.push(new RightButton    ( 170 , height - 60 ))
    BUTTONS.push(new JumpButton     ( width - 60 , height - 60 ))
    BUTTONS.push(new startButton     ( width - 170 , height - 60 ))
    
}

function draw()
{
	background(100, 155, 255); // fill the sky blue
    push();
    translate( PLAYER_CONTROLLER.getScrollPos(), 0 );
    LEVEL_ONE.assets.forEach(( asset )=>{ asset.draw() }) 
    pop();
    PLAYER_CONTROLLER.update ()
    PLAYER.draw()
    BUTTONS.forEach(( button )=>{ button.draw() })
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


