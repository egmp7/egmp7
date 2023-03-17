

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const SPACE_KEY = 32;
const ENTER_KEY = 13;

function keyPressed(){

    if(keyCode == LEFT_KEY)
        PLAYER_CONTROLLER.setMoveLeft( true );
    
    else if(keyCode == RIGHT_KEY)
        PLAYER_CONTROLLER.setMoveRight( true );

    else if(keyCode == SPACE_KEY)
        PLAYER_CONTROLLER.jump();
                
}
function keyReleased(){

    if(keyCode == LEFT_KEY)
        PLAYER_CONTROLLER.setMoveLeft( false );

    if(keyCode == RIGHT_KEY)
        PLAYER_CONTROLLER.setMoveRight( false );
}

function touchStarted ()
{
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
}

class LeftButton extends Buttons
{
    constructor ( _x, _y)
    {
        super ( _x, _y, "left" )
    }

    checkIfPressed = function ()
    {
        console.log("left: ", this.isPressed())
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
        console.log("right: ", this.isPressed())
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
    checkIfPressed = function ()
    {
        console.log("jump: ", this.isPressed())
        if (this.isPressed())
            PLAYER_CONTROLLER.jump()
    }
}



// function mouseClicked() {
//     var sound = new Howl({
    
//         src: [ './static/GameAudios/canyonFall.wav']
    
//     });
//     sound.play();
// }