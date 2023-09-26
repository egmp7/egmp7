namespace Events {

    export const keys ={
        left: 37,
        right: 39,
        space: 32,
        enter: 13,
    }

    export const control={
        left: false,
        right: false,
        jump: false,
    }

    export function setControlLeft(bool: boolean):void{
        control.left = bool;
    }

    export function setControlRight(bool: boolean):void{
        control.right = bool;
    }

    export function setControlJump(bool: boolean):void{
        control.jump = bool;
    }


}

export default Events;