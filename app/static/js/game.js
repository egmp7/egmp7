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
        MENU.setInitMenu (true )
        MENU.setActive( true )
        loop();
    })
});

function draw()
{
    if ( MENU.getActive() ) // menu
        MENU.draw();

    else{   // gameplay

        PLAYER_CONTROLLER.update ();

        background(100, 155, 255); // sky blue
        
        push();
        translate( PLAYER_CONTROLLER.getScrollPos(), 0 );
        LEVEL.clouds.forEach(( asset )=>{ asset.draw() }) 
        LEVEL.mountains.forEach(( asset )=>{ asset.draw() }) 
        LEVEL.trees.forEach(( asset )=>{ asset.draw() }) 
        LEVEL.collectables.forEach(( asset )=>{ asset.draw() }) 
        LEVEL.enemies.forEach(( asset )=>{ asset.draw() }) 
        pop();

        PLAYER.draw();

        push();
        translate( PLAYER_CONTROLLER.getScrollPos(), 0 );
        LEVEL.grounds.forEach(( asset )=>{ asset.draw() }) 
        LEVEL.platforms.forEach(( asset )=>{ asset.draw() }) 
        pop();

        BUTTONS.forEach(( button )=>{ button.draw() });
        STATUS.draw()
    } 
}