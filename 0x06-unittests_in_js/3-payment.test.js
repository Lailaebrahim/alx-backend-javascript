const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils.js').Utils;

describe("sendPaymentRequestToApi", function () {
    let UtilsSpy;

    // create a spy on property calculateNumber of Utils module
    beforeEach(function () {
        UtilsSpy = sinon.spy(Utils);
    });

    // restore the spy after each test
    afterEach(function () {
        UtilsSpy.calculateNumber.restore();
    });

    // check number of calling the internal method on calling the external one
    it("check if the function was called once", function() {
        sendPaymentRequestToApi(100, 20);
        expect(UtilsSpy.calculateNumber.callCount).to.be.equal(1);
    });

    // check the arguments the internal method is called with
    it("check called with arguments", function () {
        sendPaymentRequestToApi(100, 20);
        expect(UtilsSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    });

    // check the return value of the internal function
    it("check return value", function () {
        sendPaymentRequestToApi(100, 20);
        expect(UtilsSpy.calculateNumber.returned(120)).to.be.true;
    });

});