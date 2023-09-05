class Display {
    constructor(){
        const windowWidth = window.innerWidth
        this.scale;
        console.log(windowWidth)
        
        if ( windowWidth <= 440 ) this.scale = 0.3;
        else if ( windowWidth <= 768 ) this.scale = 0.4;
        else if ( windowWidth <= 1024 ) this.scale = 0.5;
        else if ( windowWidth <= 1280 ) this.scale = 0.6;
        else this.scale = 1;
    }
}

export default new Display