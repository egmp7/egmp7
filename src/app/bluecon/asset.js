import display from "./globals/display";
import { Body } from "matter-js"

export default class Asset {
    constructor(body) {
        this.body = body
        Body.setMass(body,body.mass * display.scale )
        this.scaleBody(body, display.scale)
        this.scalePosition(body, display.scale)
    }

    /**
     * Scale the size of the body depending on the screen size
     * @param {Body} body 
     * @param {number} scale 
     */
    scaleBody(body, scale) {

        Body.scale(body, scale, scale)
    }

    /**
     * Corrects the position of the body for different screens
     * @param {Body} body 
     * @param {number} scale 
     */
    scalePosition(body, scale) {
        const position = {
            x: body.position.x * scale,
            y: body.position.y * scale
        }
        Body.setPosition(body, position)
    }

    /**
     * Corrects the velocity on X for different display rations
     * @param {Vector} velocity 
     */
    setXVelocity(velocity) {
        const scaledVelocity = {
            x: velocity.x * display.scale,
            y: velocity.y
        }
        Body.setVelocity(this.body, scaledVelocity)
    }

    setYVelocity(velocity){
        const scaledVelocity = {
            x: velocity.x,
            y: velocity.y
        }
        Body.setVelocity(this.body, scaledVelocity)
    }

    setYForce(force){
        console.log(this.body.mass)
        const scaledForce = {
            x: force.x,
            y: force.y / display.scale
        }
        Body.applyForce(this.body,this.body.position,scaledForce)
    }
}