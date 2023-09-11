import { Engine, Collision } from "matter-js";
import LevelOneBodies from "../levels/levelOneBodies";
import player from "../assets/playerBody"

class Physics {
    constructor() {
        this.engine = Engine.create();
        this.collisions = {
            ground: false,
            enemy: false
        }
    }

    run() {
        this.groundCollision(player.floorSensor, LevelOneBodies.grounds)
        this.enemyCollision(player.body, LevelOneBodies.enemies)

    }

    groundCollision(playerFloorSensor, grounds) {
        this.collisions.ground = false
        grounds.forEach(ground => {
            if (Collision.collides(playerFloorSensor, ground))
                this.collisions.ground = true
        });
    }

    enemyCollision(playerBody, enemies) {
        this.collisions.enemy = true
        enemies.forEach(enemy => {
            if (Collision.collides(playerBody, enemy))
                //this.collisions.enemy = true
                console.log("enemy collision")
        });
    }

    isPlayerOnGround() {
        return this.collisions.ground;
    }

    isEnemyCollision(){
        return this.collisions.enemy;
    }
}

export default (new Physics)