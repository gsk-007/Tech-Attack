const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

//--------router--------//
const studentRouter = require("./routes/studentRoute");
const pageController = require("./controllers/pageController");
const pollController = require("./controllers/pollController");
const noticeController = require("./controllers/noticeController");
dotenv.config({ path: "./config.env" });

// MONGO ATLAS CONNECT

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// ---
// SETTING VIEW ENGINE EJS
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));

//ENDPOINTS
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/timetable.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/timetable.html"));
});

app.get("/noticeboard.html", noticeController.showNotice);

app.get("/student.html", pageController.studentView);

app.get("/to-do.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/to-do.html"));
});

app.get("/signup.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/signup.html"));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/poll.html", pollController.showPolls);

app.post("/signup.html", pageController.signUp);
app.post("/userPage", pageController.logIn);
app.post("/editData", pageController.editData);
app.post("/poll", pollController.createPoll);
app.post("/editpoll", pollController.editpoll);
app.post("/addNotice", noticeController.addNotice);
app.post("/deletenotice", noticeController.deletenotice);

// STUDENT API ROUTES
app.use("/api/v1/students", studentRouter);

//Start the server
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
