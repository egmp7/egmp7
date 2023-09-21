export default class Render {
    constructor() {
        this.assets;
    }
    run(p5) {
        this.runAssets(p5, this.assets)
    }

    runAssets(p5, assets) {
        for (const groupAsset in assets) {
            if (!Array.isArray(assets[groupAsset])) throw "Not an array"
            assets[groupAsset].forEach((asset) => {
                asset.run(p5)
            })
        }
    }

    setAssets(assets){
        this.assets = assets;
    }
}