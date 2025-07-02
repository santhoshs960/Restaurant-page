import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

import "./style.css"

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const aboutTab = document.querySelector("#about");

const contain = document.querySelector("#content");

home()

homeTab.addEventListener("click", (e) => {
    e.preventDefault();
    contain.textContent = "";
    home();
   
})

menuTab.addEventListener("click", (e) => {
    e.preventDefault();
    contain.textContent = "";
    menu();
})

aboutTab.addEventListener("click", (e) => {
    e.preventDefault();
    contain.textContent = "";
    about();
})