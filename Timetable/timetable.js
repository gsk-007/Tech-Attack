"use strict";

const mon = document.querySelectorAll(".mon");
const tue = document.querySelectorAll(".tue");
const wed = document.querySelectorAll(".wed");
const thu = document.querySelectorAll(".thu");
const fri = document.querySelectorAll(".fri");
// for glow effect on hover

function glow(ele) {
  ele[0].addEventListener("mouseover", () => {
    ele.forEach((curr) => {
      curr.classList.toggle("glow");
    });
  });
  ele[0].addEventListener("mouseout", () => {
    ele.forEach((curr) => {
      curr.classList.toggle("glow");
    });
  });
}

glow(mon);
glow(tue);
glow(wed);
glow(thu);
glow(fri);
