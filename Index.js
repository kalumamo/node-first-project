"use strict";
const path = require("path");
const path = require("path");
const express = require("express");
const { request } = require("http");
const app = new express();
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "pages/index.html"));
});
app.listen(4000, () => {
  console.log("app listening on port 4000");
});
/*const app = express();
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "index.html"));
});
app.get("/about", (request, response) => {
  response.sendFile(path.resolve(__dirname, "about.html"));
});
app.get("/contact", (request, response) => {
  response.sendFile(path.resolve(__dirname, "contact.html"));
});
app.get("/", (request, response) => {
  response.send({
    name: "mamo",
  });
});
app.get("/about", (request, response) => {
  response.send({
    name: "kalu",
  });
});
app.listen(3000, () => {
  console.log("Applistining on port 3000");
});
/*const { response } = require("express");
const http = require("http");
const fs = require("fs");
const aboutpage = fs.readFileSync("about.html");
const contactpage = fs.readFileSync("contact.html");
const homepage = fs.readFileSync("index.html");
const server = http.createServer((request, response) => {
  //console.log(request.url);
  if (request.url === "/about") {
    return response.end(" the about page");
  } else if (request.url === "/contact") {
    return response.end("the contact page");
  } else if (request.url === "/home") {
    return response.end(" the home page");
  } else {
    response.writeHead(404);
    response.end("the page was not found");
  }
});
server.listen(3000);?*/
