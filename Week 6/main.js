const button = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");
const modalButton = document.querySelector("#closebtn");

window.onscroll = function () {
  // the button unvisible, and in css we need to add in css display: none and position, top, right
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

const displayElement = () => {
  overlay.classList.toggle("hidden");
};

const topMe = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

button.addEventListener("click", topMe);
modalButton.addEventListener("click", displayElement);
