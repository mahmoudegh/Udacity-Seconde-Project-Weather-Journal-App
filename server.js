// Empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Select Port
const port = 8000;

// Spin up the server
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// GET route => Respond with JS object when a GET request is made to the homepage
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=a26e439037a7723ccab5cff83466280d&units=metric';

app.get(baseURL + apiKey, (req, res) => {
  res.send(projectData);
});

// Get Rout
app.get('/all', (req, res) => {
  res.send(projectData);
});

// POST route
app.post('/addData', (req, res) => {
  newEntry = {
    date: req.body.date,
    city: req.body.city,
    temp: req.body.temp,
    feelings: req.body.feelings,
  };
  projectData = newEntry;
  res.send(projectData);
});
