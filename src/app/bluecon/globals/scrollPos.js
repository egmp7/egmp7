import player from "../assets/playerBody"
import LevelOneBodies from "../levels/levelOneBodies"
import {Body} from "matter-js" 

class ScrollPos {
    constructor(){
        this.position={x:0,y:0}
    }
    run(){
        this.checkPosition(player.main.position,this.position)
    }

    checkPosition(playerPosition,scrollPos){
        const xRightLimit = 400;
        const xLeftLimit = 50;
        const speed = 6;
        if (playerPosition.x > xRightLimit){
            Body.setPosition(player.main,{x:xRightLimit, y:player.main.position.y})
            this.moveBodies(LevelOneBodies.grounds, - speed)
            this.moveBodies(LevelOneBodies.enemies, - speed)
        }
        if (playerPosition.x < xLeftLimit){
            Body.setPosition(player.main,{x:xLeftLimit, y:player.main.position.y})
            this.moveBodies(LevelOneBodies.grounds, speed)
            this.moveBodies(LevelOneBodies.enemies, speed)
        }
            
    }

    moveBodies(bodies, speed){
        
        bodies.forEach(body => {
            Body.setPosition(body,{x:body.position.x + speed , y:body.position.y })
        });
    }
}

export default ScrollPos;