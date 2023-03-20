class PlayerController
{
    limits =[];
    moveLeft;
    moveRight;
    scrollPos = 0;
    doubleJump = 0;
    
    constructor(_x, _y)
    {
        this.x = _x;
        this.y = _y;
        this.worldX = _x;
    }

    update = function ()
    {
        this.applyGravity();
        this.applyPlayerLimits();
        this.checkIfPlayerIsOutOfLimit();
        this.checkIfPlayerIsOutOfCanvas();
        this.walk();
        this.updateWorldX();
        
        PLAYER.setX ( this.x )
        PLAYER.setY ( this.y )
    }

    addLimit = function( limit)
    {
        this.limits.push( limit ); 
    }
    
    setMoveLeft = function (bool)
    {
        this.moveLeft = bool;
    }

    setMoveRight = function (bool)
    {
        this.moveRight = bool;
    }
    
    setWorldX = function (value)
    {
        this.worldX = value;
    }

    setY = function (value)
    {
        this.y = value;
    }

    setScrollPos = function (value)
    {
        this.scrollPos = value;
    }

    getX = function ()
    {
        return this.x
    }

    getWorldX = function()
    {
        return this.worldX;
    }

    getY = function ()
    {
        return this.y
    }

    getScrollPos = function ()
    {
        return this.scrollPos;
    }

    getMoveLeft = function ()
    {
        return this.moveLeft;
    }

    getMoveRight = function ()
    {
        return this.moveRight;
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
                    this.worldX = constrain (this.worldX, 0 , limit.coordenates.x)
                    this.moveRight = false;
                }

                if ( limit.touchedSide == "right" )
                {
                    this.worldX = constrain (this.worldX, (limit.coordenates.x + limit.coordenates.width), width )
                    this.moveLeft = false;
                }
            });
        }
    }

    /** Algorithm to check if player is outside of the limit bounds, 
     * remove item from the array*/
    checkIfPlayerIsOutOfLimit = function()
    {
        if (this.limits == undefined) return;

        this.limits.forEach( limit => {

            // outside
            if ( this.worldX < limit.coordenates.x 
                || this.worldX > ( limit.coordenates.x  +  limit.coordenates.width )
                || this.y < ( limit.coordenates.y  )
                || this.y > ( limit.coordenates.y + limit.coordenates.height ))
                
                    this.limits.splice(this.limits.indexOf(limit), 1)
   
        })
    }

    /** Checks if Player is out of canvas */
    checkIfPlayerIsOutOfCanvas = function ()
    {
        if ( this.y > height)
        {
            Rules.playerDead();
            SOUNDS.canyonFall.play();
        }
    }

    /** Checks if Player is jumping */
    checkIfJumping = function ()
    {
        if (this.limits.length == 0) return true
        
        this.limits.forEach( limit => {
            
            if (limit.touchedSide == "up")   // on top of limit
                return false
            else
                return true
        })
    }

    applyGravity = function()
    {
        this.y += 8;
    }

    jump = function()
    {
        
        if (this.limits == 0)
            this.doubleJump += 1;
        
        // regular jump
        this.limits.forEach( limit => { 
            if( limit.touchedSide == "up")
            {
                SOUNDS.jump.play();
                this.y -= 100;
                this.doubleJump = 1;
            }   
        }) 

        // double jump
        if ( this.doubleJump == 2 )
        {
            this.y -= 100;
            this.doubleJump = 0;
            console.log("doubleJump")
            SOUNDS.jump.play();
        }
    }

    walk = function(  )
    {
        const SPEED = 8
        if (this.moveRight)
        {
            if(this.x < width * 0.4)
                this.x  += SPEED;
            else
                this.scrollPos -= SPEED; 
        }

        if (this.moveLeft)
        {
            if(this.x > width * 0.2)
                this.x -= SPEED;
            else
                this.scrollPos += SPEED;
        }
    }

    updateWorldX = function ()
    {
        this.worldX = this.x - this.scrollPos;
    }
}