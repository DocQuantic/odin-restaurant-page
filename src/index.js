import "./styles.css";
import {default as home} from "./modules/home" 
import {default as menu} from "./modules/menu"
import {default as about} from "./modules/about"

home();

const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", () => {
    home();
})

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", () => {
    menu();
})

const aboutBtn = document.querySelector("#about-btn");
aboutBtn.addEventListener("click", () => {
    about();
})