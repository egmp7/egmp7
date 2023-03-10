class Collectable 
{
    constructor ( x , y )
    {
        this.x = x;
        this.y = y;
        this.isFound = false;
    }
    
    draw = function ()
    { 
        const SIZE = 50;

        this.check( player.getWorldX() , player.getY() )
        
        if(!this.isFound){
            
            fill( 255, 230, 0 );
            ellipse( this.x,this.y, SIZE / 2, SIZE );
            fill( 255, 180, 0 );
            ellipse( this.x, this.y, SIZE / 2.8, SIZE / 1.2 );
            fill( 255, 100, 0 );
            ellipse( this.x, this.y,SIZE / 5, SIZE / 5 );   
        }
    }
    
    check = function(playerX,playerY){
        
        if( dist( playerX, playerY, this.x, this.y ) < 45 ){

            if ( !this.isFound )
            {
                //game_score += 100;
                this.isFound = true;
            }
        }
    }
}