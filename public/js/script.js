const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const inistart = document.querySelector(".starting");
const nav = document.querySelector(".ininav");
const home = document.querySelector(".inihome");
const about = document.querySelector(".iniabout");
const stack = document.querySelector(".inistack");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");

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
  about.classList.add("flex");
  stack.classList.remove("hidden");
  stack.classList.add("flex");
  project.classList.remove("hidden");
  project.classList.add("flex");
  contact.classList.remove("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    document.getElementById("gapp").classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    document.getElementById("gapp").classList.add("hidden");
  }
};

const mode = document.getElementById("dark-light");
const modebtn = document.getElementById("dark-button");
const html = document.querySelector("html");
const modee = document.querySelector(".darkbtn");

mode.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    mode.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    modee.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
  } else {
    html.classList.add("dark");
    mode.innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
    modee.innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
  }
});
modebtn.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    modee.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    mode.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
  } else {
    html.classList.add("dark");
    modee.innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
    mode.innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
  }
});
