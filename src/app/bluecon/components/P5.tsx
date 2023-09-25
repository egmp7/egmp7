'use client';
import dynamic from 'next/dynamic'
//import Game from '../modules/Game';
import { setGlobalP5 } from '../globals/p5';
import Events from "../events/events"
import type P5Types from "p5";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export default function P5() {

  const canvasWidth = 960;
  const canvasHeight = 540;
  var events;

  const setup = (p5: P5Types, canvasParentRef: Element) => {
    const cnv = p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    cnv.style("position", "absolute");
    cnv.style("top", "0");
    cnv.style("left", "0");
    cnv.style("width", "100%");
    cnv.style("height", "100%");
    setGlobalP5(p5);

    //Game.init();
    events = new Events(cnv, p5);

  }

  const draw = (p5: P5Types) => {
    p5.noStroke();
    // run game
    //Game.run();
  };

  return (<Sketch setup={setup} draw={draw} />)
}