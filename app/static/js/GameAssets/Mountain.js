class Mountain 
{
    constructor ( _x, _y,_size )
    {
        this.x = _x;
        this.y = _y;
        this.size = _size;
    }

    draw = function (){

        fill(153,76,0);
        triangle(
            this.x,
            this.y,
            this.x + this.size,
            this.y,
            this.x + this.size /2,
            this.y - this.size /3*2);
        triangle(
            this.x + this.size /4,
            this.y,
            this.x + this.size + this.size/4,
            this.y,
            this.x + this.size/2 + this.size/4,
            this.y - this.size/3*1.8);
    }
}