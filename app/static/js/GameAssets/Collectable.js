class Collectable 
{
    isFound = false;
    size = 32;

    constructor ( _x, _y )
    {
        this.x = _x;
        this.y = _y - this.size / 2 -5;
    }
    
    draw = function ()
    { 
        this.checkIfFound()
        if(!this.isFound){
            
            fill( 255, 230, 0 );
            ellipse( this.x, this.y, this.size / 2, this.size );
            fill( 255, 180, 0 );
            ellipse( this.x, this.y, this.size / 2.8, this.size / 1.2 );
            fill( 255, 100, 0 );
            ellipse( this.x, this.y, this.size / 5, this.size / 5 );   
        }
    }
    
    checkIfFound = function()
    {
        const PLAYER_X = PLAYER_CONTROLLER.getWorldX();
        const PLAYER_Y = PLAYER_CONTROLLER.getY();
        
        if( dist( PLAYER_X, PLAYER_Y, this.x, this.y ) < 40 ){

            if ( !this.isFound )
            {
                //game_score += 100;
                this.isFound = true;
            }
        }
    }
}