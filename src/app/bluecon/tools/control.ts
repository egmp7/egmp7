export default class Control {
    left: boolean;
    right: boolean;
    jump: boolean;
    constructor() {
        this.left = false;
        this.right = false;
        this.jump = false;
    }

    setLeft(bool: boolean) {
        this.left = bool
    }

    setRight(bool: boolean) {
        this.right = bool
    }

    setJump(bool: boolean) {
        this.jump = bool
    }
}