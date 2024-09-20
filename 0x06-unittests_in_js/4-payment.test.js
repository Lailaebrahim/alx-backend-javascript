const sendPaymentRequestToApi = require('./4-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils.js');

describe("sendPaymentRequestToApi", function () {
    let consoleSpy;
    let calculateNumberStub;

    // create a stub on property calculateNumber of Utils module
    // create a spy on console
    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    });

    // restore the spy and stub after each test
    afterEach(function () {
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    // check number of calling the internal method on calling the external one
    it("check if the function was called once", function() {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledOnce).to.be.true;
    });

    // check the arguments the internal method is called with
    it("check called with arguments", function () {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    });

    // check the logged value from sendPaymentRequestToApi after mocking return of internal method
    it("check return value", function () {
        calculateNumberStub.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });

});