function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const Utils = require('./utils.js');
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;