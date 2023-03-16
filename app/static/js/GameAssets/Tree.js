class Tree 
{
    height = 124;

    constructor ( _x, _y )
    {
        this.x = _x;
        this.y = _y - this.height;
    }

    draw = function ()
    {
        fill( 102, 51, 0 )
        rect(( this.x ), ( this.y + 48 ), ( 20 ), ( this.height - 48 ) );
        fill( 0, 102, 0 )
        triangle( 
            ( this.x - 20 ), ( this.y + 48 ),
            ( this.x + 40 ), ( this.y + 48 ),
            ( this.x + 10 ), ( this.y + 16 ));
        triangle( 
            ( this.x - 20 ), ( this.y + 32),
            ( this.x + 40 ), ( this.y + 32),
            ( this.x + 10 ), ( this.y ));     
    }
}