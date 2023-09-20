const chai = require('chai');
const assert = chai.assert;

describe("Set of test for an Enemy", () => {
    describe("doubleJump function", () => {

        var jumps = 2;
        var jReset = false;

        it("should doubleJump only when four conditions are true", () => {
            assert.isTrue(doubleJump(true, true, true, 1), true)
        })

        it("jumps should be 2 when not pressing the jump button and being on the ground", () => {
            checkJumps(true, false, jumps);
            checkJumps(false, true, jumps);
            assert.equal(jumps, 2);
        })

        it("jumps should be 1 when jumping from the ground", () => {
            checkJumps(true, false, jumps);
            checkJumps(true, true, jumps);
            assert.equal(jumps, 1);
        })

        it("jReset should be true when not pressing jump button and player is in the air", () => {
            checkJumpReset(true,true,jReset)
            assert.isTrue(jReset);
        })

        it("jReset should be false when pressing jump button and player is in the air", () => {
            checkJumpReset(false,true,jReset)
            assert.isFalse(jReset);
        })

        it("jReset should be false when not pressing jump button and player is not in the air", () => {
            checkJumpReset(true,false,jReset)
            assert.isFalse(jReset);
        })

        it("jumps should be 0 when doing a double jump", () => {
            checkJumps(true, true, jumps)
            checkJumpReset(true,true,jReset)
            doubleJump(true, true, jReset, jumps)
            assert.equal(jumps, 0)
        })

        it("should not double jump if jump reset is false", () => {
            checkJumps(true, true, jumps)
            checkJumpReset(true,false,jReset)
            doubleJump(true, true, jReset, jumps)
            assert.isFalse(doubleJump(true, true, jReset, jumps))
        })

        it("should doubleJump only once", () => {
            checkJumps(true, true, jumps)
            checkJumpReset(true,true,jReset)
            doubleJump(true, true, jumps)
            var test = doubleJump(true, true, jReset, jumps)
            assert.isFalse(test)
        })

        /**
         * Double jump, sets the variable to avoid more jumps
         * @param {Boolean} isJumping 
         * @param {Boolean} isInAir 
         * @param {number} jumpNumber 
         * @returns Boolean
         */
        function doubleJump(isJumping, isInAir, jumpReset, jumpNumber) {
            if (isJumping && isInAir && jumpReset && jumpNumber == 1) {
                jumps = 0;
                return true;
            }
            return false;
        }

        /**
         * Checks the number of jumps from player
         * @param {Boolean} isJumping 
         * @param {Boolean} isOnGround 
         * @param {number} jumpNumber 
         */
        function checkJumps(isJumping, isOnGround, jumpNumber) {
            if (!isJumping && isOnGround && jumpNumber != 2) jumps = 2;
            if (isJumping && isOnGround && jumpNumber == 2) jumps -= 1;
        }

        /**
         * Check if jump has been reset
         * @param {Boolean} isNotJumping 
         * @param {Boolean} isInAir 
         * @param {Boolean} jumpReset 
         */
        function checkJumpReset(isNotJumping, isInAir, jumpReset) {
            jReset = false;
            if (isNotJumping && isInAir && !jumpReset) jReset = true;
        }

    })
})