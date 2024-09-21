const express = require('express');
const app = express();
const port = 1245;
const path = process.argv[2];
const routes = require('./routes/index');

routes(app);

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

export default app;
module.exports = app;