"use strict";
const loginsubmit = document.querySelector(".submit");

loginsubmit.addEventListener("click", () => {
  const stdInputName = document.querySelector(".inpName").value;
  const stdInputPass = document.querySelector(".pass").value;
  const stdID = document.querySelector(".inpId").value;
  const stdGen = document.querySelector(".inpGen").value;
  const stdImg = `./../static/imgs/student_info_resource/${stdGen}_img.png`;
  const stdIco = `./../static/imgs/student_info_resource/${stdGen}_icon.ico`;
  const newStd = {
    name: stdInputName,
    password: stdInputPass,
    roll_no: stdID,
    image: stdImg,
    image_icon: stdIco,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lorem quis placerat rutrum, purus mauris tristique sapien, ut rhoncus ante ex a nisi. Nunc tincidunt augue dignissim augue fringilla, ac luctus urna maximus. Proin lobortis tortor et mattis facilisis. Nulla facilisi. Quisque sit amet porttitor nunc, sed fringilla elit.",
    achivements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mauris sit amet dolor vitae quam mattis tincidunt in a sem.",
      "Ut at leo at sem varius venenatis.",
    ],
    skills: "1. X | 2. X | 3. X",
  };
  if (
    stdInputName !== "" &&
    stdInputPass !== "" &&
    stdGen !== "" &&
    stdImg !== "" &&
    stdIco !== ""
  ) {
    student_info.push(newStd);
    console.log(newStd);
  } else {
    window.alert("PLEASE FILL ALL DETAILS BEFORE SUBMITTING");
  }
});
