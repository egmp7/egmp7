let LEVEL;
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
    LEVEL = new LevelOne;
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
        MENU.setActive( true )
        loop();
    })
});

function draw()
{
    if (MENU.getActive())
        MENU.draw();
    else{
        PLAYER_CONTROLLER.update ();

        background(100, 155, 255); // fill the sky blue
        push();
        translate( PLAYER_CONTROLLER.getScrollPos(), 0 );
        LEVEL.assets.forEach(( asset )=>{ asset.draw() }) 
        pop();
        PLAYER.draw();
        BUTTONS.forEach(( button )=>{ button.draw() });
        STATUS.draw()
    } 
}