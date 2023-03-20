class Sounds 

{
    coin
    soundtrack;

    constructor()
    {

    }

    loadSounds = function ()
    {
        this.coin = new Howl({ src: [ './static/GameAudios/coin.wav' ]});
        this.soundtrack = new Howl({ src: [ './static/GameAudios/soundtrack.wav' ], 
                                    loop: true,
                                    volume: 0.5})
    }

    playCoin =  function ()
    {
        this.coin.play();
    }

    playSoundtrack = function ()
    {
        this.soundtrack.play();
    }
}