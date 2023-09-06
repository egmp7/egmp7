'use client';
import dynamic from 'next/dynamic'
import TouchControl from './components/TouchControl.jsx';
import KeyboardControl from './components/KeyboardControl.jsx'
import display from "./globals/display.js"
import Game from './game.js';

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const game = new Game();

export default function GameSketch() {

  const scale = display.scale;
  const canvasWidth = 1600 * scale;
  const canvasHeight = 900 * scale;

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    cnv.style("position", "absolute");
    cnv.style("top", "0");
    cnv.style("left", "0");
    cnv.style("width", "100%");
    cnv.style("height", "100%");
  }

  const draw = (p5) => {
    game.run(p5)
  };

  return (
    <>
      <div className="relative pb-[56.25%] max-m-[43.75%] h-0">
        <Sketch setup={setup} draw={draw} />
        <TouchControl name={"left"} />
        <TouchControl name={"right"} />
        <TouchControl name={"jump"} />
        <KeyboardControl />
      </div>
    </>);
}