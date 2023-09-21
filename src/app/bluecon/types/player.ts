import Matter from "matter-js";

export default interface Player{
    main: Matter.Body;
    body: Matter.Body;
    floorSensor: Matter.Body;
}