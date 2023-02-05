const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');

const app = express();
const port = 3333;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}))
routes(app);

app.listen(port, () => console.log(`Server run on port ${ port }!`));