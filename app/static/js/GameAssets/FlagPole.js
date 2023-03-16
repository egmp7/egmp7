class FlagPole
{
    isReached = false
    constructor ( _x, _y )
    {
        this.x = _x;
        this.y = _y;
    }

    draw = function ()
    {
        this.checkCloseToFlagPole()

        fill(250,0,0);
        if(this.isReached)
            rect(this.x + 6, this.y - 70,30,20);
        else
            rect(this.x + 6, this.y - 30,30,20);
        fill(60);
        rect(this.x, this.y - 70,6,70)
    }

    checkCloseToFlagPole = function ()
    {
        if( abs (this.x - PLAYER_CONTROLLER.getWorldX()) < 10)
        {
            this.isReached = true
            console.log("FlagPole::checkCloseToFlagPole")    
        }
    } 
}