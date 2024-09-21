const sendPaymentRequestToApi = require('./4-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils.js');

describe("sendPaymentRequestToApi", function () {
    let consoleSpy;

    // create a spy on console
    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
    });

    // restore the spy after each test
    afterEach(function () {
        consoleSpy.restore();
    });

    it("first test of console log", function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });

    it("second test of console log", function () {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    });

});