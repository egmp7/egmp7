class Platform 
{

    contact;

    constructor ( _x, _y, _width )
    {
        this.x =  _x;
        this.y = _y;
        this.width = _width;
        this.height = 12;

    }
              
    draw = function (){
        this.checkPlayerOnTop()

        fill(255,155,0);
        rect(this.x,this.y,this.width,this.height);
        fill(255,555,0);
        rect(
            this.x + this.width * 0.5/10,
            this.y + this.height * 1/10,
            this.width * 9/10,
            this.height * 8/10)
    };

    checkPlayerOnTop = function (){
        const PLAYER_X = player.getWorldX();
        const PLAYER_Y = player.getY()
        if( PLAYER_X > this.x 
        && PLAYER_X < ( this.x + this.width )
        && PLAYER_Y < ( this.y + 2 )
        && PLAYER_Y > ( this.y - 2 ))
            this.contact = true;
        else 
            this.contact = false;
    }    
    
    isInContact = function ()
    {
        return this.contact;
    }
}