const poll = document.querySelectorAll(".poll");
const give_vote = document.querySelectorAll(".give-vote");
let poll_count = poll.length;
const add_poll = document.querySelector(".add");
const all_track_btn = document.querySelectorAll(".give-vote");
const addpoll = document.querySelector(".addpoll");
const ov1 = document.querySelector(".overlay1");
const ov2 = document.querySelector(".overlay2");
const close1 = document.querySelector(".close-btn1");
const close2 = document.querySelectorAll(".close-btn2");
const addoption = document.querySelector(".add-options");
const optionaddtd = document.querySelector(".optionaddtd");
const pollno = document.querySelector(".poll-no");
const create_poll_btn = document.querySelector(".create-poll-btn");
const trackVote = document.querySelectorAll(".trackvote");

add_poll.addEventListener("click", () => {
  ov1.classList.toggle("hidden");
});
close1.addEventListener("click", () => {
  ov1.classList.toggle("hidden");
});

all_track_btn.forEach((curr, i) => {
  curr.addEventListener("click", () => {
    ov2.classList.toggle("hidden");
  });
});

close2.forEach((curr, i) => {
  curr.addEventListener("click", () => {
    ov2.classList.toggle("hidden");
    trackVote.forEach((curr, i) => {
      curr.classList.add("hidden");
    });
  });
});

///////

addoption.addEventListener("click", () => {
  optionaddtd.insertAdjacentHTML(
    "beforeend",
    `<input type="text" name="option" id="" required/>`
  );
});

//////
pollno.value = poll.length + 1;
/////

give_vote.forEach((curr, i) => {
  curr.addEventListener("click", () => {
    trackVote[i].classList.toggle("hidden");
  });
});
