import LevelOneAssets from "../levels/levelOneAssets";

export default class Render {
    constructor() {
        this.elements = []
        // Add assets to render class
        // for (const assets in LevelOneAssets) {
        //     this.add(LevelOneAssets[assets]);
        // }
        
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
        this.elements.forEach(element => {
            element.run(p5)
        });
    }
}