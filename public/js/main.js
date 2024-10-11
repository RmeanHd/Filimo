import Menu from "./Menu/Menu.js";
import Slider from "./Slider/slider.js";
import Special from "./Special/Special.js";
import SpecialExtra from "./SpecialExtra/SpecialExtra.js";
import New from "./New/New.js";
import Sliders from "./Sliders/Sliders.js";
import Dumb from "./Dumb/Dumb.js";
import Cinema from "./Cinema/Cinema.js";
import Comment from "./Comment/Comment.js";
import Frequent from "./Frequent/Frequent.js";
import Footer from "./Footer/Footer.js";

Menu();
Slider();
Special();
SpecialExtra();
New();
Sliders();
Dumb();
Cinema();
Comment();
Frequent();
Footer();
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

let clickme = document.querySelector(".click");
let tab = document.querySelector(".click .tab");
let clicker = document.querySelector(".click .clicker");

clickme.addEventListener("click", () => {
  tab.classList.remove("hidden");
  clicker.classList.add("hidden");
  tab.classList.add("grid");
});

let dropDownButton = document.querySelector(".filter .text");
let dropDown = document.querySelector(".filter");
let buttons = document.querySelectorAll(".dropdown-button");

dropDown.addEventListener("click", () => {
  document.querySelector(".filter__menu").classList.remove("hidden");
  document.querySelector(".filter__menu").classList.add("block");
  dropDown.classList.remove("border-[#606060]");
  dropDown.classList.add("border-[#f6b828]");
});

for (let a of buttons) {
  a.addEventListener("click", (event) => {
    document.querySelector(".filter__menu").classList.remove("block");
    document.querySelector(".filter__menu").classList.add("hidden");
    dropDown.classList.remove("border-[#f6b828]");
    dropDown.classList.add("border-[#606060]");
    dropDownButton.textContent = event.target.textContent;
  });
}
