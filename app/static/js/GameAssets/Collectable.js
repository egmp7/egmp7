class Collectable 
{
    constructor ( x , y )
    {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.isFound = false;
        this.addScore = true;
    }
    
    draw = function (){ 
        
        if(!this.isFound){
            
            fill(255,230,0);
            ellipse(this.x,this.y,this.size/2,this.size);
            fill(255,180,0);
            ellipse(this.x,this.y,this.size/2.8,this.size/1.2);
            fill(255,100,0);
            ellipse(this.x,this.y,this.size/5,this.size/5);   
        }
    }
    
    check = function(gc_x,gc_y){
        
        var d = dist(gc_x,gc_y,this.x,this.y)

        if( d < 45){
            this.isFound = true; 
            if(this.addScore){
                game_score += 100;
                //sounds.coin.play();
                this.addScore = false;
            }    
        }
    
    }
}