const express = require('express');
const app = express();
const Port = 7865;

app.get('/', (_, res) => {
    res.send('Welcome to the payment system');
});

app.listen(Port, () => {
    console.log(`API available on localhost port ${Port}`);
});

module.exports = app;