const mongoose = require("mongoose");

// mongodb connect
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect("mongodb://localhost/tudos", config)
  .then(() => console.log("connecting successful"))
  .catch((err) => console.log(err));
