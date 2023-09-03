'use client';
import dynamic from 'next/dynamic'
import { Engine,Composite,Collision, } from "matter-js";
import { Player } from './player.js'
import { Ground } from './ground.js';
import TouchControl from './touchControl.jsx';
import KeyboardControl from './keyboardControl.jsx'
const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const engine = Engine.create();
let canvasWidth = 500;
let canvasHeight = 500;
const ground = new Ground(250,500,canvasWidth,60);
const player = new Player(200,100) ;
Composite.add(engine.world, [player.matter, ground.matter]);

export default function Game() {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef)
  }

  const draw = (p5) => {
    p5.background(255);
    Engine.update(engine);
    player.run(p5)
    ground.run(p5)
    if(Collision.collides(player.matter,ground.matter)) console.log("ground collision")
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