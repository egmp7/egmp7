class PlayerController
{

    limit;
    constructor(_x, _y)
    {
        this.x = _x;
        this.y = _y;
        this.gravity = 10;
    }

    update = function ()
    {
        this.checkIfPlayerIsOutOfLimit();
        this.applyPlayerLimits();
        
        PLAYER.setX ( this.x )
        PLAYER.setY ( this.y )
    }

    setLimit = function( _limit)
    {
        this.limit = _limit;
    }

    getX = function ()
    {
        return this.x
    }

    getY = function ()
    {
        return this.y
    }

    /** Applies constrain to player position with objects that set limits */
    applyPlayerLimits = function ()
    {
        if ( this.limit == undefined )
        {
            this.x = mouseX
            this.y = mouseY
        }
        else 
        {
            if ( this.limit.touchedSide == "up" )
            {
                this.x = mouseX
                this.y = constrain (mouseY, 0, this.limit.coordenates.y )
            }

            if ( this.limit.touchedSide == "down" )
            {
                this.x = mouseX
                this.y = constrain (mouseY, (this.limit.coordenates.y + this.limit.coordenates.height), height )
            }

            if ( this.limit.touchedSide == "left" )
            {
                this.x = constrain (mouseX, 0 , this.limit.coordenates.x )
                this.y = mouseY 
            }

            if ( this.limit.touchedSide == "right" )
            {
                this.x = constrain (mouseX, (this.limit.coordenates.x + this.limit.coordenates.width) , width )
                this.y = mouseY 
            }
        }

    }

    /** Algorithm to check if player is outside of the limit bounds, 
     * sets an undefined limit when out*/
    checkIfPlayerIsOutOfLimit = function()
    {
        if (this.limit == undefined) return;
        
        if ( this.x < this.limit.coordenates.x 
            || this.x > ( this.limit.coordenates.x  +  this.limit.coordenates.width )
            || this.y < ( this.limit.coordenates.y  )
            || this.y > ( this.limit.coordenates.y + this.limit.coordenates.height ))
         
            this.limit = undefined 
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