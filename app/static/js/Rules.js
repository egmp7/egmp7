class Rules
{
    static playerDead = function ()
    {
        
        STATUS.setLives( STATUS.getLives() - 1 )
        if (STATUS.getLives() < 1)
            MENU.setActive(true)

        PLAYER_CONTROLLER.setScrollPos ( 0 )
        PLAYER_CONTROLLER.setWorldX( 300 )
        PLAYER_CONTROLLER.setY( height / 2 )
    }
}