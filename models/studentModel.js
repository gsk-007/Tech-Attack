const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  password: { type: String },
  roll_no: { type: String },
  age: { type: Number },
  gender: { type: String },
  email: { type: String },
  description: {
    type: String,
    default:
      "I am a student of IIIT Bhubaneshwar pursuing Btech under IT branch.",
  },
  achievement: {
    type: String,
    default: "",
  },
  skills: { type: String },
  img_url: {
    type: String,
    default: "./../../static/imgs/student_info_resource/male_img.png",
  },
});

const Student = new mongoose.model("Student", studentSchema);

// const tempStudent = new Student({
//   name: "Roman",
//   password: 1234,
//   roll_no: "B455657",
// });

// tempStudent
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = Student;
