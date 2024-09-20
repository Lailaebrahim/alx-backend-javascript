describe("calculateNumber", function () {
    const calculateNumber = require("./0-calcul.js");
    const assert = require('assert');
    it("check whole numbers", function() {
        const result = calculateNumber(1, 3);
        assert.strictEqual(result, 4);
    });
    it("check one float round up", function() {
        const result = calculateNumber(1, 3.7);
        assert.strictEqual(result, 5);
    });
    it("check two floats one round up and one down", function() {
        const result = calculateNumber(1.2, 3.7);
        assert.strictEqual(result, 5);
    });
    it("check two floats round up", function() {
        const result = calculateNumber(1.5, 3.7);
        assert.strictEqual(result, 6);
    });
    it("check two floats round down", function() {
        const result = calculateNumber(1.4, 3.2);
        assert.strictEqual(result, 4);
    });
});