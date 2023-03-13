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

function LeftButton( _x, _y ){
    this.x = _x;
    this.y = _y;

    this.draw = function()
    {
        fill(0)
        ellipse( this.x ,this.y ,100 ,100)
    }

    this.click = function ()
    {
        touches.forEach(( touch )=>{
            if ( dist (this.x , this.y , touch.x, touch.y) < 50)
                player.setIsLeft( true )
        })

    }
    this.release = function ()
    {
        console.log("GameEvents::LeftButton.release()")
        if (touches == 0)
            player.setIsLeft( false )
        touches.forEach(( touch )=>{
            if ( dist (this.x , this.y , touch.x, touch.y) < 50)
                player.setIsLeft( true )
        })

    }
}

function RightButton( _x, _y ){
    this.x = _x;
    this.y = _y;

    this.draw = function()
    {
        fill(0)
        ellipse( this.x ,this.y ,100 ,100)
    }

    this.click = function ()
    {
        touches.forEach(( touch )=>{
            if ( dist (this.x , this.y , touch.x, touch.y) < 50)
                player.setIsRight( true )
        })
    }
    this.release = function ()
    {
        console.log("GameEvents::RightButton.release()")
        if (touches == 0)
            player.setIsRight( false )
        touches.forEach(( touch )=>{
            if ( dist (this.x , this.y , touch.x, touch.y) < 50)
                player.setIsRight( true )
        })       

    }
}

function JumpButton( _x, _y ){
    this.x = _x;
    this.y = _y;

    this.draw = function()
    {
        fill(0)
        ellipse( this.x ,this.y ,100 ,100)
    }

    this.click = function ()
    {

        touches.forEach(( touch )=>{
            if ( dist (this.x , this.y , touch.x, touch.y) < 50)
                player.jump()
        })

    }
    this.release = function ()
    {
    }
}

function mouseClicked() {
    var sound = new Howl({
    
        src: [ './static/GameAudios/canyonFall.wav']
    
    });
    sound.play();
}