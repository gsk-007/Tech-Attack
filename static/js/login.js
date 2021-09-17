"use strict";

//=============== FOR TEMPORARY FRONTEND DISPLAY ============= //
/*
const foot = document.querySelector(".f");
const form_cont = document.querySelector(".form-container");
const nav = document.querySelector(".header");
const mod = document.querySelector(".modal");
const signupSubmit = document.querySelector(".loginBtn");
const modC = document.querySelector(".modal-content");
const x = document.querySelector(".close");
const showDet = document.querySelector(".showDet");
const currDet = document.querySelector(".currDet");
let stdInfo = "";
signupSubmit.addEventListener("click", () => {
  const userName = document.querySelector(".userName").value;
  const userPass = document.querySelector(".userPass").value;

  //////////////////
  function whichUser(ele) {
    return ele.name === userName;
  }
  /////////////////

  currUser = student_info.find(whichUser);
  if (currUser === undefined) {
    window.alert("INVALID USER PLEASE LOG IN FIRST OR RECHECK THE FIELDS");
  } else if (currUser.password !== userPass) {
    window.alert("WRONG PASSWORD! PLEASE RECHECK YOUR PASSWORD");
  } else {
    // window.alert(`Welcome ${currUser.name}`);
    form_cont.classList.toggle("hide");
    nav.classList.toggle("hide");
    mod.classList.toggle("hide");
    foot.style.display = "none";
    //////////////////////////////
  }
});

const editBtn = document.querySelector(".editBtn");
editBtn.addEventListener("click", () => {
  const edit = document.querySelector(".edit").value;
  const change = document.querySelector(".change").value;
  if (edit === "skills") {
    currUser.skills = change;
    alert("Skills updated successfully 👍");
  } else if (edit === "password") {
    currUser.password = change;
    alert("Password updated successfully 👍");
  } else if (edit === "roll_no") {
    currUser.roll_no = change;
    alert("Roll No. updated successfully 👍");
  } else if (edit === "description") {
    currUser.description = change;
    alert("Description updated successfully 👍");
  } else if (edit === "achivements") {
    currUser.password = change;
    alert("Achivements updated successfully 👍");
  }
});
x.addEventListener("click", () => {
  form_cont.classList.toggle("hide");
  nav.classList.toggle("hide");
  mod.classList.toggle("hide");
  foot.style.display = "flex";
});

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

showDet.addEventListener("click", () => {
  let ach = ``;
  currUser.achivements.forEach((ele) => {
    ach += ele;
  });
  const data = `<div class="stdInfo">
<img
  class="student-img"
  src="${currUser.image}"
/>
<h2>${currUser.name}</h2>
<br />
<p>
  ${currUser.description}
</p>
<br />
<hr style="margin-top: 15px" />
<br />
<h3>ACHIEVEMENTS</h3>
<br />
${ach}
<br />
<hr />
<br />
<h3>SKILLS</h3>
<br />
<h4>${currUser.skills}</h4>
<br />
<hr />
<br />
<h3>PASSWORD</h3>
<br />
<h4>${currUser.password}</h4>
<br />
<hr />
<br />
<h3>ROLL_NO.</h3>
<br />
<h4>${currUser.roll_no}</h4>
</div>`;

  currDet.innerHTML = "";
  currDet.insertAdjacentHTML("afterbegin", data);
  ach = ``;
});
*/
