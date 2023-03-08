class Mountain 
{
    constructor (x , size)
    {
        this.x = x;
        this.size = size;
    }

    draw = function (){

        fill(153,76,0);
        triangle(
            this.x,
            floorPos_y,
            this.x + this.size,
            floorPos_y,
            this.x + this.size /2,
            floorPos_y - this.size /3*2);
        triangle(
            this.x + this.size /4,
            floorPos_y,
            this.x + this.size + this.size/4,
            floorPos_y,
            this.x + this.size/2 + this.size/4,
            floorPos_y - this.size/3*1.8);
    }
}