class PlayerController
{

    limit;
    constructor()
    {
        this.gravity = 10;
    }

    update = function ()
    {
        this.checkIfPlayerIsOutOfLimit();
        this.applyPlayerLimits();  
    }

    setLimit = function( _limit)
    {
        this.limit = _limit;
    }

    /** Applies constrain to player position with objects that set limits */
    applyPlayerLimits = function ()
    {
        if ( this.limit == undefined )
        {
            PLAYER.setX(mouseX)
            PLAYER.setY(mouseY)
        }
        else 
        {
            if ( this.limit.touchedSide == "up" )
            {
                PLAYER.setX(mouseX)
                PLAYER.setY( constrain (mouseY, 0, this.limit.coordenates.y ))
            }

            if ( this.limit.touchedSide == "down" )
            {
                PLAYER.setX(mouseX)
                PLAYER.setY( constrain (mouseY, (this.limit.coordenates.y + this.limit.coordenates.height), height ))
            }

            if ( this.limit.touchedSide == "left" )
            {
                PLAYER.setX( constrain (mouseX, 0 , this.limit.coordenates.x ))
                PLAYER.setY( mouseY )
            }

            if ( this.limit.touchedSide == "right" )
            {
                PLAYER.setX( constrain (mouseX, (this.limit.coordenates.x + this.limit.coordenates.width) , width ))
                PLAYER.setY( mouseY )
            }
        }

    }

    /** Algorithm to check if player is outside of the limit bounds, 
     * sets an undefined limit when out*/
    checkIfPlayerIsOutOfLimit = function()
    {
        if (this.limit == undefined) return;

        const PLAYER_X = PLAYER.getX();
        const PLAYER_Y = PLAYER.getY();
        
        if ( PLAYER_X < this.limit.coordenates.x 
            || PLAYER_X > ( this.limit.coordenates.x  +  this.limit.coordenates.width )
            || PLAYER_Y < ( this.limit.coordenates.y  )
            || PLAYER_Y > ( this.limit.coordenates.y + this.limit.coordenates.height ))
        {
            
            this.limit = undefined
        }
        
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