import {Bodies, Body, Vector} from "matter-js";
import { drawVertices } from "../resources/utilities";
import control from "../globals/control";

export default class Player
{
    constructor(body)

    {
        this.x=0;
        this.y=0;
        this.isLeft = false;
        this.isRight = false;
        this.isFalling = false;
        this.isPlummeting = false;
        this.isJumping = false;   
        this.body = body

    }

    run = function (p5){
        drawVertices(p5, this.body.vertices)
        this.draw(p5,this.body.position);
        this.move();
        this.jump();
    }

    move = function (){
        const speed = 5;

        if( control.right ) Body.setVelocity(this.body, Vector.create( speed, this.body.velocity.y));
        if( control.left ) Body.setVelocity(this.body, Vector.create( -speed, this.body.velocity.y));
    }

    jump = function () {
        const speed = 10; 
        
        if( control.jump ) Body.setVelocity(this.body, Vector.create( this.body.velocity.x, -speed))
     }

    draw = function (p5,position)
    {

        if( this.isLeft && this.isFalling )
        {
            // add your jumping-left code
            //body
            p5.fill(0,0,200)
            p5.triangle(position.x-7,position.y-40,position.x+7,position.y-40,position.x,position.y-50);
            p5.rect(position.x-7,position.y-40,14,30);
            p5.ellipse(position.x-3,position.y-10,4,6);
            p5.ellipse(position.x+5,position.y-10,4,6);
            //hands
            p5.stroke(0,0,200);
            p5.strokeWeight(5);
            p5.line(position.x+7,position.y-30,position.x+11,position.y-23);
            p5.strokeWeight(1);
            p5.noStroke();
            //eyes
            p5.fill(255,255,102)
            p5.ellipse(position.x-3,position.y-37,5,7);
            
        }
        else if( this.isRight && this.isFalling )
        {
            // add your jumping-right code
            //body
            p5.fill(0,0,200)
            p5.triangle(position.x-7,position.y-40,position.x+7,position.y-40,position.x,position.y-50);
            p5.rect(position.x-7,position.y-40,14,30);
            p5.ellipse(position.x-3,position.y-10,4,6);
            p5.ellipse(position.x+5,position.y-10,4,6);
            //hands
            p5.stroke(0,0,200);
            p5.strokeWeight(5);
            p5.line(position.x-7,position.y-30,position.x-11,position.y-23);
            p5.strokeWeight(1);
            p5.noStroke();
            //eyes
            fill(255,255,102)
            ellipse(position.x+3,position.y-37,5,7);
            
        }
        // Move left
        else if( control.left )
        {
            p5.push();
            p5.translate(position.x,position.y);
            //body
            p5.fill(0,0,200)
            p5.triangle(-7,-15,+7,-15,0,-25);
            p5.rect(-7,-15,14,30);
            p5.ellipse(-3,15,4,6);
            p5.ellipse(+5,15,4,6);
            //eyes
            p5.fill(255,255,102)
            p5.ellipse(-3,-12,5,7)
            p5.pop();
        }
        // Move right
        else if( control.right )
        {
            p5.push();
            p5.translate(position.x,position.y);
            //body
            p5.fill(0,0,200)
            p5.triangle(-7, -15,+7, -15,0, -25);
            p5.rect(-7, -15,14,30);
            p5.ellipse(-3, 15,4,6);
            p5.ellipse(+5, 15,4,6);
            //eyes
            p5.fill(255,255,102)
            p5.ellipse(+3, -12,5,7);
            p5.pop();
            
        }
        else if( this.isFalling || this.isPlummeting)
        {
            // add your jumping facing forwards code
            //body
            p5.fill(0,0,200)
            p5.triangle(position.x-10,position.y-40,position.x+10,position.y-40,position.x,position.y-50);
            p5.rect(position.x-10,position.y-40,20,30);
            p5.ellipse(position.x-6,position.y-10,4,6);
            p5.ellipse(position.x+6,position.y-10,4,6);
            //hands
            p5.stroke(0,0,200);
            p5.strokeWeight(5);
            p5.line(position.x-10,position.y-35,position.x-16,position.y-42);
            p5.line(position.x+10,position.y-35,position.x+16,position.y-42);
            p5.strokeWeight(1);
            p5.noStroke();
            //eyes
            p5.fill(255,255,102)
            p5.ellipse(position.x-3,position.y-38,5,7)
            p5.ellipse(position.x+3,position.y-38,5,7)
        }
        // Standing front facing
        else
        {
            p5.push()
            p5.translate(position.x,position.y)
            
            // body
            p5.fill(0,0,200)
            p5.triangle(-10,-15,10,-15,0,-25);
            p5.rect(-10,-15,20,30);
            // legs
            p5.rect(-6,15,4,10);
            p5.rect(+2,15,4,10);
            // eyes
            p5.fill(255,255,102)
            p5.ellipse(-3,-13,5,7)
            p5.ellipse(+3,-13,5,7)
            p5.pop()
        }
    }

}
