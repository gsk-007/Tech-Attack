const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  password: { type: Number },
  roll_no: { type: String },
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
