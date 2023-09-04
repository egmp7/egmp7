class Control{
    constructor(){
        this.left = false;
        this.right = false;
        this.jump = false;
    }

    setLeft(bool){
        this.left = bool
    }

    setRight(bool){
        this.right = bool
    }

    setJump(bool){
        this.jump = bool
    }
}

export default new Control