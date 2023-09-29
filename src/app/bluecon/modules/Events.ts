import Loader from "./Loader";
import type { Buttons } from "../constants/buttons";

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

        document.addEventListener('DOMContentLoaded', function () {
            var isScrolling = false;

            document.addEventListener('touchstart', function (e) {
                if (!isScrolling) {
                    e.preventDefault();
                }
            });

            document.addEventListener('touchmove', function () {
                isScrolling = true;
            });

            document.addEventListener('touchend', function () {
                isScrolling = false;
            });
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