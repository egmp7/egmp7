'use client';

import dynamic from 'next/dynamic'
import {
  Engine,
  Bodies,
  Composite,
} from "matter-js";

const Sketch = dynamic(()=> import('react-p5'),{ssr:false})

var engine;
var ground;

let width = 500;
let height = 500;
var boxA;
var boxB;
var ground;

const  drawVertices = function(p5,vertices){
  p5.fill(255,0,0)
  p5.beginShape();
  for (var i = 0 ; i < vertices.length ; i++)
  {
      p5.vertex( vertices[i].x, vertices[i].y );
  }
  p5.endShape(p5.CENTER);
}

export default function Game(){

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    // create an engine
    engine = Engine.create();
    // create two boxes and a ground
    boxA = Bodies.rectangle(100, 200, 80, 80);
    boxB = Bodies.rectangle(400, 50, 80, 80);
    ground = Bodies.rectangle(250, 500, width, 60, { isStatic: true });
    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);
  }

  const draw = (p5) => {
    Engine.update(engine);
    p5.background(255, 130, 20)
    drawVertices(p5,boxA.vertices)
    drawVertices(p5,boxB.vertices)
    drawVertices(p5,ground.vertices)
  };

  return (<Sketch setup={setup} draw={draw} />);
}