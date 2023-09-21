import type Matter from "matter-js";

export default interface Bodies{
    grounds: Matter.Body[];
    enemies: Matter.Body[];
    platforms: Matter.Body[];
}