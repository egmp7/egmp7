class Canyon 
{
    constructor ( _x , _y, _width )
    {
        this.x = _x;
        this.y = _y ;
        this.width = _width;
        this.height = ( height - _y );
    }
    
    draw = function () 
    {
        this.check()
            
        fill(100,155,255);
        rect(this.x,this.y,this.width,this.height);
        fill(102,51,0);
        rect(this.x-15,this.y,15,this.height);
        rect(this.x+this.width,this.y,15,this.height);
    }
    
    check = function() 
    {
        
        if( this.x <= player.getWorldX() 
        &&  player.getWorldX() <= this.x + this.width 
        &&  player.getY() >= this.y)
            player.deadByCanyon()
    }
}