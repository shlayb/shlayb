const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const inistart = document.querySelector(".starting");
const nav = document.querySelector(".ininav");
const home = document.querySelector(".inihome");
const about = document.querySelector(".iniabout");
const stack = document.querySelector(".inistack");

const start2 = document.getElementById("starting");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
inistart.addEventListener("click", () => {
  home.classList.remove("hidden");
  home.classList.remove("max-lg:grid");
  start2.remove();
  nav.classList.remove("hidden");
  about.classList.remove("hidden");
  stack.classList.remove("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
