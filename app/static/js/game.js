var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var clouds = [];
var mountains;
var trees;
var canyons;
var collectables;
var platforms;
var enemies;
var flag_pole;

var gameStart =false;
var game_score;
var lives;
var token;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var sounds;

function setup()
{
	createCanvas($( window ).width(), $( window ).height());
	floorPos_y = height * 3/4;
    
    startGame();
}

function draw()
{
	drawBackground();
    drawStatus();
    
    // Translate Elements
    push();
    translate(scrollPos,0);
    
    // Clouds
    for(var i = 0 ; i < clouds.length ; i++)
    {
        clouds[i].draw();
    }
    
    // Mountains
    for(var i = 0 ; i < mountains.length; i++)
    {
        mountains[i].draw();
    }
    
    // Trees
    for(var i = 0 ; i < trees.length ; i++)
    {
        trees[i].draw();
    }
    
    // Canyons
    for(var i = 0 ; i< canyons.length ; i++)
    {
        canyons[i].draw();
        //canyons[i].check(gameChar_world_x,gameChar_y);
        //canyons[i].dies(gameChar_y);
    }
    
    // Collectables
    for(var i = 0 ; i < collectables.length ; i++)
    {
        collectables[i].draw();
        //collectables[i].check(gameChar_world_x,gameChar_y);
        
    }
    // Platforms
    for(var i = 0 ; i < platforms.length ; i++)
    {
        platforms[i].draw();
    }
    // Enemies
    for (var i = 0 ; i < enemies.length ; i++)
    {
        enemies[i].draw();
    
        var isContact = enemies[i].check(gameChar_world_x,gameChar_y);
        if (isContact)
        {
            lives --;
            //sounds.deadByEnemy.play();
            startGame();
        }
    }
    
    // Flag Pole
    flag_pole.draw();
    flag_pole.check(gameChar_world_x);
    
    // Save
    pop();
    
    // Renders: Start Game, Level Completed or Game Over texts.
    if(drawGameEvents()){
        return
    };

    drawGameChar();
        
    // Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

    controls();    
}
// ---------------------
// START
// ---------------------
function startGame(){
    
    gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Level Design.
    
    mountains = [];
    mountains.push(new Mountain(  300 ,   190));
    mountains.push(new Mountain(  900 ,   170));
    mountains.push(new Mountain(  1400,   200));
    mountains.push(new Mountain(  2000,   300));
    mountains.push(new Mountain(  3200,   280));
    mountains.push(new Mountain(  4500,   350));
    mountains.push(new Mountain(  5800,   250));
    mountains.push(new Mountain(  6500,   200));
    mountains.push(new Mountain(  9000,   370));
    mountains.push(new Mountain(  10300,   270));

    trees = [];
    trees.push(new Tree(100));
    trees.push(new Tree(300));
    trees.push(new Tree(800));
    trees.push(new Tree(1100));
    trees.push(new Tree(1900));
    trees.push(new Tree(2100));
    trees.push(new Tree(3400));
    trees.push(new Tree(3600));
    trees.push(new Tree(4200));
    trees.push(new Tree(4700));
    trees.push(new Tree(4800));
    trees.push(new Tree(5570));
    trees.push(new Tree(6800));
    trees.push(new Tree(6400));
    trees.push(new Tree(6200));
    trees.push(new Tree(8500));
    trees.push(new Tree(8900));
    trees.push(new Tree(9100));
    trees.push(new Tree(9300));
    trees.push(new Tree(9800));
    trees.push(new Tree(10500));
    trees.push(new Tree(10560));
    trees.push(new Tree(10760));

    canyons = [];
    canyons.push(new Canyon( -1000    ,   1000));
    canyons.push(new Canyon(  1200    ,   100));
    canyons.push(new Canyon(  1700    ,   140));
    canyons.push(new Canyon(  2500    ,   500));
    canyons.push(new Canyon(  2500    ,   500));
    canyons.push(new Canyon(  3800    ,   100));
    canyons.push(new Canyon(  4000    ,   100));
    canyons.push(new Canyon(  5000    ,   400));
    canyons.push(new Canyon(  7300    ,   1000));
    canyons.push(new Canyon(  9500    ,   100));
      
    platforms = [];
    
    platforms.push(new Platform( 950 , floorPos_y - 70 , 100));
    platforms.push(new Platform( 950 , floorPos_y - 130 , 100));
    platforms.push(new Platform( 1600 , floorPos_y - 70 , 100));
    platforms.push(new Platform( 2450 , floorPos_y - 70 , 100));
    platforms.push(new Platform( 2530 , floorPos_y - 120 , 100));
    platforms.push(new Platform( 2600 , floorPos_y - 170 , 200));
    platforms.push(new Platform( 4980 , floorPos_y - 70 , 440));
    
    platforms.push(new Platform( 7250 , floorPos_y - 70 , 100))
    platforms.push(new Platform( 7350 , floorPos_y - 130 , 100))
    platforms.push(new Platform( 7450 , floorPos_y - 190 , 100))
    platforms.push(new Platform( 7600 , floorPos_y - 190 , 100))
    platforms.push(new Platform( 7750 , floorPos_y - 190 , 100))
    platforms.push(new Platform( 7900 , floorPos_y - 190 , 100))

    collectables = [];
    collectables.push(new Collectable(  150   ,   400));
    collectables.push(new Collectable(  180   ,   400));
    collectables.push(new Collectable(  210   ,   400));
    collectables.push(new Collectable(  1000  ,   400));
    collectables.push(new Collectable(  1000  ,   200));
    collectables.push(new Collectable(  2000  ,   400));
    collectables.push(new Collectable(  2160  ,   400));
    collectables.push(new Collectable(  2400  ,   400));
    collectables.push(new Collectable(  2350  ,   400));
    collectables.push(new Collectable(  2500  ,   320));
    collectables.push(new Collectable(  2630  ,   220));
    collectables.push(new Collectable(  2900  ,   200));
    collectables.push(new Collectable(  2960  ,   240));
    collectables.push(new Collectable(  3020  ,   280));
    collectables.push(new Collectable(  3950  ,   400));
    collectables.push(new Collectable(  5240  ,   320));
    collectables.push(new Collectable(  5290  ,   320));
    collectables.push(new Collectable(  5340  ,   320));
    collectables.push(new Collectable(  5840  ,   400));
    collectables.push(new Collectable(  5920  ,   360));
    collectables.push(new Collectable(  6320  ,   400));
    collectables.push(new Collectable(  6400  ,   360));
    collectables.push(new Collectable(  6480  ,   400));
    collectables.push(new Collectable(  7150  ,   400));
    collectables.push(new Collectable(  7500  ,   210));
    collectables.push(new Collectable(  7650  ,   210));
    collectables.push(new Collectable(  7800  ,   210));
    collectables.push(new Collectable(  8100  ,   200));
    collectables.push(new Collectable(  8160  ,   240));
    collectables.push(new Collectable(  8220  ,   280)); 
    collectables.push(new Collectable(  8800  ,   410));
    collectables.push(new Collectable(  9740  ,   410));
    collectables.push(new Collectable(  9800  ,   410));
    collectables.push(new Collectable(  9860  ,   410));
    
    enemies = [];
    enemies.push(new Enemy(2000,floorPos_y,60));
    enemies.push(new Enemy(3300,floorPos_y,60));
    enemies.push(new Enemy(3400,floorPos_y,60));
    enemies.push(new Enemy(4000,floorPos_y,         100));
    enemies.push(new Enemy(4020,floorPos_y,         100));
    enemies.push(new Enemy(4040,floorPos_y,         100));
    enemies.push(new Enemy(4060,floorPos_y,         100));
    enemies.push(new Enemy(5180,floorPos_y - 120 ,  200));
    enemies.push(new Enemy(5800,floorPos_y - 50 ,   40));
    enemies.push(new Enemy(5880,floorPos_y,         40));
    enemies.push(new Enemy(6300,floorPos_y - 50 ,   40));
    enemies.push(new Enemy(6380,floorPos_y,         40));
    enemies.push(new Enemy(6460,floorPos_y - 50 ,   40));
    enemies.push(new Enemy(6520,floorPos_y,         40));
    enemies.push(new Enemy(7750,floorPos_y -190,    100));
    enemies.push(new Enemy(8700,floorPos_y - 50 ,  200));
    enemies.push(new Enemy(8790,floorPos_y,         40));


    for(var i = 0 ; i < 100 ; i++)
    {
        clouds.push(new Cloud(
            300 * random(0.7,1) * i,
            200 * random(0.25,1),
            90  * random(0.6, 1)
        ))
    }
    
    lives = 3;

    
    flag_pole = new FlagPole (10000)
    
    game_score = 0;
        
}
// ----------------------------
// KEY CONTROL FUNCTIONS
// ---------------------------
function keyPressed(){
    
    if(keyCode == 37){
        isLeft = true;
    }
    else if(keyCode == 39){
        isRight = true;
    }
    else if(keyCode == 32 && isFalling == false){
        isFalling = true;
        gameChar_y -= 110;
        
       //sounds.jump.play();
    } 
}
function keyReleased(){

    if(keyCode == 37)
    {
        isLeft = false;
    }
    else if(keyCode == 39)
    {
        isRight = false;
    }
    else if(keyCode == 13 && lives==0)
    {
        lives =3;
        startGame();
    }
    else if(keyCode ==13 && flag_pole.isReached)
    {
         startGame();    
    }
    else if(keyCode == 13 && gameStart == false)
    {
        gameStart = true;
        startGame();
        elem = document.getElementById ("defaultCanvas0");
        elem.requestFullscreen();

        //sounds.soundtrack.loop();
    }    
}
// Function that respond to key events
function controls()
{

    // Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 10;
		}
		else
		{
			scrollPos += 10;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.4)
		{
			gameChar_x  += 10;
		}
		else
		{
			scrollPos -= 10; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
    
    if(gameChar_y < floorPos_y)
    {

        var isContact = false;
        
        for(var i = 0 ; i < platforms.length ; i++)
        {
            if(platforms[i].check(gameChar_world_x,gameChar_y))
            {
                isContact = true;
                isFalling = false;
                gameChar_y = platforms[i].y;
            }    
        }
        if(!isContact)
        {
            isFalling = true;
            gameChar_y += 7;
        }
         
    }
    else if(isPlummeting)
        {
            gameChar_y +=18;
            isLeft = false;
            isRight = false;
        }
    else{
        isFalling = false;
        gameChar_y = floorPos_y;
    }
}
// ---------------------------------
// VIEW RENDERING FUNCTIONS
// ---------------------------------
// Function to draw the Background
function drawBackground (){
    background(100, 155, 255); // fill the sky blue
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground 
}
// Function to draw lives tokens and Score
function drawStatus (){
    
    // Draw Score
    fill(250);
    textSize(20);
    textFont('Courier')
    textAlign(LEFT);
    text('Lives: ',50,30);
    text('Score: '+game_score,50,55)
    
    // Draw Tokens:
    for(var i=0;i<lives;i++){
        var x = 120 + i*23
        var y = 15
        
        fill(0,0,200);
        triangle(x,y,x+20,y,x+10,y+20);
        fill(255,255,102);
        triangle(x+8,y+5,x+12,y+5,x+10,y+15);
    }
    
}
// Function to draw Start Level, Level Completed or Game Over
function drawGameEvents(){
   textAlign(CENTER);
    fill(255);
    // Start Level
    if(gameStart == false){
        text("Press Enter to start",width/2,height/2);
        return true;
    }
    //Level Completed
    else if(flag_pole.isReached == true){
        text("Level complete. Press Enter to continue.",width/2,height/2);
        return true;
    }
    // Game Over
    else if(lives<1){
        text("Game over. Press Enter to continue.",width/2,height/2);
        return true;
    }
}
// ------------------------------
// Game character render function
// ------------------------------
function drawGameChar(){
	// draw game character
	if(isLeft && isFalling)
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
	else if(isRight && isFalling)
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
	else if(isLeft)
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
	else if(isRight)
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
	else if(isFalling || isPlummeting)
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


function mouseClicked() {
    var sound = new Howl({
    
        src: [ './static/GameAudios/canyonFall.wav']
    
    });
    sound.play();
}