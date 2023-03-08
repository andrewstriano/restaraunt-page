import loadFooter from "./footer";
import { contactLink, homeLink, mainContent, menuLink } from "./header";
import { loadMenu } from "./menu";

// hero page
const heroContainer = document.createElement("div");
heroContainer.classList.add("heroContainer");

const heroText = document.createElement("p");
heroText.classList.add("heroText");
heroText.innerText = "Route 99 Brooks, Oregon";

const heroButton = document.createElement("button");
heroButton.classList.add("heroButton");
heroButton.innerText = "Check out our Menu!";
heroButton.addEventListener("click", loadMenu);

heroContainer.append(heroText, heroButton);

const homeContainer = document.createElement("div");
homeContainer.classList.add("homeContainer");
homeContainer.append(heroContainer);

function loadHome() {
  mainContent.innerHTML = "";
  mainContent.append(homeContainer);
  homeLink.classList.add("currentPage");
  contactLink.classList.remove("currentPage");
  menuLink.classList.remove("currentPage");
  loadFooter();
}

homeLink.addEventListener("click", loadHome);

export { homeLink, loadHome };
