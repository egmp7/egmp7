class PlayerController
{
    limits =[];
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

    addLimit = function( limit)
    {
        this.limits.push( limit ) 
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
        if ( this.limits != undefined )
        {
            this.limits.forEach( limit => {
            
                if ( limit.touchedSide == "up" )
                {
                    this.y = constrain (this.y, 0, limit.coordenates.y )
                }

                if ( limit.touchedSide == "down" )
                {  
                    this.y = constrain (this.y, ( limit.coordenates.y + limit.coordenates.height), height )
                }

                if ( limit.touchedSide == "left" )
                {
                    this.x = constrain (this.x, 0 , limit.coordenates.x)
                    this.moveRight = false;
                }

                if ( limit.touchedSide == "right" )
                {
                    this.x = constrain (this.x, (limit.coordenates.x + limit.coordenates.width), width )
                    this.moveLeft = false;
                }
            });
        }
    }

    /** Algorithm to check if player is outside of the limit bounds, 
     * remove item from the array*/
    checkIfPlayerIsOutOfLimit = function()
    {
        console.log(this.limits)
        if (this.limits == undefined) return;

        this.limits.forEach( limit => {

            // outside
            if ( this.x < limit.coordenates.x 
                || this.x > ( limit.coordenates.x  +  limit.coordenates.width )
                || this.y < ( limit.coordenates.y  )
                || this.y > ( limit.coordenates.y + limit.coordenates.height ))
                
                    this.limits.splice(this.limits.indexOf(limit), 1)
   
        })
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