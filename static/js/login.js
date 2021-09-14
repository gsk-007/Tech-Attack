"use strict";

const signupSubmit = document.querySelector();

signupSubmit.addEventListener("click", () => {
  const userName = `document.querySelector(".")`;
  const userPass = `document.querySelector(".")`;
  function whichUser(ele) {
    return ele.name === userName;
  }
  currUser = student_info.find(whichUser);
  if (currUser === undefined) {
    window.alert("INVALID USER PLEASE LOG IN FIRST OR RECHECK THE FIELDS");
  } else if (currUser.password !== userPass) {
    window.alert("WRONG PASSWORD! PLEASE RECHECK YOUR PASSWORD");
  } else {
    window.alert(`WELCOME ${currUser.name}`);
  }
});
