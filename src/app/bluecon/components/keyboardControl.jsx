'use client';
import { useEffect } from 'react';
import tools from '../globals/tools';

export default function KeyboardControl() {
    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, {repeat:false})
        document.addEventListener('keyup', detectKeyUp)
    }, [])

    const detectKeyDown = (e) => {
        if (e.keyCode === 37 ) tools.control.setLeft(true)
        if (e.keyCode === 39 ) tools.control.setRight(true)
        if (e.keyCode === 32 ) tools.control.setJump(true)
        
    }
    const detectKeyUp = (e) => {
        if (e.keyCode === 37 ) tools.control.setLeft(false)
        if (e.keyCode === 39 ) tools.control.setRight(false)
        if (e.keyCode === 32 ) tools.control.setJump(false)
    }
}