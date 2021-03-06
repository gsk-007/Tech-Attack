const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  password: { type: String },
  roll_no: { type: String, unique: [true, "THIS ROLL NUMBER ALREADY EXISTS"] },
  age: { type: Number },
  gender: { type: String },
  email: { type: String },
  description: {
    type: String,
    default:
      "I am a student of IIIT Bhubaneshwar pursuing Btech under IT branch.",
  },
  achievement: [
    {
      type: String,
      default: "",
    },
  ],
  skills: [{ type: String }],
  img_url: {
    type: String,
    default: "./../../static/imgs/student_info_resource/male_img.png",
  },
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
