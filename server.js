/* Express to run server and routes */
const express = require("express");

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static("website"));

const port = 8000;

/* Spin up the server*/
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

/* Empty JS object to act as endpoint for all routes */
const projectData = {};

// GET route => Respond with JS object when a GET request is made to the homepage
const baseURL = "http://api.openweathermap.org/data/2.5/forecast?id=";
const apiKey = "&appid=a26e439037a7723ccab5cff83466280d";
const zipCode = "524901";
app.get(baseURL + zipCode + apiKey, (req, res) => {
  res.send(projectData);
});

const weatherData = [];

app.get("/all", (req, res) => {
  res.send(weatherData);
  console.log(weatherData);
});

// POST route
app.post("/addData", (req, res) => {
  console.log(req.body);
  newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    feelings: req.body.feelings,
  };
  weatherData.push(newEntry);
  res.send(weatherData);
  console.log(weatherData);
});
