class PlayerPhysics
{
    constructor()
    {
        this.gravity = 10;
    }

    applyPlayerPhysics = function ()
    {

        let elements = []

        LEVEL_ONE.grounds.forEach( ground => {

            elements.push( ground.isInContact())
        });

        LEVEL_ONE.platforms.forEach(platform => {

            elements.push( platform.isInContact())
        });

        if (elements.includes( true ))
            player.setIsFalling( false )
        else
        {
            player.setIsFalling( true )
            player.setY( player.getY() + this.gravity)
        }
    }
}