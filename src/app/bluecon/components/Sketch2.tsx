"use client";

import { useEffect, useRef } from "react";
import P5 from "p5";
import Game from "../modules/Game";
import Events from "../modules/Events";

export let p5: P5;

const canvasWidth = 960;
const canvasHeight = 540;

export default function Sketch2(props: any) {

    const canvasRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        p5 = new P5((p) => {
            p.setup = () => {
                const cnv = p.createCanvas(canvasWidth, canvasHeight).parent(canvasRef.current);
                cnv.style("position", "absolute");
                cnv.style("top", "0");
                cnv.style("left", "0");
                cnv.style("width", "100%");
                cnv.style("height", "100%");
                p.noStroke();

                Game.init();

                cnv.mousePressed(() => {
                    console.log("Clicked on the canvas. Event:", p.keyCode)
                })

                p.keyPressed = function () {
                    if (p.keyCode === Events.keys.left) Events.setControlLeft(true);
                    if (p.keyCode === Events.keys.right) Events.setControlRight(true);
                    if (p.keyCode === Events.keys.space) Events.setControlJump(true);
                }
                
                p.keyReleased = function (){
                    if (p.keyCode === Events.keys.left) Events.setControlLeft(false);
                    if (p.keyCode === Events.keys.right) Events.setControlRight(false);
                    if (p.keyCode === Events.keys.space) Events.setControlJump(false);
                }
            };

            p.draw = () => {
                Game.run();
            };
        });

        return () => {
            p5.remove();
        };
    }, []);

    return <div ref={canvasRef}></div>;

}