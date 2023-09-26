import Left from "../buttons/left"

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

    export const buttons={
        left: new Left({x:60,y:400},50)
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

    export function run(){
        buttons.left.run()
    }


}

export default Events;