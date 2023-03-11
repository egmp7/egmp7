const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const SPACE_KEY = 32;
const ENTER_KEY = 13;

function keyPressed(){

    if(keyCode == LEFT_KEY)
        player.setIsLeft( true );
    
    else if(keyCode == RIGHT_KEY)
        player.setIsRight( true );

    else if(keyCode == SPACE_KEY)
        player.jump();
                
}
function keyReleased(){

    if(keyCode == LEFT_KEY)
        player.setIsLeft( false );

    if(keyCode == RIGHT_KEY)
        player.setIsRight( false );   
}

function touchStarted ()
{
    BUTTONS.forEach(( button )=>{
        button.click();
    })
}

function touchEnded ()
{
    console.log("GamesEvents::touchEnded")
    player.setIsLeft( false )
    player.setIsRight( false )
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
        if (touches.length == 1 && dist (this.x , this.y , touches[0].x, touches[0].y) < 50)
        {
            console.log("GamesEvents::LeftButton")
            player.setIsLeft( true )
        }
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
        if (touches.length == 1 && dist (this.x , this.y , touches[0].x, touches[0].y) < 50)
        {
            player.setIsRight( true )
            console.log("GamesEvents::RightButton")
        }
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
        if (touches.length == 1 && dist (this.x , this.y , touches[0].x, touches[0].y) < 50)
        {
            player.jump()
            console.log("GamesEvents::JumpButton")
        }
    }
}

function mouseClicked() {
    var sound = new Howl({
    
        src: [ './static/GameAudios/canyonFall.wav']
    
    });
    sound.play();
}