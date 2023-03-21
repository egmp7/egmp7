class Ground 
{
    limit = { touchedSide : "", coordenates: {}};
    contact = false;

    constructor ( _x, _y, _width, _height )
    {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;

    }

    draw = function()
    {
        this.checkPlayerPosition()
        this.checkIfPlayerMakesContact()
        noStroke();
	    fill( 0,155,0 ); // green
        rect( this.x, this.y, this.width, this.height );

        fill ( 102,51,0 )
        rect( this.x, this.y, 15, this.height );
        rect( this.x + this.width -15, this.y, 15, this.height );
    }

    /** Algorithm to check which side the player is coming from
     * Eg: left,top,right
     */
    checkPlayerPosition = function ()
    {
        const PLAYER_X = PLAYER_CONTROLLER.getWorldX();
        const PLAYER_Y = PLAYER_CONTROLLER.getY();

        if ( PLAYER_X < this.x 
            && PLAYER_Y >= this.y 
            && PLAYER_Y <= ( this.y + this.height ) )
                this.limit = { touchedSide: "left" }
        
        if  ( PLAYER_X > ( this.x + this.width ) 
            && PLAYER_Y >= this.y 
            && PLAYER_Y <= ( this.y + this.height ))
                this.limit = { touchedSide: "right" }

        if ( PLAYER_Y < this.y 
            && PLAYER_X >= this.x 
            && PLAYER_X <= ( this.x + this.width ))
                this.limit = { touchedSide: "up" }

        if ( PLAYER_Y > ( this.y + this.height )
            && PLAYER_X >= this.x 
            && PLAYER_X <= ( this.x + this.width ))
                this.limit = { touchedSide: "down" }
    }

    /** Checks if player makes contact with this object */
    checkIfPlayerMakesContact = function()
    {
        const PLAYER_X = PLAYER_CONTROLLER.getWorldX();
        const PLAYER_Y = PLAYER_CONTROLLER.getY();

        // check outside
        if ( this.contact )
            if ( PLAYER_X < this.x 
                || PLAYER_X > ( this.x +  this.width )
                || PLAYER_Y < ( this.y )
                || PLAYER_Y > ( this.y + this.height ))
            
                this.contact = false;

        // check inside
        if ( !this.contact )
            if ( PLAYER_X >= this.x 
                && PLAYER_X <= ( this.x +  this.width )
                && PLAYER_Y >= ( this.y )
                && PLAYER_Y <= ( this.y + this.height ))
            {
                this.limit.coordenates = { x:this.x, y:this.y, width:this.width, height:this.height }                
                PLAYER_CONTROLLER.addLimit( this.limit )
                this.contact = true;
            }         
    }
}