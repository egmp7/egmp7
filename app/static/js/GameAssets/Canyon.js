class Canyon 
{
    constructor ( x , width )
    {
        this.x = x;
        this.y = floorPos_y;
        this.width = width;
        this.height = height/4;
    }
    
    draw = function () 
    {
            
        fill(100,155,255);
        rect(this.x,this.y,this.width,this.height);
        fill(102,51,0);
        rect(this.x-15,this.y,15,this.height);
        rect(this.x+this.width,this.y,15,this.height);
    }
    
    check = function(gc_x , gc_y) 
    {
        
        if( this.x <= gc_x 
        &&  gc_x <= this.x + this.width 
        &&  gc_y >= this.y)
        {
            isPlummeting = true;
            return true
        }
    }

    dies = function(gc_y)
    {

        if(gc_y > height && lives >0)
        {
            lives --;
            startGame();
            //.canyonFall.play();
        }
    }
}