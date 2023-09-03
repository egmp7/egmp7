import { Howl, Howler } from 'howler';

var sound = new Howl({
    src: ['/tictoc.mp3']
  });

sound.play()