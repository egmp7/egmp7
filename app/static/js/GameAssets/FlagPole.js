class FlagPole
{
    constructor (x)
    {
        this.x = x;
        this.isReached = false
    }

    draw = function ()
    {
        this.checkCloseToFlagPole()

        fill(250,0,0);
        if(this.isReached)
        {
            rect(this.x + 6,floorPos_y - 70,30,20);
        }
        else
        {
            rect(this.x + 6,floorPos_y - 30,30,20);
        }
        fill(60);
        rect(this.x,floorPos_y - 70,6,70)
    }

    checkCloseToFlagPole = function ()
    {
        if( abs (this.x - player.getWorldX()) < 10)
        {
            this.isReached = true
            console.log("FlagPole::checkCloseToFlagPole")    
        }
    } 
}