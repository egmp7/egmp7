class PlayerDraw
{
    constructor()

    {
        this.x;
        this.y;
        this.isLeft = false;
        this.isRight = false;
        this.isFalling = false;
        this.isPlummeting = false;   
    }

    setX = function ( value )
    {
        this.x = value;
    }

    setY = function ( value )
    {
        this.y = value;
    }

    setIsLeft =function(bool)
    {
        this.isLeft = bool;
    }

    setIsRight = function (bool)
    {
        this.isRight = bool;
    }

    setIsFalling =function(bool)
    {
        this.isFalling = bool;
    }

    draw = function ()
    {
        // this.movePlayer()
        // this.updateWorldX()
        this.isLeft = PLAYER_CONTROLLER.getMoveLeft()
        this.isRight = PLAYER_CONTROLLER.getMoveRight()
        this.isFalling = PLAYER_CONTROLLER.checkIfJumping()

        fill( 255,0,0 )
        ellipse(this.x,this.y,3,3)

        if( this.isLeft && this.isFalling )
        {
            // add your jumping-left code
            //body
            fill(0,0,200)
            triangle(this.x-7,this.y-40,this.x+7,this.y-40,this.x,this.y-50);
            rect(this.x-7,this.y-40,14,30);
            ellipse(this.x-3,this.y-10,4,6);
            ellipse(this.x+5,this.y-10,4,6);
            //hands
            stroke(0,0,200);
            strokeWeight(5);
            line(this.x+7,this.y-30,this.x+11,this.y-23);
            strokeWeight(1);
            noStroke();
            //eyes
            fill(255,255,102)
            ellipse(this.x-3,this.y-37,5,7);
            
        }
        else if( this.isRight && this.isFalling )
        {
            // add your jumping-right code
            //body
            fill(0,0,200)
            triangle(this.x-7,this.y-40,this.x+7,this.y-40,this.x,this.y-50);
            rect(this.x-7,this.y-40,14,30);
            ellipse(this.x-3,this.y-10,4,6);
            ellipse(this.x+5,this.y-10,4,6);
            //hands
            stroke(0,0,200);
            strokeWeight(5);
            line(this.x-7,this.y-30,this.x-11,this.y-23);
            strokeWeight(1);
            noStroke();
            //eyes
            fill(255,255,102)
            ellipse(this.x+3,this.y-37,5,7);
            
        }
        else if( this.isLeft )
        {
            // add your walking left code
            //body
            fill(0,0,200)
            triangle(this.x-7,this.y-40,this.x+7,this.y-40,this.x,this.y-50);
            rect(this.x-7,this.y-40,14,30);
            ellipse(this.x-3,this.y-10,4,6);
            ellipse(this.x+5,this.y-10,4,6);
            //eyes
            fill(255,255,102)
            ellipse(this.x-3,this.y-37,5,7)
        }
        else if( this.isRight )
        {
            // add your walking right code
            //body
            fill(0,0,200)
            triangle(this.x-7,this.y-40,this.x+7,this.y-40,this.x,this.y-50);
            rect(this.x-7,this.y-40,14,30);
            ellipse(this.x-3,this.y-10,4,6);
            ellipse(this.x+5,this.y-10,4,6);
            //eyes
            fill(255,255,102)
            ellipse(this.x+3,this.y-37,5,7)
            
        }
        else if( this.isFalling || this.isPlummeting)
        {
            // add your jumping facing forwards code
            //body
            fill(0,0,200)
            triangle(this.x-10,this.y-40,this.x+10,this.y-40,this.x,this.y-50);
            rect(this.x-10,this.y-40,20,30);
            ellipse(this.x-6,this.y-10,4,6);
            ellipse(this.x+6,this.y-10,4,6);
            //hands
            stroke(0,0,200);
            strokeWeight(5);
            line(this.x-10,this.y-35,this.x-16,this.y-42);
            line(this.x+10,this.y-35,this.x+16,this.y-42);
            strokeWeight(1);
            noStroke();
            //eyes
            fill(255,255,102)
            ellipse(this.x-3,this.y-38,5,7)
            ellipse(this.x+3,this.y-38,5,7)
        }
        else
        {
            // add your standing front facing code
            //body
            fill(0,0,200)
            triangle(this.x-10,this.y-40,this.x+10,this.y-40,this.x,this.y-50);
            rect(this.x-10,this.y-40,20,30);
            rect(this.x-6,this.y-10,4,10);
            rect(this.x+2,this.y-10,4,10);
            //eyes
            fill(255,255,102)
            ellipse(this.x-3,this.y-38,5,7)
            ellipse(this.x+3,this.y-38,5,7)
        }
    }

}