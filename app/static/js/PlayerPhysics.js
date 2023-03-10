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
        const NUMBER_OF_GROUNDS = LEVEL_ONE.grounds.length

        let grounds = Array(NUMBER_OF_GROUNDS)

        LEVEL_ONE.grounds.forEach(ground => {

            grounds.push(ground.isInContact())

        });

        
        if ( grounds.includes( true ))
        {
            console.log(grounds)
            player.setIsFalling( false )
        }
        else
        {
            player.setIsFalling( true )
            player.setY( player.getY() + this.gravity)

        }


        // if ( !this.platformContact && !this.groundContact)
        //     {
        //         player.setIsFalling( true )
        //         player.setY( player.getY() + this.gravity)
        //     }
            
        // else
        //     player.setIsFalling( false )
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