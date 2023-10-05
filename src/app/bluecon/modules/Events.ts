import Loader from "./Loader";
import type { Buttons } from "../constants/buttons";
import { p5 } from "../components/Sketch";

interface Keyboard {
    left: boolean,
    right: boolean,
    jump: boolean,
}

namespace Events {

    let buttons: Buttons

    const keyboard: Keyboard = {
        left: false,
        right: false,
        jump: false,
    }

    export const control = {
        left: false,
        right: false,
        jump: false,
    }

    export function init() {
        buttons = Loader.getButtons();

        document.addEventListener('keydown', (event) => {
            if (event.code === "ArrowLeft") updateProperty(keyboard, "left", true);
            if (event.code === "ArrowRight") updateProperty(keyboard, "right", true);
            if (event.code === "Space") updateProperty(keyboard, "jump", true);

        });
        document.addEventListener('keyup', (event) => {
            if (event.code === "ArrowLeft") updateProperty(keyboard, "left", false);
            if (event.code === "ArrowRight") updateProperty(keyboard, "right", false);
            if (event.code === "Space") updateProperty(keyboard, "jump", false);

        });

        p5.mousePressed = () => {
            if(buttons.left.isClick()) buttons.left.setIsPressed(true);
            if(buttons.right.isClick()) buttons.right.setIsPressed(true);
            if(buttons.jump.isClick()) buttons.jump.setIsPressed(true);
        }

        p5.mouseReleased = () => {
            if(buttons.left.isClick()) buttons.left.setIsPressed(false);
            if(buttons.right.isClick()) buttons.right.setIsPressed(false);
            if(buttons.jump.isClick()) buttons.jump.setIsPressed(false);
        }

        // p5.touchStarted = () => {
        //     buttons.left.touchStarted();
        //     buttons.right.touchStarted();
        //     buttons.jump.touchStarted();
        // }
    }

    export function run() {
        updateProperty(control, "left", buttons.left.isPressed || keyboard.left);
        updateProperty(control, "right", buttons.right.isPressed || keyboard.right);
        updateProperty(control, "jump", buttons.jump.isPressed || keyboard.jump);
    }

    function updateProperty<T, K extends keyof T>(obj: T, property: K, value: T[K]): void {
        obj[property] = value;
    }
}

export default Events;