class Ground 
{
    contact;

    constructor ( _x, _y, _width )
    {
        this.x = _x;
        this.y = _y;
        this.width = _width;
    }

    draw = function()
    {
        this.checkIfPlayerMakesContact()
        noStroke();
	    fill( 0,155,0 ); // green
        rect( this.x, this.y, this.width, (height - this.y) );
    }

    checkIfPlayerMakesContact = function()
    {
        const PLAYER_X = player.getWorldX();
        const PLAYER_Y = player.getY();

        if ( PLAYER_X > this.x 
        && PLAYER_X < ( this.x +  this.width )
        && PLAYER_Y > ( this.y - 4 )
        && PLAYER_Y < ( this.y + 2 ))
            this.contact = true
        else 
            this.contact = false

        if(PLAYER_X < this.x 
        && PLAYER_X > this.x - 15 
        && PLAYER_Y > this.y)
            player.setIsRight( false )

        if(PLAYER_X > this.x + this.width
        && PLAYER_X < this.x + this.width + 15
        && PLAYER_Y > this.y)
            player.setIsLeft( false )
            
        
    }

    isInContact = function ()
    {
        return this.contact;
    }

}