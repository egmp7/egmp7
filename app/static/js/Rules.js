class Rules
{
    static playerDead = function ()
    {
        STATUS.setLives( STATUS.getLives() - 1 )
        if (STATUS.getLives() < 1)
        {
            MENU.setActive( true )
            MENU.setGameOverMenu ( true )
            STATUS.setLives( 3 );
            STATUS.setScore ( 0 );
            LEVEL.collectables.forEach(( asset )=>{ asset.reset() })
        }

        this.resetPlayerPosition()
    }

    static playerWins = function ()
    {
        MENU.setActive ( true )
        MENU.setCompletedMenu ( true )
        LEVEL.collectables.forEach(( asset )=>{ asset.reset() })
        this.resetPlayerPosition()
        
    }

    static resetPlayerPosition = function ()
    {
        PLAYER_CONTROLLER.setScrollPos ( 0 )
        PLAYER_CONTROLLER.setWorldX( width / 2 )
        PLAYER_CONTROLLER.setY( height / 2 )
    }
}