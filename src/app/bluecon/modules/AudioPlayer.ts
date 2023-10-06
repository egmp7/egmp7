import { Howl } from 'howler';

namespace AudioPlayer {
    let soundtrack: Howl;
    let canyonFall: Howl;
    let coin: Howl;
    let enemy: Howl;
    let flagPole: Howl;
    let jump: Howl;

    export function init() {
        soundtrack = new Howl({ src: ['/bluecon/soundtrack.wav'] });
        canyonFall = new Howl({ src: ['/bluecon/canyonFall.wav'] });
        coin = new Howl({ src: ['/bluecon/canyonFall.wav'] });
        enemy = new Howl({ src: ['/bluecon/enemy.wav'] });
        flagPole = new Howl({ src: ['/bluecon/flagPole.wav'] });
        jump = new Howl({ src: ['/bluecon/jump.wav'] });

        soundtrack.loop();
    }

    export function canyonFallPlay() {
        canyonFall.play();
    }

    export function coinPlay() {
        coin.play();
    }

    export function enemyPlay() {
        enemy.play();
    }

    export function flagPolePlay() {
        flagPole.play()
    }

    export function jumpPlay() {
        jump.play();
    }
}

export default AudioPlayer;
