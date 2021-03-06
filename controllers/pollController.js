const path = require("path");
const Poll = require("./../models/pollModel");
const Student = require("./../models/studentModel");

// ---
let initarr = [];
for (let i = 0; i < 67; i++) {
  initarr[i] = false;
}
// ---

//============== HANDLER FUNCTION TO CREATE NEW POLLS ============== //

exports.createPoll = async (req, res) => {
  try {
    let errObj = {
      message: "NO USER WITH THIS ID",
      who: "USER ERROR",
    };
    const pbody = req.body;
    pbody.pollid = Number(pbody.pollid);
    pbody.author = pbody.author.toUpperCase();
    pbody.voted = [...initarr];
    pbody.weight = [];
    const stdData = await Student.find({ roll_no: pbody.author });
    if (stdData.length !== 0) {
      for (let i = 0; i < pbody.option.length; i++) {
        pbody.weight[i] = 0;
      }
      if (stdData[0].password === pbody.password) {
        const newPoll = await Poll.create(pbody);
        const pollData = await Poll.find();
        res.render("./ejsFiles/poll.ejs", { pollData });
      } else {
        errObj.message = "PLEASE CHECK YOUR PASSWORD";
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

//============== HANDLER FUNCTION TO DISPLAY ALL POLLS ============== //

exports.showPolls = async (req, res) => {
  try {
    const pollData = await Poll.find();
    res.render("./ejsFiles/poll.ejs", { pollData });
  } catch (err) {
    console.log(err);
    errObj.message = "SOMETHING WENT WRONG";
    errObj.who = "! ! !";
    res.render("./ejsFiles/errorPage.ejs", { errObj });
  }
};

//============== HANDLER FUNCTION TO UPDATE VOTE COUNT FOR EACH POLL ============== //

exports.editpoll = async (req, res) => {
  try {
    const stdData = await Student.find({ roll_no: req.body.author });
    const pdata = await Poll.find({ pollid: Number(req.body.pollid) });
    let errObj = {
      message: "NO USER WITH THIS ID",
      who: "USER ERROR",
    };
    if (stdData.length !== 0) {
      if (stdData[0].password === req.body.password) {
        if (pdata[0].voted[Number(req.body.author.slice(-2)) - 1] === false) {
          pdata[0].weight[Number(req.body.selected)]++;
          pdata[0].voted[Number(req.body.author.slice(-2)) - 1] = true;
          await Poll.findByIdAndUpdate(pdata[0]._id, pdata[0]);
          const pollData = await Poll.find();
          res.render("./ejsFiles/poll.ejs", { pollData });
        } else {
          errObj.message = "ALREADY VOTED";
          res.render("./ejsFiles/errorPage.ejs", { errObj });
        }
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
