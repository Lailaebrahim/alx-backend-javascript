const express = require('express');
const app = express();
const Port = 7865;

app.get('/', (_, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (_, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});

app.listen(Port, () => {
    console.log(`API available on localhost port ${Port}`);
});

module.exports = app;