const Joi = require("joi");
const { Task, validate } = require("../models/task");
const express = require("express");
const router = express();
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  task = await task.save();
  res.send(task);
});

async function createTask() {
  const task = new Task({
    title: "Terminator",
    description: "",
    status: "",
  });

  const result = await task.save();
  console.log(result);
}

createTask();

module.exports = router;
