const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  description: "string",
  status: {
    type: "string",
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = todoSchema;
