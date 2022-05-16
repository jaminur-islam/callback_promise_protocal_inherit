const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: "String",
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

todoSchema.methods = {
  findActive: function (val) {
    return mongoose.model("Todo").find({ status: val });
  },
  saveData: function (data) {
    const todo = new mongoose.model("Todo");
    return todo(data).save();
  },
};

todoSchema.statics = {
  saveAll: function (data) {
    const Todo = mongoose.model("Todo");
    return Todo.insertMany(data);
  },
};

module.exports = todoSchema;
