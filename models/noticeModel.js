const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Notice = new mongoose.model("Notice", noticeSchema);

module.exports = Notice;
