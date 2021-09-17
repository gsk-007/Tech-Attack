const btn = document.getElementById("edit-info-btn");
const btn2 = document.getElementById("show-details");
const first = document.querySelector(".first-display");
const second = document.querySelector(".second-display");
const addBtn = document.querySelector(".editBtn");
const info = document.querySelector(".info");
const form = document.querySelector(".form");
const close = document.querySelector(".close");
const addSkill = document.querySelector(".addSkill");
const addAchi = document.querySelector(".addAchi");
const achiInput = document.querySelector(".achiInput");
const skillInput = document.querySelector(".skillInput");

btn.addEventListener("click", () => {
  if (btn.innerHTML == "Edit Info") {
    first.classList.add("hidden");
    second.classList.remove("hidden");
  }
});

// addBtn.addEventListener("click", () => {
//   let str = `
//   <select class="info" name="">
//   <option value="skills">Skills</option>
//   <option value="age">Age</option>
//   <option value="description">Description</option>
//   <option value="achievement">Achievements</option>
//   <option value="password">Password</option>
// </select>
//   <input  class="info change" type="text"name="${info.value}" />`;
//   if (info.value == "skills" || info.value == "achievement") {
//     form.insertAdjacentHTML("afterbegin", str);
//   }
// });

close.addEventListener("click", () => {
  if (btn.innerHTML == "Edit Info") {
    second.classList.add("hidden");
    first.classList.remove("hidden");
  }
});

addAchi.addEventListener("click", () => {
  achiInput.insertAdjacentHTML(
    "beforeend",
    `<td>
      <input style="margin-top:1px" class="info change" type="text" name="achievement" />
    </td>`
  );
});
addSkill.addEventListener("click", () => {
  skillInput.insertAdjacentHTML(
    "beforeend",
    `<td>
      <input style="margin-top:1px" class="info change" type="text" name="skills" />
    </td>`
  );
});
