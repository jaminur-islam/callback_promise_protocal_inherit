const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
require("./db.js/db");

const todoHandler = require("./routeHandler/todoHandler");

// middle wear
app.use(express.json());

const errorHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

// cal todo router
app.use("/todo", todoHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

const myEmitter = new EventEmitter();

function c1() {
  console.log("an event occurred!");
}

function c2() {
  console.log("yet another event occurred!");
}

myEmitter.on("eventOne", c1);
myEmitter.on("eventOne", c2);

console.log(myEmitter);
