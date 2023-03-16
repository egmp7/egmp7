class LevelOne
{
    constructor()
    {
        this.grounds = [];
        this.platforms = [];
        this.assets = []

        const GRID_X = width / 32;
        const GRID_Y = height / 24;

        // this.grounds.push(new Ground(  GRID_X ,      GRID_Y * 20 ,   GRID_X * 10));
        // this.grounds.push(new Ground(  GRID_X * 18 , GRID_Y * 21 ,   GRID_X * 10));
        // this.grounds.push(new Ground(  GRID_X * 34 , GRID_Y * 20 ,   GRID_X * 20));
        // this.grounds.push(new Ground(  GRID_X * 54 , GRID_Y * 10 ,   GRID_X * 20));

        //this.grounds.push(new Ground( 0 ,      GRID_Y * 16 ,  width, GRID_Y * 5));
        //this.grounds.push(new Ground( 0 ,      GRID_Y * 10 ,  width, GRID_Y * 5));
        //this.grounds.push(new Ground( GRID_X * 4 ,      GRID_Y * 15 ,  GRID_X, GRID_Y * 10 ));

        for(var i = 0 ; i < 100 ; i++)
        {
            this.assets.push(new Cloud( 100 * i * random( 0.7, 1 ), 200 * random( 0.25, 1 ), 90  * random( 0.6, 1 )))
        }

        this.assets.push(new Ground( 0 ,      GRID_Y * 16 ,  width * 2, GRID_Y * 5));
        this.assets.push(new Mountain(  300 , GRID_Y * 16,  190));
        this.assets.push(new Tree ( 100,  GRID_Y * 16 ));
        this.assets.push(new Collectable(  150   ,   GRID_Y * 16));
        this.assets.push(new Enemy( 300, GRID_Y * 16, 60 ));
        this.assets.push(new FlagPole ( 100, GRID_Y * 16 ))
        
        this.assets.push(new Platform( 400 ,  GRID_Y * 14 , 100));
        this.assets.push(new Platform( 400 ,  GRID_Y * 12 , 100));
        this.assets.push(new Platform( 1000 ,  GRID_Y * 14 , 100));

        
        
        
        



        // this.grounds.push(new Ground(  GRID_X * 4 ,      GRID_Y * 10 ,   GRID_X * 6, GRID_Y * 5));
        // this.grounds.push(new Ground(  GRID_X * 18 ,      GRID_Y * 10 ,   GRID_X * 6, GRID_Y * 5));

        // this.grounds.push(new Ground(  GRID_X * 7 , GRID_Y * 18 ,   GRID_X * 18));
        // this.grounds.push(new Ground(  GRID_X * 25 , GRID_Y * 17 ,   GRID_X * 20));
        //this.grounds.push(new Ground(  GRID_X * 54 , GRID_Y * 10 ,   GRID_X * 20));

        // this.assets.push(new Canyon(  GRID_X * 11 ,  GRID_X * 7, GRID_Y * 20, GRID_Y * 21 ));
        // this.assets.push(new Canyon(  GRID_X * 28 ,  GRID_X * 6, GRID_Y * 21, GRID_Y * 20 ));

        // this.platforms.push(new Platform( GRID_X * 12 , GRID_Y * 22 , GRID_X * 5));
        // this.platforms.push(new Platform( GRID_X * 29 , GRID_Y * 22 , GRID_X * 4));

    }
}

// function initLevel1(){
    
//     levelAssets = [];
    
// 	// Level Design.

//     const GRID_X = width / 16;
//     const GRID_Y = floorPos_y / 12;

//     levelAssets.push(new Ground(  300 ,   550 , 800));

//     levelAssets.push(new Mountain(  300 ,   190));
//     levelAssets.push(new Mountain(  900 ,   170));
//     levelAssets.push(new Mountain(  1400,   200));
//     levelAssets.push(new Mountain(  2000,   300));
//     levelAssets.push(new Mountain(  3200,   280));
//     levelAssets.push(new Mountain(  4500,   350));
//     levelAssets.push(new Mountain(  5800,   250));
//     levelAssets.push(new Mountain(  6500,   200));
//     levelAssets.push(new Mountain(  9000,   370));
//     levelAssets.push(new Mountain(  10300,   270));

//     levelAssets.push(new Tree(100));
//     levelAssets.push(new Tree(300));
//     levelAssets.push(new Tree(800));
//     levelAssets.push(new Tree(1100));
//     levelAssets.push(new Tree(1900));
//     levelAssets.push(new Tree(2100));
//     levelAssets.push(new Tree(3400));
//     levelAssets.push(new Tree(3600));
//     levelAssets.push(new Tree(4200));
//     levelAssets.push(new Tree(4700));
//     levelAssets.push(new Tree(4800));
//     levelAssets.push(new Tree(5570));
//     levelAssets.push(new Tree(6800));
//     levelAssets.push(new Tree(6400));
//     levelAssets.push(new Tree(6200));
//     levelAssets.push(new Tree(8500));
//     levelAssets.push(new Tree(8900));
//     levelAssets.push(new Tree(9100));
//     levelAssets.push(new Tree(9300));
//     levelAssets.push(new Tree(9800));
//     levelAssets.push(new Tree(10500));
//     levelAssets.push(new Tree(10560));
//     levelAssets.push(new Tree(10760));

//     levelAssets.push(new Canyon( -1000    ,   1000));
//     // levelAssets.push(new Canyon(  1200    ,   100));
//     // levelAssets.push(new Canyon(  1700    ,   140));
//     // levelAssets.push(new Canyon(  2500    ,   500));
//     // levelAssets.push(new Canyon(  2500    ,   500));
//     // levelAssets.push(new Canyon(  3800    ,   100));
//     // levelAssets.push(new Canyon(  4000    ,   100));
//     // levelAssets.push(new Canyon(  5000    ,   400));
//     // levelAssets.push(new Canyon(  7300    ,   1000));
//     // levelAssets.push(new Canyon(  9500    ,   100));
      
