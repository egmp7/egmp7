"use client";
import { useEffect, useRef } from "react";
import P5 from "p5";
import Game from "../modules/Game";
import Events from "../modules/Events";

export let p5: P5;

export default function Sketch() {

    const canvasRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        p5 = new P5((p:P5) => {

            p.setup = () => {
                if(!canvasRef.current) return;
                const cnv = p.createCanvas(960, 540).parent(canvasRef.current);
                cnv.style("position", "absolute");
                cnv.style("top", "0");
                cnv.style("left", "0");
                cnv.style("width", "100%");
                cnv.style("height", "100%");
                p.noStroke();
                Game.init();
                cnv.mousePressed(() => { })
            };
            
            p.draw = () => { Game.run(); };

            Events.initEvents(p);

        });
        return () => { p5.remove(); };
    }, []);

    return <div ref={canvasRef} className="relative max-h-full pb-[56.25%] max-m-[43.75%]" ></div>;
}