const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("../schema/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);

// get active
router.get("/active", async (req, res) => {
  try {
    const todo = new Todo();
    const data = await todo.findActive("inactive");
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
});

// get all active data
router.post("/allData", async (req, res) => {
  try {
    const data = req.body;
    // const todo = new Todo();
    await Todo.saveAll(data);
    res.status(200).json({ message: "insertMany successfully" });
  } catch (err) {
    res.status(500).json({ error: "there was a server site error" });
  }
});

// post single data
router.post("/singleData", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const todo = new Todo();
    await todo.saveData(data);
    res.status(200).json({ message: "successfully insert the document" });
  } catch (err) {
    res.status(500).json({ error: "there are an server side error" });
  }
});

//===========================get =====================get===========================//
router.get("/", async (req, res) => {
  try {
    const result = await Todo.find({})
      // .select({ _id: 0, title: 0 })
      .limit(2)
      .skip(4);
    res.status(200).json({
      message: "todo insert successfully",
      length: result.length,
      result,
    });
  } catch (err) {
    res.status(500).json({ error: "there was server site error" });
  }
});

//==================================post single Data===========================================//
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save((err) => {
    if (err) {
      res.status(500).json({ error: "not insert severSite error" });
    } else {
      res.status(200).json({ message: "insert successfully" });
    }
  });
});

//==================================== post many data======================================//
router.post("/all", async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({ message: "insertMany successfully" });
  } catch (err) {
    res.status(500).json({ error: "there were server site error" });
  }
});

//============================== delete one =====================================//
router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const result = await Todo.findByIdAndDelete(
      {
        _id: "620cbf27414683a7f218c5ec",
      },
      { new: true, useFindModify: false }
    );
    res.status(200).json({ message: "delete successfully" });
    console.log(result);
  } catch (err) {
    res.status(500).json({ error: "there were server site error" });
  }
});

module.exports = router;

//============================================Put on or many ================================//
//===== update kora data paoyar jonno [Todo.findByIdAndUpdate({filter} , {updateDoc}, {new: true} then callback)]=======================================================================================//
router.put("/:id", async (req, res) => {
  try {
    const result = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { title: "111111" } },
      // useFindModify false koredibo ebong new true mane holo noton ta dekhte cai result//
      { new: true, useFindModify: false }
    );
    res.status(200).json({ error: "update successfully" });
    console.log(result);
  } catch (err) {
    res.status(500).json({ message: "There was a Server Side Error!" });
  }
});

//==========================try catch use on stack overflow================================//
/* async (req, res) => {
  try {
    await Todo.updateOne({ _id: req.params.id }, { $set: { status: "inactive"}});
    res.status(200).json({message: "Todo Was Update successfully!"});
  } catch (error) {
    res.status(500).json({error:'There was a Server Side Error!'})
  }
} */

//============================== delete =====================================//
//================================ delete select data =============================================//
// Site.deleteMany({ userUID: uid, id: { $in: [10, 2, 3, 5]}}, function(err) {})
/* router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Todo.deleteMany({
      userUID: uid,
      _id: { $in: ["620cb91cdfcc3ecf6f9151e4", "620cb91bdfcc3ecf6f9151e2"] },
    });
    res.status(200).json({ message: "delete successfully" });
  } catch (err) {
    res.status(500).json({ error: "there were server site error" });
    
  }
}); */