//     levelAssets.push(new Platform( 950 , floorPos_y - 70 , 100));
//     // levelAssets.push(new Platform( 950 , floorPos_y - 130 , 100));
//     // levelAssets.push(new Platform( 1600 , floorPos_y - 70 , 100));
//     // levelAssets.push(new Platform( 2450 , floorPos_y - 70 , 100));
//     // levelAssets.push(new Platform( 2530 , floorPos_y - 120 , 100));
//     // levelAssets.push(new Platform( 2600 , floorPos_y - 170 , 200));
//     // levelAssets.push(new Platform( 4980 , floorPos_y - 70 , 440));
//     // levelAssets.push(new Platform( 7250 , floorPos_y - 70 , 100))
//     // levelAssets.push(new Platform( 7350 , floorPos_y - 130 , 100))
//     // levelAssets.push(new Platform( 7450 , floorPos_y - 190 , 100))
//     // levelAssets.push(new Platform( 7600 , floorPos_y - 190 , 100))
//     // levelAssets.push(new Platform( 7750 , floorPos_y - 190 , 100))
//     // levelAssets.push(new Platform( 7900 , floorPos_y - 190 , 100))

//     // levelAssets.push(new Collectable(  150   ,   GRID_Y * 11));
//     // levelAssets.push(new Collectable(  180   ,   GRID_Y * 11));
//     // levelAssets.push(new Collectable(  210   ,   GRID_Y * 11));
//     // levelAssets.push(new Collectable(  1000  ,   GRID_Y * 11));
//     // levelAssets.push(new Collectable(  1000  ,   GRID_Y * 7));
//     // levelAssets.push(new Collectable(  2000  ,   GRID_Y * 11));
//     // levelAssets.push(new Collectable(  2160  ,   GRID_Y * 11));
//     // levelAssets.push(new Collectable(  2400  ,   GRID_Y * 11));
//     // levelAssets.push(new Collectable(  2350  ,   GRID_Y * 11));
//     // levelAssets.push(new Collectable(  2500  ,   320));
//     // levelAssets.push(new Collectable(  2630  ,   220));
//     // levelAssets.push(new Collectable(  2900  ,   200));
//     // levelAssets.push(new Collectable(  2960  ,   240));
//     // levelAssets.push(new Collectable(  3020  ,   280));
//     // levelAssets.push(new Collectable(  3950  ,   400));
//     // levelAssets.push(new Collectable(  5240  ,   320));
//     // levelAssets.push(new Collectable(  5290  ,   320));
//     // levelAssets.push(new Collectable(  5340  ,   320));
//     // levelAssets.push(new Collectable(  5840  ,   400));
//     // levelAssets.push(new Collectable(  5920  ,   360));
//     // levelAssets.push(new Collectable(  6320  ,   400));
//     // levelAssets.push(new Collectable(  6400  ,   360));
//     // levelAssets.push(new Collectable(  6480  ,   400));
//     // levelAssets.push(new Collectable(  7150  ,   400));
//     // levelAssets.push(new Collectable(  7500  ,   210));
//     // levelAssets.push(new Collectable(  7650  ,   210));
//     // levelAssets.push(new Collectable(  7800  ,   210));
//     // levelAssets.push(new Collectable(  8100  ,   200));
//     // levelAssets.push(new Collectable(  8160  ,   240));
//     // levelAssets.push(new Collectable(  8220  ,   280)); 
//     // levelAssets.push(new Collectable(  8800  ,   410));
//     // levelAssets.push(new Collectable(  9740  ,   410));
//     // levelAssets.push(new Collectable(  9800  ,   410));
//     // levelAssets.push(new Collectable(  9860  ,   410));
    
//     levelAssets.push(new Enemy(2000,floorPos_y,60));
//     // levelAssets.push(new Enemy(3300,floorPos_y,60));
//     // levelAssets.push(new Enemy(3400,floorPos_y,60));
//     // levelAssets.push(new Enemy(4000,floorPos_y,         100));
//     // levelAssets.push(new Enemy(4020,floorPos_y,         100));
//     // levelAssets.push(new Enemy(4040,floorPos_y,         100));
//     // levelAssets.push(new Enemy(4060,floorPos_y,         100));
//     // levelAssets.push(new Enemy(5180,floorPos_y - 120 ,  200));
//     // levelAssets.push(new Enemy(5800,floorPos_y - 50 ,   40));
//     // levelAssets.push(new Enemy(5880,floorPos_y,         40));
//     // levelAssets.push(new Enemy(6300,floorPos_y - 50 ,   40));
//     // levelAssets.push(new Enemy(6380,floorPos_y,         40));
//     // levelAssets.push(new Enemy(6460,floorPos_y - 50 ,   40));
//     // levelAssets.push(new Enemy(6520,floorPos_y,         40));
//     // levelAssets.push(new Enemy(7750,floorPos_y -190,    100));
//     // levelAssets.push(new Enemy(8700,floorPos_y - 50 ,  200));
//     // levelAssets.push(new Enemy(8790,floorPos_y,         40));

//     levelAssets.push(new FlagPole (10000))

//     for(var i = 0 ; i < 100 ; i++)
//     {
//         levelAssets.push(new Cloud( 100 * i * random( 0.7, 1 ), 200 * random( 0.25, 1 ), 90  * random( 0.6, 1 )))
//     }

//     return levelAssets;    
// }