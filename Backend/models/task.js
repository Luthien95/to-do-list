const Joi = require("joi");
const mongoose = require("mongoose");

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    description: {
      type: String,
      required: false,
      trim: true,
      minlength: 5,
      maxlength: 250,
    },
    type: {
      type: String,
      required: true,
    },
  })
);

function validateMovie(task) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(5).max(250).required(),
    type: Joi.string().min(0).required(),
  });

  return schema.validate(task);
}

exports.Task = Task;
exports.validate = validateMovie;
