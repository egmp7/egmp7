class FlagPole
{
    constructor (x)
    {
        this.x = x;
        this.isReached = false;
        this.playSound = true;

    }

    draw = function ()
    {
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

    check = function (gc_x)
    {
        if(abs(this.x - gc_x) < 10)
        {
            this.isReached = true;
            if(this.playSound)
                {
                    //sounds.flag_pole.play()
                    this.playSound = false;
                }
        }    
    } 
}