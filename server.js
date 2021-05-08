// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

// Arrow Function Method
// const server = app.listen(port, () => {
//   console.log(`running on localhost: ${port}`);
// });

// respond with "projectData" when a GET request is made to the homepage
app.get("/add", function (req, res) {
  res.send(projectData);
});

// setup a basic POST route in the server side code
// First, Create an array to hold data
const data = [];

// Then, create post() with a url path and a callback function
app.post("/add", function (req, res) {
  // res.send("POST received");
  console.log(req.body);
  data.push(req.body);
  console.log(data);
});

// Arrow function
// app.get("/", (request, response) => {
//   response.send(projectData);
// });

// let data = request.body;
// projectData["intelligence"] = data.intelligence;
// projectData.push(request.body);
