"use strict";

const mon = document.querySelectorAll(".mon");
const tue = document.querySelectorAll(".tue");
const wed = document.querySelectorAll(".wed");
const thu = document.querySelectorAll(".thu");
const fri = document.querySelectorAll(".fri");
// for glow effect on hover

function glow(ele, i) {
  ele[i].addEventListener("mouseover", () => {
    ele.forEach((curr) => {
      curr.classList.toggle("glow");
    });
  });
  ele[i].addEventListener("mouseout", () => {
    ele.forEach((curr) => {
      curr.classList.toggle("glow");
    });
  });
}

glow(mon, 4);
glow(tue, 5);
glow(wed, 5);
glow(thu, 5);
glow(fri, 4);
