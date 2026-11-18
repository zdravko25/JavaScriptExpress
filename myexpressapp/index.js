// Import the Express.js library
const express = require("express");

// Create an instance of an Express application
const app = new express();

// Define the port number
const port = 8080;

// Route to handle requests to the root path "/"
app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/about", (req, res) => {
  return res.send("About page");
});

app.get("/contact", (req, res) => {
  return res.send("Contact page");
});

app.get("/services", (req, res) => {
  return res.send("Products page");
});

// Start the server and listen on the specified port
let server = app.listen(port, () => {
  console.log("Listening at http://localhost:" + port);
});
