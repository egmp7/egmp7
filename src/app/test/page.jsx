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

import { Player } from './player.js'

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

var player;

export default function Game() {

  const setup = (p5, canvasParentRef) => {

    // CANVAS
    cnv = p5.createCanvas(width, height).parent(canvasParentRef)
    // MATTER
    // create an engine
    engine = Engine.create();
    // create two boxes and a ground
    ground = Bodies.rectangle(250, 500, width, 60, { isStatic: true });
    player = new Player(200, 100);
    // add all of the bodies to the world
    Composite.add(engine.world, [player.physics, ground]);

  }

  const draw = (p5) => {
    cnv.background(255, 130, 20)
    Engine.update(engine);

    drawVertices(p5, player.physics.vertices)
    drawVertices(p5, ground.vertices)
    player.run(p5)
  };

  function touchStart() {
    console.log("you touch starts")
    Body.setVelocity(player.physics, Vector.create(1, 0))
  }

  function touchEnd() {
    console.log("you touch ends")
    Body.setVelocity(player.physics, Vector.create(-1, 0))
  }

  return (
    <>
      <Sketch setup={setup} draw={draw} />
      <button onTouchStart={e => touchStart()} onTouchEnd={e => touchEnd()}>Tap me</button>
    </>);
}

// Utility
const drawVertices = function (p5, vertices) {
  cnv.fill(255, 0, 0)
  p5.beginShape();
  for (var i = 0; i < vertices.length; i++) {
    p5.vertex(vertices[i].x, vertices[i].y);
  }
  p5.endShape();
}