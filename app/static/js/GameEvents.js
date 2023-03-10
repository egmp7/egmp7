const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const SPACE_KEY = 32;
const ENTER_KEY = 13;

function keyPressed(){

    if(keyCode == LEFT_KEY)
        player.setIsLeft( true );
    
    else if(keyCode == RIGHT_KEY)
        player.setIsRight( true );

    else if(keyCode == SPACE_KEY)
        player.jump();
                
}
function keyReleased(){

    if(keyCode == LEFT_KEY)
        player.setIsLeft( false );

    if(keyCode == RIGHT_KEY)
        player.setIsRight( false );
    
    // else if(keyCode == ENTER_KEY && lives==0)
    // {
    //     lives =3;
    //     initLevel1();
    // }
    // else if(keyCode ==ENTER_KEY && flag_pole.isReached)
    // {
    //      initLevel1();    
    // }
    else if(keyCode == ENTER_KEY && gameStart == false)
    {
        gameStart = true;
        initLevel1();
        // Make Full Screen CODE
        // elem = document.getElementById ("defaultCanvas0");
        // elem.requestFullscreen();

        //sounds.soundtrack.loop();
    }    
}


function mouseClicked() {
    var sound = new Howl({
    
        src: [ './static/GameAudios/canyonFall.wav']
    
    });
    sound.play();
}