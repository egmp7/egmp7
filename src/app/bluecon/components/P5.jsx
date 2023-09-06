'use client';
import dynamic from 'next/dynamic'
import display from "../globals/display"
import Game from '../game';

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export default function P5() {
  const game = new Game();
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

  return (<Sketch setup={setup} draw={draw} />)
}