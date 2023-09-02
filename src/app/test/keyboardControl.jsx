import { useEffect } from 'react';

export default function KeyboardControl({player}) {
    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, {repeat:false})
        document.addEventListener('keyup', detectKeyUp)
    }, [])

    const detectKeyDown = (e) => {
        if (e.keyCode === 39 ) player.setIsRight(true)
        if (e.keyCode === 37 ) player.setIsLeft(true)
        if (e.keyCode === 32 ) player.setIsJumping(true)
        
    }
    const detectKeyUp = (e) => {
        if (e.keyCode === 39 ) player.setIsRight(false)
        if (e.keyCode === 37 ) player.setIsLeft(false)
        if (e.keyCode === 32 ) player.setIsJumping(false)
    }
}