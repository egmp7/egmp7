
/** Listens for fullscreen changes*/
addEventListener("fullscreenchange", (event) => {
    if (document.fullscreenElement)
        $( "#defaultCanvas0" ).show()
    else
        $( "#defaultCanvas0" ).hide()
});


const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const SPACE_KEY = 32;
const ENTER_KEY = 13;

function keyPressed(){

    if( keyCode == LEFT_KEY )
        PLAYER_CONTROLLER.setMoveLeft( true );
    
    if( keyCode == RIGHT_KEY )
        PLAYER_CONTROLLER.setMoveRight( true );

    if( keyCode == SPACE_KEY ) 
        PLAYER_CONTROLLER.jump();

    if ( keyCode == ENTER_KEY )
        MENU.click()
                
}
function keyReleased(){

    if( keyCode == LEFT_KEY )
        PLAYER_CONTROLLER.setMoveLeft( false );

    if( keyCode == RIGHT_KEY )
        PLAYER_CONTROLLER.setMoveRight( false );
}

function touchStarted ()
{
    MENU.click()
    BUTTONS.forEach(( button )=>{
        button.click();
    })
}

function touchEnded ()
{
    BUTTONS.forEach(( button )=>{
        button.release();
    })
}

class Buttons 
{
    pressed = false;
    radius = 50;
    constructor ( _x, _y, _name )
    {
        this.x = _x;
        this.y = _y;
        this.name = _name;
    }

    draw = function()
    {
        this.checkIfPressed()
        fill(0)
        ellipse( this.x ,this.y , this. radius * 2 ,this. radius * 2)
    }
    click = function ()
    {
        touches.forEach(( touch )=>{
            if ( dist (this.x , this.y , touch.x, touch.y) < 50)
                this.pressed = true;
        })
       
    }
    release = function()
    {
        this.pressed =  false;
        touches.forEach(( touch )=>{
            if ( dist (this.x , this.y , touch.x, touch.y) < 50)
                this.pressed = true;  
        })
    }

    isPressed = function()
    {
        return this.pressed;
    }

    checkIfPressed = function ()
    {   
    }
}

class LeftButton extends Buttons
{
    constructor ( _x, _y)
    {
        super ( _x, _y, "left" )
    }

    checkIfPressed = function ()
    {
        if (this.isPressed())
            PLAYER_CONTROLLER.setMoveLeft( true )
        else
            PLAYER_CONTROLLER.setMoveLeft( false )
    }
}

class RightButton extends Buttons
{
    constructor ( _x, _y)
    {
        super ( _x, _y , "right" )
    }
    checkIfPressed = function ()
    {
        if (this.isPressed())
            PLAYER_CONTROLLER.setMoveRight( true );
        else
            PLAYER_CONTROLLER.setMoveRight( false )

    }
}

class JumpButton extends Buttons
{
    constructor ( _x, _y)
    {
        super ( _x, _y, "jump" )
    }
    
    click = function ()
    {
        if (touches == 0) return;

        if ( dist (this.x , this.y , touches[touches.length -1].x, touches[touches.length -1].y) < 50)
                PLAYER_CONTROLLER.jump()
    }
    release = function()
    {
    }
    checkIfPressed = function ()
    {   
    }
}