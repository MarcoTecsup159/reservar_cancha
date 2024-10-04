var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var rutas = require("./backend/rutas");

mongoose.connect("mongodb://localhost:27017/Lab09");
app.use(express.static(__dirname + "/angular"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

rutas.iniciar(__dirname);
rutas.principal(app);

app.listen(3000);
console.log("Listen on port 3000");
