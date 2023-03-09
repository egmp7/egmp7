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

    getWorldX = function ()
    {
        return this.worldX;
    }

    getY = function ()
    {
        return this.y;
    }

    getLives = function ()
    {
        return this.lives;
    }

    draw = function ()
    {
        this.movePlayer()
        this.physics()
        this.updateWorldX()

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

    updateWorldX = function ()
    {
        this.worldX = this.x - scrollPos;
    }


    // Logic to make the game character move or the background scroll.
    movePlayer = function()
    {

        if(this.isLeft)
        {
            if(this.x > width * 0.2)
                this.x -= 10;
            else
                scrollPos += 10;
        }

        if(this.isRight)
        {
            if(this.x < width * 0.4)
                this.x  += 10;
            else
                scrollPos -= 10; 
        }
    }

    jump = function()
    {
        const JUMP_HEIGHT = 130;
        this.y -= JUMP_HEIGHT;
        this.isFalling = true ;
    }

    physics = function ()
    {
        const GRAVITY = 10;

        if(this.isFalling)
            this.y += GRAVITY;
        

        let isContact = false;

        // Logic to make the game character rise and fall.
        
        if(this.y < floorPos_y)
        {
            

            
            
            // for(var i = 0 ; i < platforms.length ; i++)
            // {
            //     if(platforms[i].check(gameChar_world_x,this.y))
            //     {
            //         isContact = true;
            //         player.setIsFalling( false );
            //         isFalling = false;
            //         this.y = platforms[i].y;
            //     }    
            // }
            // if(!isContact)
            // {
            //     player.setIsFalling( true );
            //     isFalling = true;
            //     this.y += 7;
            // }
            
        }
        else if(this.isPlummeting)
            {
                this.y +=18;
                this.isLeft = false;
                this.isRight = false;
            }
        else{

            this.isFalling = false;
            this.y = floorPos_y;
        }
    }

    deadByEnemy = function ()
    {
        console.log("Player::deadByEnemy")
    }
    deadByCanyon = function ()
    {
        console.log("Player::deadBCanyon")
        //this.isPlummeting = true;
    }

}