import { Howl } from 'howler';

namespace AudioPlayer {
    let isInitialized: boolean = false;

    let soundtrack: Howl;
    let canyonFall: Howl;
    let coin: Howl;
    let enemy: Howl;
    let flagPole: Howl;
    let jump: Howl;

    export function init() {
        if (isInitialized) return;

        soundtrack = new Howl({ src: ['/bluecon/soundtrack.wav'], loop: true, volume: 0.5, html5: true });
        canyonFall = new Howl({ src: ['/bluecon/canyonFall.wav'] });
        coin = new Howl({ src: ['/bluecon/coin.wav'], volume:0.25 });
        enemy = new Howl({ src: ['/bluecon/enemy.wav'] });
        flagPole = new Howl({ src: ['/bluecon/flagPole.wav'] });
        jump = new Howl({ src: ['/bluecon/jump.wav'], volume:0.4 });

        soundtrack.play();
        isInitialized = true;
        //Howler.volume(0);
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
