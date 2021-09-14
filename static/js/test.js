/////////////////////////////////////////
// STUDENT DATA
const male_def_icon = "./../static/imgs/student_info_resource/male_icon.ico";
const male_def_img = "./../static/imgs/student_info_resource/male_img.png";
const female_def_icon =
  "./../static/imgs/student_info_resource/female_icon.ico";
const female_def_img = "./../static/imgs/student_info_resource/female_img.png";

let student_info = [
  {
    name: "Akash Gupta",
    password: "1234",
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
    password: "1234",
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
    password: "1234",
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
    password: "1234",
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
    password: "1234",
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
    password: "1234",
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
/////////////////////////////////////////

// TESTING DATA
//--------------------
student_info.push({
  name: "Shreya Singh",
  password: "1234",
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
  password: "1234",
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
