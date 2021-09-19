const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    unique: [true, "THE POLL ALREADY EXISTS"],
  },
  option: {
    type: [String],
  },
  author: {
    type: String,
  },
  voted: {
    type: [Boolean],
  },
  weight: {
    type: [Number],
  },
  pollid: {
    type: Number,
  },
});

const Poll = new mongoose.model("Poll", pollSchema);

module.exports = Poll;
