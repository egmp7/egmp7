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
            
            fill(`rgba(0,0,0, 0.25)`); // background rectangle
            rect( width / 16 * 2, height / 9 * 2 , width / 16 * 12, height / 9 * 5 )
            
            textSize(24);   // text setup
            textAlign(CENTER);
            fill(255);

            // Start Level
            if( this.initMenu )
            {
                text("Tap 📱 or Press Enter 💻",width/2,height/2 + 10);
            }
            //Level Completed
            if( this.completedMenu )
            {
                const offsetY = + 25
                textSize(38);
                text(`Level completed!`,width/2,height/2 - 58 + offsetY );
                textSize(42);
                text(`Your score is ${ STATUS.getScore()}`, width/2, height/2 - 21 + offsetY )
                textSize(32);
                text(`Thank you for playing`, width/2, height/2 + 16 + offsetY )
                textSize(24);
                text("Tap 📱 or Press Enter 💻 to continue.",width/2,height/2 + 48 + offsetY );
            }
            // Game Over
            if( this.gameOverMenu ){
                const offsetY = + 40
                textSize(38);
                text("Game over ☠️",width/2,height/2 - 61 + offsetY);
                textSize(42);
                text(`Your score is ${ STATUS.getScore()}`, width/2, height/2 - 21 + offsetY)
                textSize(24);
                text("Tap 📱 or Press Enter 💻 to continue.",width/2,height/2 + 16 + offsetY);
            }
        }
    }

    click = function()
    {
        if (this.gameOverMenu)
        {
            STATUS.setLives( 3 );
            STATUS.setScore ( 0 );
        }

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