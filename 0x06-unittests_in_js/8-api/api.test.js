const expect = require('chai').expect
const request = require('request')

describe('API integration test', function () {

    it('GET /', (done)  => {
        request.get('http://localhost:7865/', (err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});