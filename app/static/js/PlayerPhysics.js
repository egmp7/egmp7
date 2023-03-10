class PlayerPhysics
{
    constructor()
    {
        this.platformContact
        this.groundContact
        this.gravity = 10;
    }

    applyPlayerPhysics = function ()
    {
        if ( !this.platformContact && !this.groundContact)
            {
                player.setIsFalling( true )
                player.setY( player.getY() + this.gravity)
            }
            
        else
            player.setIsFalling( false )
    }

    setPlatformContact = function (bool)
    {
        this.platformContact = bool;
    }

    setGroundContact = function (bool)
    {
        this.groundContact = bool;
    }

    isPlayerOnPlatform = function ()
    {
        return this.platformContact;
    }

    isPlayerOnGround = function ()
    {
        return this.groundContact;
    }
}