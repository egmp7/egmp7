import type Assets from "../types/assets";
import type P5 from "p5"

export default class Render {
    assets: Assets | null;

    constructor() {
        this.assets = null;
    }
    run(p5: P5) {
        if (!this.assets) return;
        this.runAssets(p5, this.assets)
    }

    runAssets(p5: P5, assets: Assets) {
        for (const groupAsset in assets) {
            assets[groupAsset as keyof Assets ].forEach((asset) => {
                if (asset.isVisible) asset.run(p5)
            })
        }
    }

    setAssets(assets: Assets) {
        this.assets = assets;
    }
}