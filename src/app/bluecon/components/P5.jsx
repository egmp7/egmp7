'use client';
import dynamic from 'next/dynamic'
import Game from '../game';

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export default function P5() {
  const game = new Game();
  const canvasWidth = 960;
  const canvasHeight = 540;

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    cnv.style("position", "absolute");
    cnv.style("top", "0");
    cnv.style("left", "0");
    cnv.style("width", "100%");
    cnv.style("height", "100%");
  }

  const draw = (p5) => {
    p5.noStroke()
    // run game
    game.run(p5)
  };

  return (<Sketch setup={setup} draw={draw} />)
}