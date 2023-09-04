import { Bodies } from "matter-js"

const groundOptions = { isStatic: true }
const enemiesOptions = { inertia: Infinity }

const LevelOne ={

    player : Bodies.rectangle(100, 200, 20, 50,{inertia: Infinity}),

    grounds : [
        Bodies.rectangle(0,500,200,60, groundOptions ),
        Bodies.rectangle(270,500,200,60, groundOptions )
    ],

    enemies : [
       
        Bodies.rectangle(270, 300, 20, 44, enemiesOptions )
    ]

} 

export default LevelOne;