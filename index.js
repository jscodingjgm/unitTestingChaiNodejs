const express = require('express');
const app = express();
const routes = require('./routes/');

require('./db/db'); // make db connection

const port = process.env.PORT;

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
