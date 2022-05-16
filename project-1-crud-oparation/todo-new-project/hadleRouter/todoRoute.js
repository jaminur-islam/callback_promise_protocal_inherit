const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("../schema/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    await newTodo.save();
    res.status(200).json({
      message: "post successfully",
    });
  } catch (err) {
    if (err) {
      res.status(500).json({
        error: "there war a server side error",
      });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const allTodo = await Todo.find({});
    res.status(200).json({ todo: allTodo });
  } catch (err) {
    res.status(500).json({ error: "there was a server side error" });
  }
});

router.delete("/", async (req, res) => {
  const title = req.body.title;
  try {
    await Todo.deleteOne({ title: title });
    res.status(200).json({ message: "delete successfully" });
  } catch (err) {
    res.send(500).json({ error: "there was a server side error" });
  }
});

router.put("/", async (req, res) => {
  const title = req.body.title;
  try {
    await Todo.updateMany(
      { title: title },
      {
        $set: {
          title: "mori zay",
        },
      }
    );
    res.status(200).json({ message: "update successfully" });
  } catch (err) {
    res.status(500).json({ error: "error" });
  }
});
module.exports = router;
