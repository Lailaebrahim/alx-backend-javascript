const app = require('./api');
const chai = require('chai')
const expect = chai.expect
const request = require('request')

describe('app', function () {

    it('test index web page', function (done) {
        request.get('http://localhost:7865/', (err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});