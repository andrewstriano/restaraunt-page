import lew from "./images/logo.svg";

const mainContent = document.querySelector("#content");

const header = document.createElement("div");
header.classList.add("header");

const headerLinksContainer = document.createElement("div");
headerLinksContainer.classList.add("headerLinksContainer");
const headerLogo = new Image();
headerLogo.src = lew;
const homeLink = document.createElement("a");
const contactLink = document.createElement("a");
const menuLink = document.createElement("a");
homeLink.classList.add("navLinks");
homeLink.innerHTML = "HOME";
// homeLink.addEventListener("click", loadHome());

contactLink.classList.add("navLinks");
contactLink.innerText = "CONTACT";
// contactLink.addEventListener("click", loadContact());

menuLink.classList.add("navLinks");
menuLink.innerText = "MENU";

export default function buildHeader() {
  headerLinksContainer.append(homeLink, contactLink, menuLink);
  header.append(headerLogo, headerLinksContainer);
  document.body.insertBefore(header, mainContent);
}
export { homeLink, contactLink, menuLink, mainContent };
