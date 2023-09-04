'use client';
import dynamic from 'next/dynamic'
import TouchControl from './controllers/touchControl.jsx';
import KeyboardControl from './controllers/keyboardControl.jsx'
import { Game } from './game.js';
const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const game = new Game();

export default function GameSketch() {

  const canvasWidth = 500;
  const canvasHeight = 500; 

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef)
  }

  const draw = (p5) => {
    game.run(p5)
  };

  return (
    <>
      <div className="relative">
        <TouchControl name={"left"} player={game.player} />
        <TouchControl name={"right"} player={game.player} />
        <TouchControl name={"jump"} player={game.player} />
        <KeyboardControl player={game.player} />
        <Sketch setup={setup} draw={draw} />
      </div>
    </>);
}