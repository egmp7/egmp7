class Status
{
    score = 0;
    lives = 3;
    constructor()
    {

    }

    draw =  function ()
    {
        // Draw Score
        fill(250);
        textSize(20);
        textFont('Courier')
        textAlign(LEFT);
        text('Lives: ', 50, 30);
        text(`Score ${ this.score }`, 50, 55 )
        
        // Draw Tokens:
        for(var i=0;i< this.lives ;i++){
            var x = 120 + i * 23
            var y = 15
            
            fill(0,0,200);
            triangle(x,y,x+20,y,x+10,y+20);
            fill(255,255,102);
            triangle(x+8,y+5,x+12,y+5,x+10,y+15);
        }
    }

    setScore = function (score)
    {
        this.score = score;
    }

    getScore = function ()
    {
        return score;
    }
}