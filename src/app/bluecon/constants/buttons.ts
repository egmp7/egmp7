import Left from "../graphs/buttons/left";
import Right from "../graphs/buttons/right";
import Jump from "../graphs/buttons/jump";

import type Button from "../abstract/button"

export interface Buttons {
    left: Button,
    right: Button,
    jump: Button
}

const buttons: Buttons = {
    left: new Left({ x: 60, y: 480 }, 50),
    right: new Right({ x: 180, y: 480 }, 50),
    jump: new Jump({ x: 900, y: 480 }, 50)
}

export default buttons;