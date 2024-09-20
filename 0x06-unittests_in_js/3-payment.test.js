const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils.js');

describe("sendPaymentRequestToApi", function () {
    let calculateNumberSpy;

    // create a spy on property calculateNumber of Utils module
    beforeEach(function () {
        calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    });

    // restore the spy after each test
    afterEach(function () {
        calculateNumberSpy.restore();
    });

    // check number of calling the internal method on calling the external one
    it("check if the function was called once", function() {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledOnce).to.be.true;
    });

    // check the arguments the internal method is called with
    it("check called with arguments", function () {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    });

    // check the return value of the internal function
    it("check return value", function () {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.returned(120)).to.be.true;
    });

});