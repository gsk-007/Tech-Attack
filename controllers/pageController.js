const path = require("path");

const Student = require("./../models/studentModel");
exports.studentView = async (req, res) => {
  try {
    const stdData = await Student.find();
    // Sorting in alphabetic order
    stdData.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    res.render("./ejsFiles/std.ejs", { stdData });
  } catch (err) {
    console.log(err);
    res.send("SOMETHING WENT WRONG");
  }
};

exports.signUp = async (req, res) => {
  try {
    const formData = req.body;
    formData.age = Number(formData.age);
    formData.roll_no = formData.roll_no.toUpperCase();
    let errObj = {};
    if (!(formData.roll_no >= "B420001" && formData.roll_no <= "B420067")) {
      // throw "FORM ONLY VALID FOR IT STUDENT BATCH 2020-2024";
      errObj = {
        message: "FORM ONLY VALID FOR IT STUDENT BATCH 2020-2024",
        who: "USER ERROR",
      };
      res.render("./ejsFiles/errorPage.ejs", { errObj });
    } else if (formData.email.indexOf("@iiit-bh.ac.in") <= -1) {
      // throw "PLEASE ENTER A VALID COLLEGE ID";
      errObj.message = "PLEASE ENTER A VALID COLLEGE ID";
      res.render("./ejsFiles/errorPage.ejs", { errObj });
    } else {
      const newStudent = await Student.create(formData);
      res.sendFile(path.join(__dirname, "/../views/login.html"));
    }
  } catch (err) {
    console.log(err);
    const errObj = {
      message: "SORRY SOME ERROR OCCURED",
      who: "SERVER ERROR",
    };
    res.render("./ejsFiles/errorPage.ejs", { errObj });
  }
};
