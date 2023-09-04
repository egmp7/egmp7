'use client';
import dynamic from 'next/dynamic'
import { Engine,Composite,Collision, } from "matter-js";
import { Player } from './player.js'
import { Ground } from './ground.js';
import {Enemy} from './enemy.js'
import TouchControl from './touchControl.jsx';
import KeyboardControl from './keyboardControl.jsx'
import { createWorld } from './createWorld.js';
import { level1 } from './level1.js';
const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const engine = Engine.create();
let canvasWidth = 500;
let canvasHeight = 500;
// const ground = new Ground(250,500,canvasWidth,60);
// const player = new Player(200,100);
// const enemy1 = new Enemy(300,400,150, engine.gravity);
Composite.add(engine.world, createWorld(level1));


export default function Game() {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef)
  }

  const draw = (p5) => {
    p5.background(255);
    Engine.update(engine);
    level1.player.run(p5)
    level1.grounds.forEach(ground => {
      ground.run(p5)
    });
    // player.run(p5)
    // ground.run(p5)
    // enemy1.run(p5)
    level1.grounds.forEach(ground => {
      if(Collision.collides(level1.player.matter,ground.matter)) console.log("ground collision")
    });
    //if(Collision.collides(player.matter,ground.matter)) console.log("ground collision")
  };

  return (
    <>
      <div className="relative">
        <TouchControl name={"left"} player={level1.player}/>
        <TouchControl name={"right"} player={level1.player}/>
        <TouchControl name={"jump"} player={level1.player}/>
        <KeyboardControl player={level1.player} />
        <Sketch setup={setup} draw={draw} />
      </div>
    </>);
}