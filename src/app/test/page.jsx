'use client';

import dynamic from 'next/dynamic'
import { Howl, Howler } from 'howler';
import {
  Engine,
  Bodies,
  Composite,
  Body,
  Vector
} from "matter-js";

// Dynamic import
const Sketch = dynamic(() => import("react-p5"), { ssr: false });

var engine;
var ground;

let width = 500;
let height = 500;
var boxA;
var boxB;
var ground;
var cnv;
var sound = new Howl({
  src: ['/tictoc.mp3']
});

const drawVertices = function (p5, vertices) {
  cnv.fill(255, 0, 0)
  p5.beginShape();
  for (var i = 0; i < vertices.length; i++) {
    p5.vertex(vertices[i].x, vertices[i].y);
  }
  p5.endShape(p5.CENTER);
}

export default function Game() {

  const setup = (p5, canvasParentRef) => {

    // CANVAS
    cnv = p5.createCanvas(width, height).parent(canvasParentRef)

    // MATTER
    // create an engine
    engine = Engine.create();
    // create two boxes and a ground
    boxA = Bodies.rectangle(100, 200, 80, 80);
    boxB = Bodies.rectangle(400, 50, 80, 80);
    ground = Bodies.rectangle(250, 500, width, 60, { isStatic: true });
    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);

    // EVENTS
    cnv.mousePressed((event) => {
      Body.setVelocity(boxA, Vector.create(1, 0))
      
    })
    cnv.touchStarted((event) => {
      sound.play();
      Body.setVelocity(boxB, Vector.create(1, 0))
    })
  }

  const draw = (p5) => {
    Engine.update(engine);
    cnv.background(255, 130, 20)
    drawVertices(p5, boxA.vertices)
    drawVertices(p5, boxB.vertices)
    drawVertices(p5, ground.vertices)
  };

  return (<Sketch setup={setup} draw={draw} />);
}