import { Bodies, Body } from "matter-js"

const playerRectangle = { x: 50, y: 200, w: 36, h: 82 }

const playerBody = Bodies.rectangle(
    playerRectangle.x,
    playerRectangle.y,
    playerRectangle.w,
    playerRectangle.h);

const playerFloorSensor = Bodies.circle(
    playerRectangle.x,
    playerRectangle.y + playerRectangle.h / 2,
    2,  // radius
    { isSensor: true });

const playerMain = Body.create({
    parts: [playerBody, playerFloorSensor],
    friction: 0,
    inertia: Infinity
});

const player = {
    main: playerMain,
    body: playerBody,
    floorSensor:playerFloorSensor
};

export default player;

