const addBtn = document.querySelector(".divBtn");
const ooo = document.querySelector(".ooo");
const inv = document.querySelector(".inv");
const invi = document.querySelector(".invi");
const hd = document.querySelector(".header");
const ov1 = document.querySelector(".overlay1");
const ov2 = document.querySelector(".overlay2");
const x1 = document.querySelector(".close1");
const x2 = document.querySelector(".close2");
const del_btn = document.querySelectorAll(".del-btn");
const noticeid = document.querySelectorAll(".notice_id");
const hq = document.querySelector(".hq");
const hq_del = document.querySelector(".hq-del");
const hq_edit = document.querySelector(".hq-edit");
const ed = document.querySelectorAll(".edit");
const edt = document.querySelectorAll(".edt");
const conf = document.querySelector(".conf");
ooo.addEventListener("click", () => {
  header.classList.toggle("hide");
  inv.classList.toggle("hide");
  ov2.classList.toggle("hide");
  addBtn.classList.toggle("hide");
});
x2.addEventListener("click", () => {
  header.classList.toggle("hide");
  inv.classList.toggle("hide");
  ov2.classList.toggle("hide");
  addBtn.classList.toggle("hide");
});

del_btn.forEach((curr, i) => {
  curr.addEventListener("click", () => {
    document.querySelector(".nid-div").value = noticeid[i].value;
    header.classList.toggle("hide");
    inv.classList.toggle("hide");
    ov1.classList.toggle("hide");
    addBtn.classList.toggle("hide");
  });
});

x1.addEventListener("click", () => {
  header.classList.toggle("hide");
  inv.classList.toggle("hide");
  ov1.classList.toggle("hide");
  addBtn.classList.toggle("hide");
});

hq_del.addEventListener("click", () => {
  hq.classList.toggle("hide");
  conf.removeAttribute("disabled");
});
hq_edit.addEventListener("click", () => {
  conf.removeAttribute("disabled");
  hq.classList.toggle("hide");
  ed.forEach((curr, i) => {
    curr.classList.toggle("hide");
  });
});
