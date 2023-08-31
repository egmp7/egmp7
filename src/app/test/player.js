import { Vector } from "matter-js";

export class Player
{
    constructor(x,y)

    {
        this.x=x;
        this.y=y;
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

    draw = function (p5)
    {
        // this.isLeft = PLAYER_CONTROLLER.getMoveLeft()
        // this.isRight = PLAYER_CONTROLLER.getMoveRight()
        // this.isFalling = PLAYER_CONTROLLER.checkIfJumping()

        if( this.isLeft && this.isFalling )
        {
            // add your jumping-left code
            //body
            p5.fill(0,0,200)
            p5.triangle(this.x-7,this.y-40,this.x+7,this.y-40,this.x,this.y-50);
            p5.rect(this.x-7,this.y-40,14,30);
            p5.ellipse(this.x-3,this.y-10,4,6);
            p5.ellipse(this.x+5,this.y-10,4,6);
            //hands
            p5.stroke(0,0,200);
            p5.strokeWeight(5);
            p5.line(this.x+7,this.y-30,this.x+11,this.y-23);
            p5.strokeWeight(1);
            p5.noStroke();
            //eyes
            p5.fill(255,255,102)
            p5.ellipse(this.x-3,this.y-37,5,7);
            
        }
        else if( this.isRight && this.isFalling )
        {
            // add your jumping-right code
            //body
            p5.fill(0,0,200)
            p5.triangle(this.x-7,this.y-40,this.x+7,this.y-40,this.x,this.y-50);
            p5.rect(this.x-7,this.y-40,14,30);
            p5.ellipse(this.x-3,this.y-10,4,6);
            p5.ellipse(this.x+5,this.y-10,4,6);
            //hands
            p5.stroke(0,0,200);
            p5.strokeWeight(5);
            p5.line(this.x-7,this.y-30,this.x-11,this.y-23);
            p5.strokeWeight(1);
            p5.noStroke();
            //eyes
            fill(255,255,102)
            ellipse(this.x+3,this.y-37,5,7);
            
        }
        else if( this.isLeft )
        {
            // add your walking left code
            //body
            p5.fill(0,0,200)
            p5.triangle(this.x-7,this.y-40,this.x+7,this.y-40,this.x,this.y-50);
            p5.rect(this.x-7,this.y-40,14,30);
            p5.ellipse(this.x-3,this.y-10,4,6);
            p5.ellipse(this.x+5,this.y-10,4,6);
            //eyes
            p5.fill(255,255,102)
            p5.ellipse(this.x-3,this.y-37,5,7)
        }
        else if( this.isRight )
        {
            // add your walking right code
            //body
            p5.fill(0,0,200)
            p5.triangle(this.x-7,this.y-40,this.x+7,this.y-40,this.x,this.y-50);
            p5.rect(this.x-7,this.y-40,14,30);
            p5.ellipse(this.x-3,this.y-10,4,6);
            p5.ellipse(this.x+5,this.y-10,4,6);
            //eyes
            p5.fill(255,255,102)
            p5.ellipse(this.x+3,this.y-37,5,7)
            
        }
        else if( this.isFalling || this.isPlummeting)
        {
            // add your jumping facing forwards code
            //body
            p5.fill(0,0,200)
            p5.triangle(this.x-10,this.y-40,this.x+10,this.y-40,this.x,this.y-50);
            p5.rect(this.x-10,this.y-40,20,30);
            p5.ellipse(this.x-6,this.y-10,4,6);
            p5.ellipse(this.x+6,this.y-10,4,6);
            //hands
            p5.stroke(0,0,200);
            p5.strokeWeight(5);
            p5.line(this.x-10,this.y-35,this.x-16,this.y-42);
            p5.line(this.x+10,this.y-35,this.x+16,this.y-42);
            p5.strokeWeight(1);
            p5.noStroke();
            //eyes
            p5.fill(255,255,102)
            p5.ellipse(this.x-3,this.y-38,5,7)
            p5.ellipse(this.x+3,this.y-38,5,7)
        }
        else
        {
            // add your standing front facing code
            //body
            p5.fill(0,0,200)
            p5.triangle(this.x-10,this.y-40,this.x+10,this.y-40,this.x,this.y-50);
            p5.rect(this.x-10,this.y-40,20,30);
            p5.rect(this.x-6,this.y-10,4,10);
            p5.rect(this.x+2,this.y-10,4,10);
            //eyes
            p5.fill(255,255,102)
            p5.ellipse(this.x-3,this.y-38,5,7)
            p5.ellipse(this.x+3,this.y-38,5,7)
        }
    }

}