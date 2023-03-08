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
        fill(255,155,0);
        rect(this.x,this.y,this.length,this.height);
        fill(255,555,0);
        rect(
            this.x + this.length * 0.5/10,
            this.y + this.height * 1/10,
            this.length * 9/10,
            this.height * 8/10)
    };

    check = function (gc_x,gc_y){
        if(gc_x > this.x && gc_x < this.x + this.length){
            var d = this.y - gc_y;
            if(d >= 0 && d < 8){
                return true
            }
        }
        return false
    }    
}