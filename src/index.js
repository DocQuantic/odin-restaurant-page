import "./styles.css";
import {default as home} from "./modules/home" 
import {default as menu} from "./modules/menu"
import {default as about} from "./modules/about"

( function () {
    home();

    const content = document.querySelector("#content");
    function clearContent(){
        content.innerHTML = "";
    }

    const homeBtn = document.querySelector("#home-btn");
    homeBtn.addEventListener("click", () => {
        clearContent();
        home();
    })

    const menuBtn = document.querySelector("#menu-btn");
    menuBtn.addEventListener("click", () => {
        clearContent();
        menu();
    })

    const aboutBtn = document.querySelector("#about-btn");
    aboutBtn.addEventListener("click", () => {
        clearContent();
        about();
    })

})();