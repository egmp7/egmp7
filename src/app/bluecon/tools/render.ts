import type Assets from "../types/assets";

export default class Render {
    assets: Assets | null;

    constructor() {
        this.assets = null;
    }
    run() {
        if (!this.assets) return;
        this.runAssets(this.assets)
    }

    runAssets(assets: Assets) {
        for (const groupAsset in assets) {
            assets[groupAsset as keyof Assets].forEach((asset) => {
                if (asset.isVisible) asset.run()
            })
        }
    }

    setAssets(assets: Assets) {
        this.assets = assets;
    }
}