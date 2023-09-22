
export default abstract class Graph {

    abstract isVisible: boolean;

    constructor() {
    }

    abstract run(): void;

    setIsVisible(bool: boolean):void {
        this.isVisible = bool;
    }
}