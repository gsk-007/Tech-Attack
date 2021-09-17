const path = require("path");
const Student = require("./../models/studentModel");

// ================= STUDENT VIEW CONTROLLER FUNCTION ================= //

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

// ================= SIGNUP CONTROLLER FUNCTION ================= //

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
    } else if (formData.email.indexOf(formData.roll_no.toLowerCase()) <= -1) {
      errObj = {
        message: "PLEASE RECHECK YOUR EMAIL",
        who: "USER ERROR",
      };
      res.render("./ejsFiles/errorPage.ejs", { errObj });
    } else {
      // const newStudent = await Student.create(formData);
      res.sendFile(path.join(__dirname, "/../views/login.html"));
    }
  } catch (err) {
    console.log(err);
    const errObj = {
      message: "THE ENTERED DATA ALREADY EXIST",
      who: "USER ERROR",
    };
    res.render("./ejsFiles/errorPage.ejs", { errObj });
  }
};

// ================= LOGIN CONTROLLER FUNCTION ================= //

exports.logIn = async (req, res) => {
  let errObj = {};
  try {
    const input = req.body;
    input.roll_no = input.roll_no.toUpperCase();
    Student.find({ roll_no: input.roll_no }, (err, docs) => {
      try {
        if (docs.length === 0) {
          errObj = {
            message: `NO USER WITH ID : ${input.roll_no}`,
            who: "USER ERROR",
          };
          res.render("./ejsFiles/errorPage.ejs", { errObj });
        } else if (docs[0].password !== input.password) {
          console.log(input.password);
          errObj = {
            message: `WRONG PASSWORD`,
            who: "USER ERROR",
          };
          res.render("./ejsFiles/errorPage.ejs", { errObj });
        } else {
          res.render("./ejsFiles/userDashboard.ejs", { docs });
        }
      } catch (err) {
        console.log(err);
        errObj = {
          message: `MAKE SURE YOU ARE SIGNED UP`,
          who: "! ! !",
        };
        res.render("./ejsFiles/errorPage.ejs", { errObj });
      }
    });
  } catch (err) {
    console.log(err);
    errObj = {
      message: `SOMETHING WENT WRONG`,
      who: "! ! !",
    };
    res.render("./ejsFiles/errorPage.ejs", { errObj });
  }
};
