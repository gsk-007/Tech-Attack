const path = require("path");
const Notice = require("./../models/noticeModel");
const Student = require("./../models/studentModel");

exports.showNotice = async (req, res) => {
  let ntdata = await Notice.find();
  res.render("./ejsFiles/noticeboard.ejs", { ntdata });
};

exports.addNotice = async (req, res) => {
  try {
    let errObj = {
      message: "ONLY CRS ARE ALLOWED TO FILLUP THE FORM",
      who: "USER ERROR",
    };
    const bod = req.body;
    bod.uid = bod.uid.toUpperCase();
    const std = await Student.find({ roll_no: bod.uid });
    if (bod.uid === "B420066" || bod.uid === "B420024") {
      if (std[0].password === bod.password) {
        let newNot = {
          heading: bod.heading,
          content: bod.content,
        };
        await Notice.create(bod);
        let ntdata = await Notice.find();
        res.render("./ejsFiles/noticeboard.ejs", { ntdata });
        // res.status(204).send();
      } else {
        errObj.message = "WRONG PASSWORD";
        res.render("./ejsFiles/errorPage.ejs", { errObj });
      }
    } else {
      res.render("./ejsFiles/errorPage.ejs", { errObj });
    }
  } catch (err) {
    console.log(err);
    errObj.message = "SOMETHING WENT WRONG";
    errObj.who = "! ! !";
    res.render("./ejsFiles/errorPage.ejs", { errObj });
  }
};

exports.deletenotice = async (req, res) => {
  try {
    let errObj = {
      message: "ONLY CRS ARE ALLOWED TO FILLUP THE FORM",
      who: "USER ERROR",
    };
    const bod = req.body;
    bod.uid = bod.uid.toUpperCase();
    const std = await Student.find({ roll_no: bod.uid });
    if (bod.uid === "B420066" || bod.uid === "B420024") {
      if (std[0].password === bod.password) {
        if (bod.heading === "" && bod.content === "") {
          await Notice.findByIdAndDelete(bod.nid);
        } else {
          let editObj = {
            heading: bod.heading,
            content: bod.content,
          };
          await Notice.findByIdAndUpdate(bod.nid, editObj);
        }
        let ntdata = await Notice.find();
        res.render("./ejsFiles/noticeboard.ejs", { ntdata });
      } else {
        errObj.message = "WRONG PASSWORD";
        res.render("./ejsFiles/errorPage.ejs", { errObj });
      }
    } else {
      res.render("./ejsFiles/errorPage.ejs", { errObj });
    }
  } catch (err) {
    console.log(err);
    errObj.message = "SOMETHING WENT WRONG";
    errObj.who = "! ! !";
    res.render("./ejsFiles/errorPage.ejs", { errObj });
  }
};
