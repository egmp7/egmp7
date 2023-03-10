class Platform 
{
    constructor (x,y,lenght)
    {
        this.x =  x;
        this.y = y;
        this.length = lenght;
        this.height = 12;

    }
              
    draw = function (){
        this.checkPlayerOnTop()

        fill(255,155,0);
        rect(this.x,this.y,this.length,this.height);
        fill(255,555,0);
        rect(
            this.x + this.length * 0.5/10,
            this.y + this.height * 1/10,
            this.length * 9/10,
            this.height * 8/10)
    };

    checkPlayerOnTop = function (){
        if( player.getWorldX() > this.x 
        && player.getWorldX() < this.x + this.length
        && player.getY() < this .y + 10
        && player.getY() > this.y -2 )
            player.setIsFalling( false )
        else 
            player.setIsFalling( true )
    }    
}