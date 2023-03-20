let LEVEL_ONE;
let PLAYER;
let PLAYER_CONTROLLER;
let BUTTONS = [];
let STATUS;
let MENU

function setup()
{
    // canvas
    const CANVAS_SCALE = 0.6
    const myCanvas = createCanvas( 1600 * CANVAS_SCALE, 900 * CANVAS_SCALE)
    myCanvas.parent('canvasDiv');

    // game
    PLAYER = new PlayerDraw;
    PLAYER_CONTROLLER = new PlayerController (width/2,height/2);
    LEVEL_ONE = new LevelOne;
    BUTTONS.push(new LeftButton     ( 60 , height - 60 ));
    BUTTONS.push(new RightButton    ( 170 , height - 60 ));
    BUTTONS.push(new JumpButton     ( width - 60 , height - 60 ));
    MENU = new Menu();
    STATUS = new Status();
    noLoop();
    
}

/**Init click focuses on setting correct display mode*/
$(document).ready(function() {

    $( "#defaultCanvas0" ).hide()

    $( "#initGame" ).click( () => {
        const canvas = document.getElementById("canvasDiv")
        canvas.requestFullscreen()
        screen.orientation.lock("landscape");
        $( "#defaultCanvas0" ).show()
        MENU.setShow( true )
        loop();
    })
});

function draw()
{
    if (MENU.getShow())
        MENU.draw();
    else{
        PLAYER_CONTROLLER.update ();

        background(100, 155, 255); // fill the sky blue
        push();
        translate( PLAYER_CONTROLLER.getScrollPos(), 0 );
        LEVEL_ONE.assets.forEach(( asset )=>{ asset.draw() }) 
        pop();
        PLAYER.draw();
        BUTTONS.forEach(( button )=>{ button.draw() });
        STATUS.draw()
    } 
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


