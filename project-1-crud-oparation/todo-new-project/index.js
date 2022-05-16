const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const todoRouter = require("./hadleRouter/todoRoute");
//middleware
app.use(express.json());
// call router
app.use("/todo", todoRouter);

// mongodb connect
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect("mongodb://localhost/newTodo", config)
  .then(() => console.log("connect successfully"))
  .catch((err) => console.log(err));

const errorHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
