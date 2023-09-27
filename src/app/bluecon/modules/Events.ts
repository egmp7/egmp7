import Left from "../buttons/left";
import Right from "../buttons/right";
import Jump from "../buttons/jump";

namespace Events {

    const buttons = {
        left: new Left({ x: 60, y: 480 }, 50),
        right: new Right({ x: 180, y: 480 }, 50),
        jump: new Jump({ x: 900, y: 480 }, 50)
    }

    const keyboardController = {
        left: false,
        right: false,
        jump: false
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

    export const keys = {
        left: 37,
        right: 39,
        space: 32,
        enter: 13,
    }

    export const control = {
        left: false,
        right: false,
        jump: false,
    }

    export function run() {
        buttons.left.run();
        buttons.right.run();
        buttons.jump.run();

        setControlLeft(buttons.left.isPressed || keyboardController.left);
        setControlRight(buttons.right.isPressed || keyboardController.right);
        setControlJump(buttons.jump.isPressed || keyboardController.jump);

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