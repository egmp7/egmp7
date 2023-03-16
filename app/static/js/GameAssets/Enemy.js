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
    
    draw = function () {

        this.checkCloseToEnemy();
        this.updateEnemyPosition();

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

    checkCloseToEnemy = function ()
    {
        
        if( dist( PLAYER_CONTROLLER.getWorldX(), PLAYER_CONTROLLER.getY(), this.currentX, this.y ) < 20 )
            PLAYER_CONTROLLER.deadByEnemy();   
    }

    updateEnemyPosition = function() {
        this.currentX += this.inc;
        
        if(this.currentX >= this.x + this.range){
            this.inc = -1;
        }
        else if(this.currentX < this.x){
            this.inc = 1;
        }
    } 
}