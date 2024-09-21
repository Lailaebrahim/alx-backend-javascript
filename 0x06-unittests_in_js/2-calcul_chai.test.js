const calculateNumber = require("./2-calcul_chai.js");
const chai = require('chai');
const expect = chai.expect;

describe("calculateNumber with type argument", function () {
    it("check SUM", function() {
        const result = calculateNumber('SUM', 1, 3);
        expect(result).to.eq(4);
    });
    it("check SUM and rounding ", function() {
        const result = calculateNumber('SUM', 1.2, 3.6);
        expect(result).to.eq(5);
    });
    it("check SUBTRACT", function() {
        const result = calculateNumber('SUBTRACT', 1, 3);
        expect(result).to.eq(-2);
    });
    it("check SUBTRACT and rounding ", function() {
        const result = calculateNumber('SUBTRACT', 1.2, 3.6);
        expect(result).to.eq(-3);
    });
    it("check DIVIDE", function() {
        const result = calculateNumber('DIVIDE', 1, 3);
        expect(result).to.eq(0.3333333333333333);
    });
    it("check DIVIDE by 0", function() {
        const result = calculateNumber('DIVIDE', 1, 0);
        expect(result).to.eq('Error');
    });
    it("check DIVIDE and rounding ", function() {
        const result = calculateNumber('DIVIDE', 1.2, 3.6);
        expect(result).to.eq(0.25);
    });
});