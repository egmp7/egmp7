const chai = require('chai');
const assert = chai.assert;

describe("Set of test for an Enemy", () => {
    describe("SwitchSpeed function", () => {

        var x = 5;
        var range = 10;
        var speed = 6;
        var velocity = speed

        it("should not accept negative range", () => {
            assert.throws(() => { switchVelocity(x, -range) }, "error: range must not be less than 0")
        })

        it("should change the velocity to -6 if xEnemyCurrent is bigger than xEnemyInit + range", () => {
            switchVelocity(x, range, 16);
            switchVelocity(x, range, 17);
            assert.equal(velocity, -6)
        })

        it("should change the velocity to 6 if xEnemyCurrent is less than xEnemyInit", () => {
            switchVelocity(x, range, 4);
            switchVelocity(x, range, 3);
            assert.equal(velocity, 6)
        })


        /**
         * Switches the speed when the enemy passes a threshold
         * @param {number} xEnemyInit 
         * @param {number} range 
         * @param {number} xEnemyCurrent 
         */
        function switchVelocity(xEnemyInit, range, xEnemyCurrent) {
            if (range < 0) throw "error: range must not be less than 0";
            if (xEnemyCurrent > xEnemyInit + range) velocity = -speed;
            if (xEnemyCurrent < xEnemyInit) velocity = speed;
        }

    })
})

