class PlayerController
{
    constructor()
    {
        this.gravity = 10;
    }

    update = function ()
    {
        PLAYER.setX(mouseX)
        PLAYER.setY(mouseY)
    }

    // applyPlayerPhysics = function ()
    // {

    //     let elements = []

    //     LEVEL_ONE.grounds.forEach( ground => {

    //         elements.push( ground.isInContact())
    //     });

    //     LEVEL_ONE.platforms.forEach(platform => {

    //         elements.push( platform.isInContact())
    //     });

    //     if (elements.includes( true ))
    //         player.setIsFalling( false )
    //     else
    //     {
    //         player.setIsFalling( true )
    //         player.setY( player.getY() + this.gravity)
    //     }
    // }
}