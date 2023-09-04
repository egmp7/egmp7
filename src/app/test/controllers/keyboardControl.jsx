import { useEffect } from 'react';
import control from './control';

export default function KeyboardControl() {
    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, {repeat:false})
        document.addEventListener('keyup', detectKeyUp)
    }, [])

    const detectKeyDown = (e) => {
        if (e.keyCode === 37 ) control.setLeft(true)
        if (e.keyCode === 39 ) control.setRight(true)
        if (e.keyCode === 32 ) control.setJump(true)
        
    }
    const detectKeyUp = (e) => {
        if (e.keyCode === 37 ) control.setLeft(false)
        if (e.keyCode === 39 ) control.setRight(false)
        if (e.keyCode === 32 ) control.setJump(false)
    }
}