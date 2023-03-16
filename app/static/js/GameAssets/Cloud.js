class Cloud 
{
    constructor (x,y,size)
    {
        this.x = x;
        this.y = y;
        this.currentY = y;
        this.size = size;
        this.incX = 0;
        this.incY = 0.05

    }

    draw = function ()
    {      
        this.update();
        noStroke()
        
        fill(255,255,255);
        ellipse(
            this.x + this.incX,
            this.currentY,
            this.size,
            this.size);
        ellipse(
            this.x + this.incX -this.size/2,
            this.currentY,
            this.size/3*2,
            this.size/3*2);
        ellipse(
            this.x + this.incX + this.size/2,
            this.currentY,
            this.size/3*2,
            this.size/3*2);
    }

    update = function ()
    {
        this.incX -= 0.1;
        this.currentY += this.incY
        
        if(this.currentY > this.y + 15)
        {
            this.incY = -0.05
        }
        else if (this.currentY < this.y)
        {
            this.incY += 0.05
        }
    }
}