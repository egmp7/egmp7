class Sounds 

{
    canyonFall;
    coin;
    enemy;
    flagPole;
    jump;
    soundtrack;

    constructor()
    {

    }

    loadSounds = function ()
    {
        this.canyonFall = new Howl({ src: [ './static/GameAudios/canyonFall.wav' ]});
        this.coin = new Howl({ src: [ './static/GameAudios/coin.wav' ]});
        this.enemy = new Howl({ src: [ './static/GameAudios/enemy.wav' ]});
        this.flagPole = new Howl({ src: [ './static/GameAudios/flagPole.wav' ]});        
        this.jump = new Howl({ src: [ './static/GameAudios/jump.wav' ]});
        this.soundtrack = new Howl({ src: [ './static/GameAudios/soundtrack.wav' ], 
                                    loop: true,
                                    volume: 0.5})
    }
}