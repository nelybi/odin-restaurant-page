import "./style.css";
import { loadPage } from "./homePage";
import { menu } from "./menu.js";
import { loadContact } from "./contact";

const buttonHome = document.querySelector(".home");
const buttonMenu = document.querySelector(".menus");
const buttonContact = document.querySelector(".contact");

function clearContent() {
  document.querySelector("#content").textContent = "";
}

buttonHome.addEventListener("click", () => {
  clearContent();
  loadPage();
});

buttonMenu.addEventListener("click", () => {
  clearContent();
  menu();
});

buttonContact.addEventListener("click", () => {
  clearContent();
  loadContact();
});

loadPage();
