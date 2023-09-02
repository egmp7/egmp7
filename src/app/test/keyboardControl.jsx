import { useEffect } from 'react';

export default function KeyboardControl() {
    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, {repeat:false})
        document.addEventListener('keyup', detectKeyUp)
    }, [])

    const detectKeyDown = (e) => {
        console.log(e)
    }
    const detectKeyUp = (e) => {
        
        console.log(e)
    }
}