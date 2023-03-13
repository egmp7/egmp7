class PlayerController
{
    limit;
    moveLeft;
    moveRight;
    
    constructor(_x, _y)
    {
        this.x = _x;
        this.y = _y;
    }

    update = function ()
    {
        this.applyGravity();
        this.applyPlayerLimits();
        this.checkIfPlayerIsOutOfLimit();
        this.walk();
        
        PLAYER.setX ( this.x )
        PLAYER.setY ( this.y )
    }

    setLimit = function( _limit)
    {
        this.limit = _limit;
    }
    
    setMoveLeft = function (bool)
    {
        this.moveLeft = bool;
    }
    setMoveRight = function (bool)
    {
        this.moveRight = bool;
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
        if ( this.limit != undefined )
        {
            if ( this.limit.touchedSide == "up" )
            {
                this.y = constrain (this.y, 0, this.limit.coordenates.y )
            }

            if ( this.limit.touchedSide == "down" )
            {  
                this.y = constrain (this.y, (this.limit.coordenates.y + this.limit.coordenates.height), height )
            }

            if ( this.limit.touchedSide == "left" )
            {
                this.x = constrain (this.x, 0 , this.limit.coordenates.x)
                this.moveRight = false;
            }

            if ( this.limit.touchedSide == "right" )
            {
                this.x = constrain (this.x, (this.limit.coordenates.x + this.limit.coordenates.width), width )
                this.moveLeft = false;
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

    applyGravity = function()
    {
        this.y += 10;
    }

    jump = function()
    {
        this.y -= 110
    }

    walk = function(  )
    {
        if (this.moveRight)
            this.x += 10
        if (this.moveLeft)
            this.x -= 10
    }
}