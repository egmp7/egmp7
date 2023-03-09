class Player 
{
    constructor(x , y)

    {
        this.x = x;
        this.worldX = x;
        this.y = y;
        this.isLeft = false;
        this.isRight = false;
        this.isFalling = false;
        this.isPlummeting = false;   
        this.lives = 3;
    }

    setIsLeft =function(bool)
    {
        this.isLeft = bool;
    }

    setIsRight = function (bool)
    {
        this.isRight = bool;
    }

    setIsFalling = function (bool)
    {
        this.isFalling = bool;
    }

    setIsPlummeting = function (bool)
    {
        this.isPlummeting = bool;
    }

    getLives = function ()
    {
        return this.lives;
    }

    draw = function ()
    {
        if( this.isLeft && this.isFalling )
        {
            // add your jumping-left code
            //body
            fill(0,0,200)
            triangle(gameChar_x-7,gameChar_y-40,gameChar_x+7,gameChar_y-40,gameChar_x,gameChar_y-50);
            rect(gameChar_x-7,gameChar_y-40,14,30);
            ellipse(gameChar_x-3,gameChar_y-10,4,6);
            ellipse(gameChar_x+5,gameChar_y-10,4,6);
            //hands
            stroke(0,0,200);
            strokeWeight(5);
            line(gameChar_x+7,gameChar_y-30,gameChar_x+11,gameChar_y-23);
            strokeWeight(1);
            noStroke();
            //eyes
            fill(255,255,102)
            ellipse(gameChar_x-3,gameChar_y-37,5,7);
            
        }
        else if( this.isRight && this.isFalling )
        {
            // add your jumping-right code
            //body
            fill(0,0,200)
            triangle(gameChar_x-7,gameChar_y-40,gameChar_x+7,gameChar_y-40,gameChar_x,gameChar_y-50);
            rect(gameChar_x-7,gameChar_y-40,14,30);
            ellipse(gameChar_x-3,gameChar_y-10,4,6);
            ellipse(gameChar_x+5,gameChar_y-10,4,6);
            //hands
            stroke(0,0,200);
            strokeWeight(5);
            line(gameChar_x-7,gameChar_y-30,gameChar_x-11,gameChar_y-23);
            strokeWeight(1);
            noStroke();
            //eyes
            fill(255,255,102)
            ellipse(gameChar_x+3,gameChar_y-37,5,7);
            
        }
        else if( this.isLeft )
        {
            // add your walking left code
            //body
            fill(0,0,200)
            triangle(gameChar_x-7,gameChar_y-40,gameChar_x+7,gameChar_y-40,gameChar_x,gameChar_y-50);
            rect(gameChar_x-7,gameChar_y-40,14,30);
            ellipse(gameChar_x-3,gameChar_y-10,4,6);
            ellipse(gameChar_x+5,gameChar_y-10,4,6);
            //eyes
            fill(255,255,102)
            ellipse(gameChar_x-3,gameChar_y-37,5,7)
        }
        else if( this.isRight )
        {
            // add your walking right code
            //body
            fill(0,0,200)
            triangle(gameChar_x-7,gameChar_y-40,gameChar_x+7,gameChar_y-40,gameChar_x,gameChar_y-50);
            rect(gameChar_x-7,gameChar_y-40,14,30);
            ellipse(gameChar_x-3,gameChar_y-10,4,6);
            ellipse(gameChar_x+5,gameChar_y-10,4,6);
            //eyes
            fill(255,255,102)
            ellipse(gameChar_x+3,gameChar_y-37,5,7)
            
        }
        else if( this.isFalling || this.isPlummeting)
        {
            // add your jumping facing forwards code
            //body
            fill(0,0,200)
            triangle(gameChar_x-10,gameChar_y-40,gameChar_x+10,gameChar_y-40,gameChar_x,gameChar_y-50);
            rect(gameChar_x-10,gameChar_y-40,20,30);
            ellipse(gameChar_x-6,gameChar_y-10,4,6);
            ellipse(gameChar_x+6,gameChar_y-10,4,6);
            //hands
            stroke(0,0,200);
            strokeWeight(5);
            line(gameChar_x-10,gameChar_y-35,gameChar_x-16,gameChar_y-42);
            line(gameChar_x+10,gameChar_y-35,gameChar_x+16,gameChar_y-42);
            strokeWeight(1);
            noStroke();
            //eyes
            fill(255,255,102)
            ellipse(gameChar_x-3,gameChar_y-38,5,7)
            ellipse(gameChar_x+3,gameChar_y-38,5,7)
        }
        else
        {
            // add your standing front facing code
            //body
            fill(0,0,200)
            triangle(gameChar_x-10,gameChar_y-40,gameChar_x+10,gameChar_y-40,gameChar_x,gameChar_y-50);
            rect(gameChar_x-10,gameChar_y-40,20,30);
            rect(gameChar_x-6,gameChar_y-10,4,10);
            rect(gameChar_x+2,gameChar_y-10,4,10);
            //eyes
            fill(255,255,102)
            ellipse(gameChar_x-3,gameChar_y-38,5,7)
            ellipse(gameChar_x+3,gameChar_y-38,5,7)
        }
    }

    
}