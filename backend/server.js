const express = require('express');
const bodyParser = require("body-parser");
const APP = express();
const cors = require("cors");
const SERVER = require('./schema/schema');
const PORT = 4000;

// adding middleware - cors
APP.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
APP.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
APP.use(bodyParser.json());


SERVER.applyMiddleware({
  app: APP
});


APP.get('/', (req, res) => {
  res.json({"message": "Graph QL Server started"});
});

APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});

