const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils.js').Utils;

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

    it("check if the function was called once", function() {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledOnce).to.be.true;
    });
    it("check called with arguments", function () {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    });
    
});