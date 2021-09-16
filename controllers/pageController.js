const Student = require("./../models/studentModel");
exports.studentView = async (req, res) => {
  try {
    const stdData = await Student.find();
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
