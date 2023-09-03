'use client';

import dynamic from 'next/dynamic'
import { Howl, Howler } from 'howler';
import {
  Engine,
  Bodies,
  Composite,
  Collision,
} from "matter-js";
import { Player } from './player.js'
import TouchControl from './touchControl.jsx';
import { drawVertices } from './utilities.js';
import KeyboardControl from './keyboardControl.jsx'
const Sketch = dynamic(() => import("react-p5"), { ssr: false });

var engine;
var ground;
let width = 500;
let height = 500;
var ground;
var player = new Player(200,100) ;
var sound = new Howl({
  src: ['/tictoc.mp3']
});

export default function Game() {

  const setup = (p5, canvasParentRef) => {

    // CANVAS
    p5.createCanvas(width, height).parent(canvasParentRef)
    // MATTER
    // create an engine
    engine = Engine.create();
    // create two boxes and a ground
    ground = Bodies.rectangle(250, 500, width, 60, { isStatic: true });
    // add all of the bodies to the world
    Composite.add(engine.world, [player.physics, ground]);
    
  }

  const draw = (p5) => {
    p5.background(255, 130, 20)
    Engine.update(engine);

    drawVertices(p5, player.physics.vertices)
    drawVertices(p5, ground.vertices)
    player.run(p5)
    if(Collision.collides(player.physics,ground)) console.log("ground collision")
  };

  return (
    <>
      <div className="relative">
        <TouchControl name={"left"} player={player}/>
        <TouchControl name={"right"} player={player}/>
        <TouchControl name={"jump"} player={player}/>
        <KeyboardControl player={player} />
        <Sketch setup={setup} draw={draw} />
      </div>
    </>);
}