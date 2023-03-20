class Menu 
{
    init = true;
    active = true;

    constructor()
    {
    }

    draw = function ()
    {
        if (this.active)
        {
            fill(125)
            rect(0,0,width,height)
            // Function to draw Start Level, Level Completed or Game Over
            textAlign(CENTER);
            fill(255);
            // Start Level
            if( this.init == true )
            {
                text("Tap (phone) or Press Enter (desktop) to start",width/2,height/2);
            }
            //Level Completed
            if( LEVEL.assets[LEVEL.assets.length - 1].isReached == true)
            {
                text("Level complete. Press Enter to continue.",width/2,height/2);
            }
            // Game Over
            if( STATUS.getLives() < 1 ){
                text("Game over. Press Enter to continue.",width/2,height/2);
            }
        }
    }

    setActive = function ( bool )
    {
        this.active = bool;
    }

    getActive = function () 
    {
        return this.active;
    }
}