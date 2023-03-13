class Ground 
{
    contact;
    side;

    constructor ( _x, _y, _width )
    {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = height - _y;

    }

    draw = function()
    {
        //this.checkIfPlayerMakesContact()
        noStroke();
	    fill( 0,155,0 ); // green
        rect( this.x, this.y, this.width, this.height );
    }


    /** Checks if player makes contact with this object */
    checkIfPlayerMakesContact = function()
    {
        
        const PLAYER_X = player.getWorldX();
        const PLAYER_Y = player.getY();

        if ( PLAYER_X < this.x && PLAYER_Y >= this.y )
            this.side = "left"
        
        if ( PLAYER_X > ( this.x + this.width ) && PLAYER_Y >= this.y )
            this.side = "right"

        if ( PLAYER_Y < this.y )
            this.side = "up"

        

          

        // if ( this.side =="left" && PLAYER_X <= ( this.x + this.width ) && PLAYER_Y >= this.y)
        // {
            
        //     player.setX( constrain (PLAYER_X , 0 , this.x) + scrollPos )
        //     console.log(PLAYER_X , this.x , constrain (PLAYER_X , 0 , this.x) , scrollPos, player.getX())
            

        //     if (player.getX() == this.x - 30)
        //         player.setIsRight( false )
        // }

        // if ( this.side == "up" && PLAYER_X >= this.x && PLAYER_X <= this.x + this.width)
        // {
        //     player.setY( constrain(PLAYER_Y, 0, this.y))
        // }
            


        // made contact
        // if ( PLAYER_X >= this.x 
        //     && PLAYER_X <= ( this.x +  this.width )
        //     && PLAYER_Y >= ( this.y))
        // {
        //     console.log( "Ground::checkIfPlayerMakesContact: " + this.side )
        //     if (this.side == "up")
        //         player.setY( this.y )

        //     if (this.side == "left")
        //     {
        //         this.contact = true
        //         player.setX( this.x - 10 + scrollPos)
        //         //player.setY( constrain( PLAYER_Y ,0 , this.y ))
        //         player.setIsRight(false);
        //     }

        // }
        // else
        //     this.contact = false;
        
        


        

        // if ( PLAYER_Y > this.y )
        // {
        //     //player.setX ( constrain (PLAYER_X , 0 , this.x) + scrollPos )
            
            
        // }
        
        // if ( PLAYER_X > this.x && PLAYER_X < this.x + this.width )
        // {
        //     player.setY(constrain( PLAYER_Y , 0 , this.y ))
        //     player.setIsFalling( false )
        // }
        // else
        // {
        //     console.log("checkIfPlayerMakesContact:: player: "+ PLAYER_X + " this.x: "+ this.x + " constrain: " +  constrain (PLAYER_X , 0 , this.x) )
        // }
        
           
            



        // // Player coming from left side
        // if ( PLAYER_X > this.x 
        //     && PLAYER_X < ( this.x + this.width ) / 2
        //     && PLAYER_Y > this.y )

        //  // Player coming from right side
        // if ( PLAYER_X < ( this.x + this.width ) 
        //     && PLAYER_X < ( this.x + this.width ) / 2
        //     && PLAYER_Y > this.y )
        
    
        // // made contact
        // if ( PLAYER_X >= this.x 
        //     && PLAYER_X <= ( this.x +  this.width )
        //     && PLAYER_Y >= ( this.y))
        // {
        //     const side = this.checkSide();
        //     console.log( "Ground::checkIfPlayerMakesContact: " + side )
        //     this.contact = true;
        // }        

        // // Is on top?
        // if ( PLAYER_X > this.x 
        // && PLAYER_X < ( this.x +  this.width )
        // && PLAYER_Y >= ( this.y))
        // {
        //     player.setY( this.y )
        //     this.contact = true  
        // }
        // else 
        //     this.contact = false

        // // Is Player on Left?
        // if(PLAYER_X < this.x 
        // && PLAYER_X > this.x - 6 
        // && PLAYER_Y > this.y)
        //     player.setIsRight( false )

        // // Is Player on Right?
        // if(PLAYER_X > this.x + this.width
        // && PLAYER_X < this.x + this.width + 6
        // && PLAYER_Y > this.y)
        //     player.setIsLeft( false )
            
        
    }


    /** Algorithm to check which side the player is coming from
     * Eg: left,top,right
     * @returns string;
     */
    checkSide = function ()
    {
        const PLAYER_X = player.getWorldX();
        const PLAYER_Y = player.getY();

        if ( PLAYER_X == this.x )
            return "left"
        if ( PLAYER_X == ( this.x + this.width ))
            return "right"
        if ( PLAYER_Y == this.y )
            return "top"
        return null;
    }

    isInContact = function ()
    {
        return this.contact;
    }

}