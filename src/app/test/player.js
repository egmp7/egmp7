import {Bodies, Body, Vector} from "matter-js";
import { drawVertices } from "./utilities";

export class Player
{
    constructor(x,y)

    {
        this.x=x;
        this.y=y;
        this.isLeft = false;
        this.isRight = false;
        this.isFalling = false;
        this.isPlummeting = false;
        this.isJumping = false;   
        this.matter = Bodies.rectangle(x, y, 20, 50,{inertia: Infinity});

    }

    setX = function ( value )
    {
        this.x = value;
    }

    setY = function ( value )
    {
        this.y = value;
    }

    setIsLeft =function(bool)
    {
        this.isLeft = bool;
    }

    setIsRight = function (bool)
    {
        this.isRight = bool;
    }

    setIsFalling =function(bool)
    {
        this.isFalling = bool;
    }

    setIsJumping = function(bool){
        this.isJumping = bool;
    }

    run = function (p5){
        drawVertices(p5, this.matter.vertices)
        this.draw(p5,this.matter.position);
        this.move();
        this.jump();
    }

    move = function (){
        const speed = 5;

        if( this.isRight ) Body.setVelocity(this.matter, Vector.create( speed, this.matter.velocity.y));
        if( this.isLeft ) Body.setVelocity(this.matter, Vector.create( -speed, this.matter.velocity.y));
    }

    jump = function () {
        const speed = 10; 
        
        if( this.isJumping ) Body.setVelocity(this.matter, Vector.create( this.matter.velocity.x, -speed))
     }

    draw = function (p5,position)
    {
        // this.isLeft = PLAYER_CONTROLLER.getMoveLeft()
        // this.isRight = PLAYER_CONTROLLER.getMoveRight()
        // this.isFalling = PLAYER_CONTROLLER.checkIfJumping()

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
        else if( this.isLeft )
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
        else if( this.isRight )
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