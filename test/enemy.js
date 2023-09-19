const chai = require('chai');
const assert = chai.assert;

describe("Set of test for an Enemy", () => {
    describe("SwitchSpeed function", () => {

        var x = 5;
        var range = 10;
        var speed = 6;

        it("should not accept negative range", () => {
            assert.throws(() => { switchSpeed(x, -range) }, "error: range must not be less than 0")
        })

        it("should change the speed to -6 if xEnemyCurrent is bigger than xEnemyInit + range", () => {
            switchSpeed(x, range, 16)
            assert.equal(speed, -6)
        })

        it("should change the speed to 6 if xEnemyCurrent is less than xEnemyInit", () => {
            switchSpeed(x, range, 4)
            assert.equal(speed, 6)
        })

        function switchSpeed(xEnemyInit, range, xEnemyCurrent) {
            if (range < 0) throw "error: range must not be less than 0";
            if (xEnemyCurrent > xEnemyInit + range) speed = -6;
            if (xEnemyCurrent < xEnemyInit) speed = 6;
        }

    })
})

