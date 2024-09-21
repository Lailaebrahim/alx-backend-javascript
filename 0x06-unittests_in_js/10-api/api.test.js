const expect = require('chai').expect
const request = require('request')

describe('API integration test', function () {

    describe("Test suite for index route", () => {
        it('GET /', (done) => {
            request.get('http://localhost:7865/', (_err, res, body) => {
                expect(res.statusCode).to.be.equal(200);
                expect(body).to.be.equal('Welcome to the payment system');
                done();
            });
        });
    })

    describe("Test suite for cart/: route", () => {
        it('Get /cart/:id', (done) => {
            request.get('http://localhost:7865/cart/12', (_err, res, body) => {
                expect(res.statusCode).to.be.equal(200);
                expect(body).to.be.equal('Payment methods for cart 12');
                done();
            });
        });

        it('Get /cart/:id incorrect id', (done) => {
            request.get('http://localhost:7865/cart/thisisnotanumber', (_err, res, _body) => {
                expect(res.statusCode).to.be.equal(404);
                done();
            });
        });
    })

    describe("Test Suite for login route", () => {
        it('POST /login', (done) => {
            request.post('http://localhost:7865/login', { json: { userName: 'Laila' } }, (_err, res, body) => {
                expect(res.statusCode).to.be.equal(200);
                expect(body).to.be.equal('Welcome Laila');
                done();
            });
        });
    })

    describe("Test suite for available_payments route", () => {
        it('GET /available_payments', (done) => {
            request.get('http://localhost:7865/available_payments', (_err, res, body) => {
                expect(res.statusCode).to.be.equal(200);
                expect(body).to.be.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
                done();
            });
        })
    });
});