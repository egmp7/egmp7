import Loader from "./Loader";
import type { Buttons } from "../constants/buttons";

interface Keyboard {
    left: boolean,
    right: boolean,
    jump: boolean,
}

namespace Events {

    let buttons: Buttons
    let touchTimer:any;

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
            event.preventDefault();
            if (event.code === "ArrowLeft") updateProperty(keyboard, "left", true);
            if (event.code === "ArrowRight") updateProperty(keyboard, "right", true);
            if (event.code === "Space") updateProperty(keyboard, "jump", true);

        }, { passive: false });
        document.addEventListener('keyup', (event) => {
            event.preventDefault();
            if (event.code === "ArrowLeft") updateProperty(keyboard, "left", false);
            if (event.code === "ArrowRight") updateProperty(keyboard, "right", false);
            if (event.code === "Space") updateProperty(keyboard, "jump", false);

        }, { passive: false });

        document.addEventListener('touchstart', function (e) {
            touchTimer = setTimeout(function() {
                // This code executes after a long hold (adjust the duration as needed)
                e.preventDefault();
                // Add your custom long hold handling code here
              }, 1000); // Adjust the duration (in milliseconds) as needed
        });

        document.addEventListener('touchmove', function () {
        });

        document.addEventListener('touchend', function () {
            clearTimeout(touchTimer);
        });

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