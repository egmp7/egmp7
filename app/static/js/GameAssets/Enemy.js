class Enemy
{
    constructor( x , y , range )
    {
        this.x = x;
        this.y = y;
        this.range = range;
        this.currentX = x;
        this.inc = 1;
    }
    
    update = function() {
        this.currentX += this.inc;
        
        if(this.currentX >= this.x + this.range){
            this.inc = -1;
        }
        else if(this.currentX < this.x){
            this.inc = 1;
        }
    }
    draw = function () {
        this.update();
        if( this.inc > 0)
        {
            //body
            fill(255,0,0);
            triangle(this.currentX-7,this.y-40,this.currentX+7,this.y-40,this.currentX,this.y-50);
            rect(this.currentX-7,this.y-40,14,30);
            ellipse(this.currentX-3,this.y-10,4,6);
            ellipse(this.currentX+5,this.y-10,4,6);
            //eyes
            fill(255,255,102)
            ellipse(this.currentX+3,this.y-37,5,7)
        }
        else 
        {
            //body
            fill(255,0,0);
            triangle(this.currentX-7,this.y-40,this.currentX+7,this.y-40,this.currentX,this.y-50);
            rect(this.currentX-7,this.y-40,14,30);
            ellipse(this.currentX-3,this.y-10,4,6);
            ellipse(this.currentX+5,this.y-10,4,6);
            //eyes
            fill(255,255,102)
            ellipse(this.currentX-3,this.y-37,5,7)
        }   
    }
    check = function (gc_x,gc_y){
        var d = dist(gc_x,gc_y,this.currentX,this.y)
        
        if(d < 20)
        {
            return true;
        }
        return false;
    }
}