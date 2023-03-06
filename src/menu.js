import { menuLink, mainContent, homeLink, contactLink } from "./header";
import breakfast from "./images/breakfast_menu.jpg";
import lunch from "./images/lunch_menu.jpg";
import dinner from "./images/dinner_menu.jpg";

const bContainer = document.createElement("div");
bContainer.classList.add("menuContainer");
const bHead = document.createElement("h2");
bHead.classList.add("menuHeader");
bHead.innerText = "Breakfast Menu";
const breakfastMenu = new Image();
breakfastMenu.src = breakfast;
bContainer.append(bHead, breakfastMenu);

const lContainer = document.createElement("div");
lContainer.classList.add("menuContainer");
const lHead = document.createElement("h2");
lHead.classList.add("menuHeader");
lHead.innerText = "Lunch Menu";
const lunchMenu = new Image();
lunchMenu.src = lunch;
lContainer.append(lHead, lunchMenu);

const dContainer = document.createElement("div");
dContainer.classList.add("menuContainer");
const dHead = document.createElement("h2");
dHead.classList.add("menuHeader");
dHead.innerText = "Dinner Menu";
const dinnerMenu = new Image();
dinnerMenu.src = dinner;
dContainer.append(dHead, dinnerMenu);

function loadMenu() {
  mainContent.innerHTML = "";
  homeLink.classList.remove("currentPage");
  contactLink.classList.remove("currentPage");
  menuLink.classList.add("currentPage");
  mainContent.append(bContainer, lContainer, dContainer);
}

menuLink.addEventListener("click", loadMenu);

export default { menuLink };
