class Render {
    constructor() {
        this.elements = []
    }
    /**
     * Add elements for rendering with p5
     * @param {asset Classes} elements 
     */
    add(elements) {
        if (!Array.isArray(elements)) this.elements.push(elements)
        else elements.forEach(element => {this.elements.push(element)});
    }
    run(p5) {
        p5.background(255);
        this.elements.forEach(element => {
            element.run(p5)
        });
    }
}

export default new Render