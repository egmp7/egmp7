'use client';
import dynamic from 'next/dynamic'
import Game from '../game';
import {setGlobalP5, P5Globals , canvas} from '../globals/p5';

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export default function P5() {
  
  const canvasWidth = 960;
  const canvasHeight = 540;
  var p5Globals;
  var game;

  const setup = (p5, canvasParentRef) => {
    const cnv = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    cnv.style("position", "absolute");
    cnv.style("top", "0");
    cnv.style("left", "0");
    cnv.style("width", "100%");
    cnv.style("height", "100%");
    setGlobalP5(p5);

    game = new Game();
    p5Globals = new P5Globals(cnv);
    
    
  }

  const draw = (p5) => {
    p5.noStroke();
    // run game
    game.run();
  };

  return (<Sketch setup={setup} draw={draw} />)
}