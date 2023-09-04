import { Player } from "./assets/player"
import { Ground } from "./assets/ground"

export const level1 ={
    player : new Player(200, 100),

    grounds : [
        new Ground(0, 500, 200, 60),
        new Ground(270, 500, 200, 60)
    ]

} 