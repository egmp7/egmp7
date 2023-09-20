import LevelOneAssets from "../levels/levelOneAssets";

export default class Render {
    constructor() { }
    run(p5) {
        for (const assets in LevelOneAssets) {
            if (!Array.isArray(LevelOneAssets[assets])) throw "Not an array"
            LevelOneAssets[assets].forEach((group) => {
                group.run(p5)
            })
        }
    }
}