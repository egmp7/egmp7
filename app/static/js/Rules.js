class Rules
{
    static playerDead = function ()
    {
        PLAYER_CONTROLLER.setScrollPos ( 0 )
        PLAYER_CONTROLLER.setWorldX( 300 )
        PLAYER_CONTROLLER.setY( height / 2 )
        STATUS.setLives( STATUS.getLives() - 1 )
    }
}