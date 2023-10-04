import { Howl } from 'howler';

namespace AudioPlayer {
    let soundtrack: Howl ;
    
    export function init (){
        soundtrack = new Howl({ src: ['/tictoc.mp3'] });
        soundtrack.play();

    }

}

export default AudioPlayer;
