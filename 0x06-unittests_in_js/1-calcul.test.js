describe("calculateNumber with type argument", function () {
    const calculateNumber = require("./1-calcul.js");
    const assert = require('assert');
    it("check SUM", function() {
        const result = calculateNumber('SUM', 1, 3);
        assert.strictEqual(result, 4);
    });
    it("check SUM and rounding ", function() {
        const result = calculateNumber('SUM', 1.2, 3.6);
        assert.strictEqual(result, 5);
    });
    it("check SUBTRACT", function() {
        const result = calculateNumber('SUBTRACT', 1, 3);
        assert.strictEqual(result, -2);
    });
    it("check SUBTRACT and rounding ", function() {
        const result = calculateNumber('SUBTRACT', 1.2, 3.6);
        assert.strictEqual(result, -3);
    });
    it("check DIVIDE", function() {
        const result = calculateNumber('DIVIDE', 1, 3);
        assert.strictEqual(result, 0.3333333333333333);
    });
    it("check DIVIDE by 0", function() {
        const result = calculateNumber('DIVIDE', 1, 0);
        assert.strictEqual(result, 'Error');
    });
    it("check DIVIDE and rounding ", function() {
        const result = calculateNumber('DIVIDE', 1.2, 3.6);
        assert.strictEqual(result, 0.25);
    });
});