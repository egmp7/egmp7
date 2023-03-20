class Menu 
{
    initMenu = true;
    gameOverMenu = false;
    completedMenu = false;
    active = true;

    constructor()
    {
    }

    draw = function ()
    {
        if (this.active)
        {
            LEVEL.clouds.forEach(( asset )=>{ asset.draw() }) 
            LEVEL.grounds.forEach(( asset )=>{ asset.draw() }) 
            LEVEL.mountains.forEach(( asset )=>{ asset.draw() }) 
            LEVEL.trees.forEach(( asset )=>{ asset.draw() })
            LEVEL.collectables.forEach(( asset )=>{ asset.draw() })
            LEVEL.platforms.forEach(( asset )=>{ asset.draw() })
            // Function to draw Start Level, Level Completed or Game Over
            textAlign(CENTER);
            fill(255);
            // Start Level
            if( this.initMenu )
            {
                text("Tap (phone) or Press Enter (desktop) to start",width/2,height/2);
            }
            //Level Completed
            if( this.completedMenu )
            {
                text("Level complete. Tap (phone) or Press Enter (desktop)  to continue.",width/2,height/2);
            }
            // Game Over
            if( this.gameOverMenu ){
                text("Game over. Tap (phone) or Press Enter (desktop) to continue.",width/2,height/2);
            }
        }
    }

    click = function()
    {
        this.initMenu = false;
        this.gameOverMenu = false;
        this.completedMenu = false;
        this.active = false;
    }

    setInitMenu( bool )
    {
        this.initMenu = bool;
    }

    setGameOverMenu ( bool )
    {
        this.gameOverMenu = bool;
    }

    setCompletedMenu ( bool )
    {
        this.completedMenu = bool;
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