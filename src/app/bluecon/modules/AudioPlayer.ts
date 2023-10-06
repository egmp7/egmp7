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

        soundtrack = new Howl({ src: ['/bluecon/soundtrack.wav'], loop: true });
        canyonFall = new Howl({ src: ['/bluecon/canyonFall.wav'] });
        coin = new Howl({ src: ['/bluecon/canyonFall.wav'] });
        enemy = new Howl({ src: ['/bluecon/enemy.wav'] });
        flagPole = new Howl({ src: ['/bluecon/flagPole.wav'] });
        jump = new Howl({ src: ['/bluecon/jump.wav'] });

        soundtrack.play();
        isInitialized = true;
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
