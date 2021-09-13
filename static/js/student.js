"use strict";
////////////CURR USER///////////////////

let currUser = 0;

////////////////////////////////////////
// selectors
let currStudentIndex = 0;
const std_list = document.querySelector(".std_list");
const close_btn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const head = document.querySelector(".header");
const table_wrapper = document.querySelector("#table-wrapper");
const modal_content = document.querySelector(".modal-content");
/////////////////////////////////////////

/////////////////////////////////////////
// STUDENT DATA
const male_def_icon = "./../static/imgs/student_info_resource/male_icon.ico";
const male_def_img = "./../static/imgs/student_info_resource/male_img.png";
const female_def_icon =
  "./../static/imgs/student_info_resource/female_icon.ico";
const female_def_img = "./../static/imgs/student_info_resource/female_img.png";
// ...
const student_info = [
  {
    name: "Akash Gupta",
    roll_no: "B420001",
    image: male_def_img,
    image_icon: male_def_icon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lorem quis placerat rutrum, purus mauris tristique sapien, ut rhoncus ante ex a nisi. Nunc tincidunt augue dignissim augue fringilla, ac luctus urna maximus. Proin lobortis tortor et mattis facilisis. Nulla facilisi. Quisque sit amet porttitor nunc, sed fringilla elit.",
    achivements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mauris sit amet dolor vitae quam mattis tincidunt in a sem.",
      "Ut at leo at sem varius venenatis.",
    ],
    skills: "1. C++ | 2. C | 3. HTML | 4. javaScript | 5. CSS",
  },
  {
    name: "Avansh Singh",
    roll_no: "B420002",
    image: male_def_img,
    image_icon: male_def_icon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lorem quis placerat rutrum, purus mauris tristique sapien, ut rhoncus ante ex a nisi. Nunc tincidunt augue dignissim augue fringilla, ac luctus urna maximus. Proin lobortis tortor et mattis facilisis. Nulla facilisi. Quisque sit amet porttitor nunc, sed fringilla elit.",
    achivements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mauris sit amet dolor vitae quam mattis tincidunt in a sem.",
      "Ut at leo at sem varius venenatis.",
    ],
    skills: "1. C++ | 2. C | 3. HTML | 4. java | 5. CSS",
  },
  {
    name: "Bhairav Gupta",
    roll_no: "B420003",
    image: male_def_img,
    image_icon: male_def_icon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lorem quis placerat rutrum, purus mauris tristique sapien, ut rhoncus ante ex a nisi. Nunc tincidunt augue dignissim augue fringilla, ac luctus urna maximus. Proin lobortis tortor et mattis facilisis. Nulla facilisi. Quisque sit amet porttitor nunc, sed fringilla elit.",
    achivements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mauris sit amet dolor vitae quam mattis tincidunt in a sem.",
      "Ut at leo at sem varius venenatis.",
    ],
    skills: "1. C++ | 2. C | 3. python ",
  },
  {
    name: "Gursimrat Kalra",
    roll_no: "B420004",
    image: male_def_img,
    image_icon: male_def_icon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lorem quis placerat rutrum, purus mauris tristique sapien, ut rhoncus ante ex a nisi. Nunc tincidunt augue dignissim augue fringilla, ac luctus urna maximus. Proin lobortis tortor et mattis facilisis. Nulla facilisi. Quisque sit amet porttitor nunc, sed fringilla elit.",
    achivements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mauris sit amet dolor vitae quam mattis tincidunt in a sem.",
      "Ut at leo at sem varius venenatis.",
    ],
    skills: "1. C++ | 2. C | 3. HTML | 4. javaScript | 5. CSS",
  },
  {
    name: "Rajesh Raj",
    roll_no: "B420005",
    image: male_def_img,
    image_icon: male_def_icon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lorem quis placerat rutrum, purus mauris tristique sapien, ut rhoncus ante ex a nisi. Nunc tincidunt augue dignissim augue fringilla, ac luctus urna maximus. Proin lobortis tortor et mattis facilisis. Nulla facilisi. Quisque sit amet porttitor nunc, sed fringilla elit.",
    achivements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mauris sit amet dolor vitae quam mattis tincidunt in a sem.",
      "Ut at leo at sem varius venenatis.",
    ],
    skills: "1. C++ | 2. C | 3. HTML",
  },
  {
    name: "Yash Gupta",
    roll_no: "B420006",
    image: male_def_img,
    image_icon: male_def_icon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lorem quis placerat rutrum, purus mauris tristique sapien, ut rhoncus ante ex a nisi. Nunc tincidunt augue dignissim augue fringilla, ac luctus urna maximus. Proin lobortis tortor et mattis facilisis. Nulla facilisi. Quisque sit amet porttitor nunc, sed fringilla elit.",
    achivements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mauris sit amet dolor vitae quam mattis tincidunt in a sem.",
      "Ut at leo at sem varius venenatis.",
    ],
    skills: "1. C++ | 2. C | 3. HTML | 4. javaScript | 5. CSS",
  },
];
// TESTING DATA
//--------------------
student_info.push({
  name: "Shreya Singh",
  roll_no: "B420006",
  image: female_def_img,
  image_icon: female_def_icon,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lorem quis placerat rutrum, purus mauris tristique sapien, ut rhoncus ante ex a nisi. Nunc tincidunt augue dignissim augue fringilla, ac luctus urna maximus. Proin lobortis tortor et mattis facilisis. Nulla facilisi. Quisque sit amet porttitor nunc, sed fringilla elit.",
  achivements: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Mauris sit amet dolor vitae quam mattis tincidunt in a sem.",
    "Ut at leo at sem varius venenatis.",
  ],
  skills: "1. HTML | 2. javaScript | 3. CSS",
});

student_info.push({
  name: "Rashmika Singh",
  roll_no: "B420008",
  image: female_def_img,
  image_icon: female_def_icon,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lorem quis placerat rutrum, purus mauris tristique sapien, ut rhoncus ante ex a nisi. Nunc tincidunt augue dignissim augue fringilla, ac luctus urna maximus. Proin lobortis tortor et mattis facilisis. Nulla facilisi. Quisque sit amet porttitor nunc, sed fringilla elit.",
  achivements: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Mauris sit amet dolor vitae quam mattis tincidunt in a sem.",
    "Ut at leo at sem varius venenatis.",
  ],
  skills: "1. C++ | 2. C ",
});
//--------------------
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
