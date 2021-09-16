const express = require("express");
const studentController = require("./../controllers/studentController");
const router = express.Router();

router
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.createStudent);

router
  .route("/:id")
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
