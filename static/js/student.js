"use strict";
////////////CURR USER///////////////////
let currUser = {};
////////////////////////////////////////
// selectors
let currStudentIndex = 0;
const std_list = document.querySelector(".std_list");
const close_btn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const head = document.querySelector(".header");
const table_wrapper = document.querySelector("#table-wrapper");
const modal_content = document.querySelector(".modal-content");

// sorting of student_info by name

student_info.sort((a, b) => {
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

// console.log(student_info);
//////////////////////////////////////////////////////
//ADDING USER LIST(HTML)
student_info.forEach((curr, i) => {
  try {
    const user_list = `<tr  class = "student">
<td style="width: 30px; padding: 0px">
  <img
    class="user_thumb"
    src=${curr.image_icon}
  />
</td>
<td>${curr.name}</td>
<td>IT</td>
<td>${curr.roll_no}</td>
</tr>`;
    std_list.insertAdjacentHTML("beforeend", user_list);
  } catch (err) {
    console.log(err);
  }
});
////////////////////////////////////////////////////////////////////////
// adding student info to modal
let achive = ``;
student_info.forEach((curr, i) => {
  curr.achivements.forEach((curr) => {
    achive += `<p style="display: block">${curr}</p>`;
  });

  const std_info = `
<div class="hide stdInfo">
<img
  class="student-img"
  src="${curr.image}"
/>
<h2>${curr.name}</h2>
<br />
<p>
  ${curr.description}
</p>
<br />
<hr style="margin-top: 15px" />
<br />
<h3>ACHIEVEMENTS</h3>
<br />
${achive}
<br />
<hr />
<br />
<h3>SKILLS</h3>
<br />
<h4>${curr.skills}</h4>
</div>`;
  modal_content.insertAdjacentHTML("beforeend", std_info);
  achive = ``;
});

/////////////////////////// FUNCTION START /////////////////////////////

const showDetails = (currstd) => {
  stdInfo[currstd].classList.toggle("hide");
};

/////////////////////////// FUNCTION END //////////////////////////////
//------------------------------------------------------------------//
/////////////////////////// EVENT LISTENERS //////////////////////////
const stdInfo = document.querySelectorAll(".stdInfo");
// console.log(stdInfo);
const student = document.querySelectorAll(".student");

// show student description
student.forEach((curr, i) => {
  curr.addEventListener("click", () => {
    table_wrapper.classList.toggle("hide");
    head.classList.toggle("hide");
    modal.classList.toggle("hide");
    showDetails(i);
    currStudentIndex = i;
  });
});

// close modal
close_btn.addEventListener("click", () => {
  modal.classList.toggle("hide");
  table_wrapper.classList.toggle("hide");
  head.classList.toggle("hide");
  stdInfo[currStudentIndex].classList.toggle("hide");
});

////////////////////////////////////////////////////////
