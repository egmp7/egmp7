class Ground 
{
    constructor (x,y,_width)
    {
        this.x = x;
        this.y = y;
        this.width = _width;
    }

    draw = function()
    {
        this.check()
        noStroke();
	    fill( 0,155,0 ); // green
        rect( this.x, this.y, this.width, (height - this.y) );
    }

    check = function()
    {
        const PLAYER_X = player.getWorldX();
        const PLAYER_Y = player.getY();

        if ( PLAYER_X > this.x 
        && PLAYER_X < ( this.x +  this.width )
        && PLAYER_Y > ( this.y - 10 )
        && PLAYER_Y < ( this.y + 2 ))
            player.setIsFalling( false )
        
        else 
            player.setIsFalling( true )
    }

}