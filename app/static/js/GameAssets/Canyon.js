class Canyon 
{
    constructor ( worldX , canyonWidth )
    {
        this.x = worldX;
        this.y = floorPos_y -2 ;
        this.width = canyonWidth;
        this.height = height/4 + 2;
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

    // dies = function(gc_y)
    // {

    //     if(gc_y > height && lives >0)
    //     {
    //         lives --;
    //         startGame();
    //         //.canyonFall.play();
    //     }
    // }
}