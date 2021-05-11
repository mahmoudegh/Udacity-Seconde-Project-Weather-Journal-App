/* Empty JS object to act as endpoint for all routes */
const projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;

/* Spin up the server*/
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// GET route => Respond with JS object when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send(projectData);
});

// POST route
const data = [];

app.post('/', (req, res) => {
  data.push(req.body);
  res.send(projectData);
  console.log(data);
  console.log(projectData);
});
