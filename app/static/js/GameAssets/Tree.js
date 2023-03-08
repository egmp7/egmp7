class Tree 
{
    constructor (x)
    {

        this.x = x;
        this.y = -70;

    }

    draw = function ()
    {
        fill(102,51,0)
        rect(this.x,floorPos_y + this.y,20,70);
        fill(0,102,0)
        triangle(this.x-20,floorPos_y + this.y,
        this.x+40,floorPos_y + this.y,
        this.x+10,floorPos_y-30 + this.y);
        triangle(this.x-20,floorPos_y-15 + this.y,
        this.x+40,floorPos_y-15 + this.y,
        this.x+10,floorPos_y-45 + this.y);     
    }
}