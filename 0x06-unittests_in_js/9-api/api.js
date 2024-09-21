const express = require('express');
const app = express();
const Port = 7865;

app.get('/', (_, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (_, res) => {
    if (typeof (id) == typeof (1)) {
        res.send(`Payment methods for cart ${id}`);
    }
    else {
        res.status(404).send('Invalid cart id');
    }
});

app.listen(Port, () => {
    console.log(`API available on localhost port ${Port}`);
});

module.exports = app;