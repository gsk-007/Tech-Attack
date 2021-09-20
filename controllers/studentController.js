const Student = require("./../models/studentModel");

//==============  HANDLER FUNCTION TO CREATE STUDENT ============== //

exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};

//============== HANDLER FUNCTION TO GET ALL STUDENTS DATA ============== //

exports.getAllStudents = async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).json({
      status: "success",
      size: studentsData.length,
      data: {
        studentsData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

//============== HANDLER FUNCTION TO GET A UNIQUE STUDENT DATA ============== //

exports.getStudent = async (req, res) => {
  try {
    const sigleStudent = await Student.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        sigleStudent,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

//============== HANDLER FUNCTION TO UPDATE STUDENT DATA ============== //

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        updatedStudent,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

//============== HANDLER FUNCTION TO DELETE STUDENT DATA ============== //

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
