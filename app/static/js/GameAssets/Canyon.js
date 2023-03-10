class Canyon 
{
    constructor ( _x , _width , _left_y, _rigth_y)
    {
        this.x = _x;
        this.width = _width;
        this.left_y = _left_y ;
        this.rigth_y = _rigth_y ;
        this.left_height = ( height - _left_y);
        this.right_height = ( height - _rigth_y );
    }
    
    draw = function () 
    {
        this.check()
            
        fill(102,51,0);
        rect( ( this.x - 15 ),           this.left_y,    15,     this.left_height);
        rect( ( this.x + this.width ),   this.rigth_y,    15,     this.right_height);
    }
    
    check = function() 
    {
        if( player.getY() >= height)
            player.deadByCanyon()
    }
}