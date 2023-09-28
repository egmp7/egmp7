import Loader from "./Loader";
import type { Buttons } from "../constants/buttons";

namespace Events {
    
    let buttons: Buttons
    
    const keyboardController = {
        left: false,
        right: false,
        jump: false
    }
    
    export const control = {
        left: false,
        right: false,
        jump: false,
    }

    export const keys = {
        left: 37,
        right: 39,
        space: 32,
        enter: 13,
    }

    export function init() {
        buttons = Loader.getButtons();
    }

    export function run() {
        setControlLeft(buttons.left.isPressed || keyboardController.left);
        setControlRight(buttons.right.isPressed || keyboardController.right);
        setControlJump(buttons.jump.isPressed || keyboardController.jump);
    }

    function setControlLeft(bool: boolean): void {
        control.left = bool;
    }

    function setControlRight(bool: boolean): void {
        control.right = bool;
    }

    function setControlJump(bool: boolean): void {
        control.jump = bool;
    }

    export function setKeyboardControllerLeft(bool: boolean): void {
        keyboardController.left = bool
    }

    export function setKeyboardControllerRight(bool: boolean): void {
        keyboardController.right = bool
    }

    export function setKeyboardControllerJump(bool: boolean): void {
        keyboardController.jump = bool
    }
}

export default Events;