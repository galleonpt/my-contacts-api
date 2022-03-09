const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  console.log(error);
  console.log(error);
  response.sendStatus(500);
});

app.listen(9999, () => console.log('Server running at http://localhost:9999'));
