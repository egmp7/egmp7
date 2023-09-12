import { Engine, Collision } from "matter-js";
import LevelOneBodies from "../levels/levelOneBodies";
import player from "../assets/playerBody"

class Physics {
    constructor() {
        this.engine = Engine.create();
        this.collisions = {
            ground: false,
            enemy: false,
            platform: false,
        }
    }

    run() {
        this.groundCollision(player.floorSensor, LevelOneBodies.grounds)
        this.platformCollision(player.floorSensor, LevelOneBodies.platforms)
        this.enemyCollision(player.body, LevelOneBodies.enemies)
    }

    groundCollision(playerFloorSensor, grounds) {
        this.collisions.ground = false
        grounds.forEach(ground => {
            if (Collision.collides(playerFloorSensor, ground))
                this.collisions.ground = true
        });
    }

    platformCollision(playerFloorSensor, platforms) {
        this.collisions.platform = false
        platforms.forEach(platform => {
            if (Collision.collides(playerFloorSensor, platform))
                this.collisions.platform = true
        });
    }

    enemyCollision(playerBody, enemies) {
        this.collisions.enemy = false
        enemies.forEach(enemy => {
            if (Collision.collides(playerBody, enemy))
                this.collisions.enemy = true
        });
    }

    isPlayerOnGround() {
        return this.collisions.ground || this.collisions.platform;
    }

    isEnemyCollision() {
        return this.collisions.enemy;
    }
}

export default (new Physics)