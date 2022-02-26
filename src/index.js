const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);
app.listen(9999, () => console.log('Server running at http://localhost:9999'));