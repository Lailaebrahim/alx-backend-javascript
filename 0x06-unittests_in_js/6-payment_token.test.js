const getPaymentTokenFromAPI = require('./6-payment_token.js');
const chai = require('chai');
const expect = chai.expect;

describe("getPaymentTokenFromAPI", function () {
    it("getPaymentTokenFromAPI with true", function (done) {
        getPaymentTokenFromAPI(true)
            .then(function (value) {
                expect(value).to.eql({ data: 'Successful response from the API' });
                done();
            })
            .catch(function (error) {
                done(error);
            });
    });
});