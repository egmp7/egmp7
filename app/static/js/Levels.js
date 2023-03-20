/**Last item must be a FlagPole */
class LevelOne
{
    constructor()
    {
        const GRID_Y = height / 24;
        const FLOOR = GRID_Y * 19

        this.clouds = [];
        this.grounds = []
        this.mountains = []
        this.trees = []
        this.platforms = [];
        this.collectables = [];
        this.enemies = []
        this.flagPole = new FlagPole ( 10000, FLOOR );

        for(var i = 0 ; i < 100 ; i++)
        {
            this.clouds.push(new Cloud( 100 * i * random( 0.7, 1 ), 200 * random( 0.25, 1 ), 90  * random( 0.6, 1 )))
        }

        this.grounds.push(new Ground( -500, 0 ,  500, height));
        this.grounds.push(new Ground( 0,    FLOOR , 1200, height - FLOOR ));
        this.grounds.push(new Ground( 1300, FLOOR , 400,  height - FLOOR ));
        this.grounds.push(new Ground( 1840, FLOOR , 660,  height - FLOOR ));
        this.grounds.push(new Ground( 3000, FLOOR , 800,  height - FLOOR ));
        this.grounds.push(new Ground( 3900, FLOOR , 100,  height - FLOOR ));
        this.grounds.push(new Ground( 4100, FLOOR , 900,  height - FLOOR ));
        this.grounds.push(new Ground( 5400, FLOOR , 1900, height - FLOOR ));
        this.grounds.push(new Ground( 8300, FLOOR , 1200, height - FLOOR ));
        this.grounds.push(new Ground( 9600, FLOOR , 2000, height - FLOOR ));

        this.mountains.push(new Mountain( 300,   FLOOR, 190 ));
        this.mountains.push(new Mountain( 900,   FLOOR, 170 ));
        this.mountains.push(new Mountain( 1400,  FLOOR, 200 ));
        this.mountains.push(new Mountain( 2000,  FLOOR, 300 ));
        this.mountains.push(new Mountain( 3200,  FLOOR, 280 ));
        this.mountains.push(new Mountain( 4500,  FLOOR, 350 ));
        this.mountains.push(new Mountain( 5800,  FLOOR, 250 ));
        this.mountains.push(new Mountain( 6500,  FLOOR, 200 ));
        this.mountains.push(new Mountain( 9000,  FLOOR, 370 ));
        this.mountains.push(new Mountain( 10300, FLOOR, 270 ));

        this.trees.push(new Tree( 100,   FLOOR ));
        this.trees.push(new Tree( 300,   FLOOR ));
        this.trees.push(new Tree( 800,   FLOOR ));
        this.trees.push(new Tree( 1100,  FLOOR ));
        this.trees.push(new Tree( 1900,  FLOOR ));
        this.trees.push(new Tree( 2100,  FLOOR ));
        this.trees.push(new Tree( 3400,  FLOOR ));
        this.trees.push(new Tree( 3600,  FLOOR ));
        this.trees.push(new Tree( 4200,  FLOOR ));
        this.trees.push(new Tree( 4700,  FLOOR ));
        this.trees.push(new Tree( 4800,  FLOOR ));
        this.trees.push(new Tree( 5570,  FLOOR ));
        this.trees.push(new Tree( 6800,  FLOOR ));
        this.trees.push(new Tree( 6400,  FLOOR ));
        this.trees.push(new Tree( 6200,  FLOOR ));
        this.trees.push(new Tree( 8500,  FLOOR ));
        this.trees.push(new Tree( 8900,  FLOOR ));
        this.trees.push(new Tree( 9100,  FLOOR ));
        this.trees.push(new Tree( 9300,  FLOOR ));
        this.trees.push(new Tree( 9800,  FLOOR ));
        this.trees.push(new Tree( 10500, FLOOR ));
        this.trees.push(new Tree( 10560, FLOOR ));
        this.trees.push(new Tree( 10760, FLOOR ));

        this.platforms.push(new Platform( 950,  FLOOR - GRID_Y * 2.5, 100 ));
        this.platforms.push(new Platform( 950,  FLOOR - GRID_Y * 5,   100 ));
        this.platforms.push(new Platform( 1600, FLOOR - GRID_Y * 2.5, 100 ));
        this.platforms.push(new Platform( 2450, FLOOR - GRID_Y * 2.5, 100 ));
        this.platforms.push(new Platform( 2530, FLOOR - GRID_Y * 5,   100 ));
        this.platforms.push(new Platform( 2600, FLOOR - GRID_Y * 7.5, 200 ));
        this.platforms.push(new Platform( 4980, FLOOR - GRID_Y * 2.5, 440 ));
        this.platforms.push(new Platform( 7250, FLOOR - GRID_Y * 2.5, 100 ));
        this.platforms.push(new Platform( 7350, FLOOR - GRID_Y * 5,   100 ));
        this.platforms.push(new Platform( 7450, FLOOR - GRID_Y * 7.5, 100 ));
        this.platforms.push(new Platform( 7600, FLOOR - GRID_Y * 7.5, 100 ));
        this.platforms.push(new Platform( 7750, FLOOR - GRID_Y * 7.5, 100 ));
        this.platforms.push(new Platform( 7900, FLOOR - GRID_Y * 7.5, 100 ));

        this.collectables.push(new Collectable( 150,  FLOOR ));
        this.collectables.push(new Collectable( 180,  FLOOR ));
        this.collectables.push(new Collectable( 210,  FLOOR ));
        this.collectables.push(new Collectable( 1000, FLOOR ));
        this.collectables.push(new Collectable( 1000, FLOOR - GRID_Y * 5 ));
        this.collectables.push(new Collectable( 2000, FLOOR ));
        this.collectables.push(new Collectable( 2160, FLOOR ));
        this.collectables.push(new Collectable( 2400, FLOOR ));
        this.collectables.push(new Collectable( 2350, FLOOR ));
        this.collectables.push(new Collectable( 2500, FLOOR - GRID_Y * 2.5 ));
        this.collectables.push(new Collectable( 2630, FLOOR - GRID_Y * 7.5 ));
        this.collectables.push(new Collectable( 2900, FLOOR - GRID_Y * 7.5 ));
        this.collectables.push(new Collectable( 2960, FLOOR - GRID_Y * 6.5 ));
        this.collectables.push(new Collectable( 3020, FLOOR - GRID_Y * 5.5 ));
        this.collectables.push(new Collectable( 3950, FLOOR ));
        this.collectables.push(new Collectable( 5240, FLOOR - GRID_Y * 2.5 ));
        this.collectables.push(new Collectable( 5290, FLOOR - GRID_Y * 2.5 ));
        this.collectables.push(new Collectable( 5340, FLOOR - GRID_Y * 2.5 ));
        this.collectables.push(new Collectable( 5840, FLOOR ));
        this.collectables.push(new Collectable( 5920, FLOOR -GRID_Y * 2 ));
        this.collectables.push(new Collectable( 6320, FLOOR ));
        this.collectables.push(new Collectable( 6400, FLOOR -GRID_Y * 2 ));
        this.collectables.push(new Collectable( 6480, FLOOR ));
        this.collectables.push(new Collectable( 7150, FLOOR ));
        this.collectables.push(new Collectable( 7500, FLOOR - GRID_Y * 7.5 ));
        this.collectables.push(new Collectable( 7650, FLOOR - GRID_Y * 7.5 ));
        this.collectables.push(new Collectable( 7800, FLOOR - GRID_Y * 7.5 ));
        this.collectables.push(new Collectable( 8100, FLOOR - GRID_Y * 6.5 ));
        this.collectables.push(new Collectable( 8160, FLOOR - GRID_Y * 5.5 ));
        this.collectables.push(new Collectable( 8220, FLOOR - GRID_Y * 4.5 )); 
        this.collectables.push(new Collectable( 8800, FLOOR ));
        this.collectables.push(new Collectable( 9740, FLOOR ));
        this.collectables.push(new Collectable( 9800, FLOOR ));
        this.collectables.push(new Collectable( 9860, FLOOR ));

        this.enemies.push(new Enemy(2000, FLOOR,                60));
        this.enemies.push(new Enemy(3300, FLOOR,                60));
        this.enemies.push(new Enemy(3400, FLOOR,                60));
        this.enemies.push(new Enemy(4000, FLOOR,                100));
        this.enemies.push(new Enemy(4020, FLOOR,                100));
        this.enemies.push(new Enemy(4040, FLOOR,                100));
        this.enemies.push(new Enemy(4060, FLOOR,                100));
        this.enemies.push(new Enemy(5180, FLOOR - GRID_Y * 2.5, 200));
        this.enemies.push(new Enemy(5800, FLOOR - GRID_Y * 2,   40));
        this.enemies.push(new Enemy(5880, FLOOR,                40));
        this.enemies.push(new Enemy(6300, FLOOR - GRID_Y * 2,   40));
        this.enemies.push(new Enemy(6380, FLOOR,                40));
        this.enemies.push(new Enemy(6460, FLOOR - GRID_Y * 2,   40));
        this.enemies.push(new Enemy(6520, FLOOR,                40));
        this.enemies.push(new Enemy(7750, FLOOR - GRID_Y * 7.5, 100));
        this.enemies.push(new Enemy(8700, FLOOR - GRID_Y * 2,   200));
        this.enemies.push(new Enemy(8790, FLOOR,                40));
    }
}

class TestLevel1
{
    constructor()
    {
        const GRID_Y = height / 24;
        const FLOOR = GRID_Y * 19

        this.clouds = [];
        this.grounds = []
        this.mountains = []
        this.trees = []
        this.platforms = [];
        this.collectables = [];
        this.enemies = []
        this.flagPole = new FlagPole ( 10000, FLOOR );
        // this.assets.push(new Ground( 0 ,      GRID_Y * 16 ,  width * 2, GRID_Y * 5));
        // this.assets.push(new Mountain(  300 , GRID_Y * 16,  190));
        // this.assets.push(new Tree ( 100,  GRID_Y * 16 ));
        // this.assets.push(new Collectable(  150   ,   GRID_Y * 16));
        // this.assets.push(new Enemy( 300, GRID_Y * 16, 60 ));
        // this.assets.push(new FlagPole ( 100, GRID_Y * 16 ))
        
        // this.assets.push(new Platform( 400 ,  GRID_Y * 14 , 100));
        // this.assets.push(new Platform( 400 ,  GRID_Y * 12 , 100));
        // this.assets.push(new Platform( 1000 ,  GRID_Y * 14 , 100));

    }     
}