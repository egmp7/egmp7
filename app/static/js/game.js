function setup()
{
    createCanvas($( window ).width(), $( window ).height());
}

function draw()
{
    background(220);
    ellipse(50,50,50,50);
}
function mouseClicked() {
    var sound = new Howl({
    
        src: [ './static/GameAudios/canyonFall.wav']
    
    });
    sound.play();
}